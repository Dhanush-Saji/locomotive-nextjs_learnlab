import GsapAnimations from "@/components/GsapAnimations";
import LocomotiveScroll from "@/components/LocomotiveScroll";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

export default function Home() {
  return (
    <>
      <main>
        <GsapAnimations />
      <LocomotiveScroll />
      <div className=""></div>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </>
  );
}
