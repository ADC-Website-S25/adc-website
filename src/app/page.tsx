import Instagram from "@/components/sections/instagram";
import Landing from "@/components/sections/landing";
import Leadership from "@/components/sections/leadership";
import Projects from "@/components/sections/projects";
import Sponsors from "@/components/sections/sponsors";
import WhatIsAdc from "@/components/sections/whatIsAdc";

export default function Home() {
  return (
    <main className="w-full">
      <Landing />
      <WhatIsAdc />
      <Leadership />
      <Projects />
      <Sponsors />
      <Instagram />
    </main>
  );
}
