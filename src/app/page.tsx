import { Dashboard } from "@/components/Dashboard";
import { Landing } from "@/components/Landing";

export default function Home() {
  return (
    <>
      <Landing />
      <div id="app" />
      <Dashboard />
    </>
  );
}
