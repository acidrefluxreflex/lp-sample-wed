import Image from "next/image";
import { HeroParallaxDemo } from "@/src/views/HeroParallaxDemo";
import { BackgroundBoxesDemo } from "@/src/views/BackgroundBoxes";
import { HeroScrollDemo } from "@/src/views/HeroScrollDemo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroParallaxDemo />
      
      <BackgroundBoxesDemo />
      <HeroScrollDemo />
    </main>
  );
}
