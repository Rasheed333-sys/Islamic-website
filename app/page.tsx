import { Hero } from "@/components/home/Hero";
import { RoadmapPreview } from "@/components/home/RoadmapPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RoadmapPreview />
      <TestimonialsSection />
      <FAQSection />
      <FinalCta />
    </>
  );
}