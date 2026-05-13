import Image from "next/image";
import OutlawSection from "./components/OutlawSection";
import ProofSection from "./components/ProofSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className="flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <OutlawSection />
      <ProofSection />
      <AboutSection />
    </div>
  );
}
