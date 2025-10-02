import { ProduceCardExamples } from "@/components/features/ProduceExamples";
import { ButtonExamples } from "@/components/features/ButtonExamples";
import "./page.css";
import { FadeInExample } from "@/components/features/FadeInExample";
import { RatingExamples } from "@/components/features/RatingExamples";

export function LandingPage() {
  return (
    <main>
      <ProduceCardExamples />
      <ButtonExamples />
      <FadeInExample />
      <RatingExamples />
      <FadeInExample />
      <FadeInExample />
      <FadeInExample />
      <FadeInExample />
    </main>
  );
}
