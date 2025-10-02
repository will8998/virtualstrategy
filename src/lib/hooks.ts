"use client";

import { useQuery } from "@tanstack/react-query";
import { usePublicClient } from "wagmi";
import { formatEther } from "viem";
import { ADDRESSES, STRATEGY_ABI, TOSHI_ABI, V3_POOL_ABI, POLL_INTERVAL_MS } from "./contracts";

export function useStrategyStatus() {
  const client = usePublicClient();

  return useQuery({
    queryKey: ["status"],
    queryFn: async () => {
      if (!client) throw new Error("No public client");

      const [ethBalance, toshiBalance, totalBurned] = await Promise.all([
        client.getBalance({ address: ADDRESSES.contract as `0x${string}` }),
        client.readContract({ address: ADDRESSES.toshi as `0x${string}` , abi: TOSHI_ABI, functionName: "balanceOf", args: [ADDRESSES.contract as `0x${string}`] }),
        client.readContract({ address: ADDRESSES.contract as `0x${string}` , abi: TOSHI_ABI, functionName: "balanceOf", args: [ADDRESSES.dead as `0x${string}`] }),
      ]);

      return {
        eth: ethBalance,
        toshi: toshiBalance as bigint,
        burned: totalBurned as bigint,
      };
    },
    refetchInterval: POLL_INTERVAL_MS,
  });
}

export type StrategyOrder = {
  id: number;
  ethSpent: bigint;
  toshiBought: bigint;
  entryPrice: bigint;
  sold: boolean;
};

export function useOrders() {
  const client = usePublicClient();

  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      if (!client) throw new Error("No public client");

      const count = (await client.readContract({ address: ADDRESSES.contract as `0x${string}`, abi: STRATEGY_ABI, functionName: "getOrderCount" })) as bigint;
      const active: StrategyOrder[] = [];
      const completed: StrategyOrder[] = [];

      for (let i = 1n; i <= count; i++) {
        const [ethSpent, toshiBought, entryPrice, sold] = (await client.readContract({ address: ADDRESSES.contract as `0x${string}`, abi: STRATEGY_ABI, functionName: "orders", args: [i] })) as any[];
        const order: StrategyOrder = {
          id: Number(i),
          ethSpent,
          toshiBought,
          entryPrice,
          sold,
        };
        (sold ? completed : active).push(order);
      }

      return { active, completed, count: Number(count) };
    },
    refetchInterval: POLL_INTERVAL_MS,
  });
}


