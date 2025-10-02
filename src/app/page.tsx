import { ProduceCardExamples } from "@/components/features/ProduceExamples";
import { ButtonExamples } from "@/components/features/ButtonExamples";
import "./page.css";
import { FadeInExample } from "@/components/features/FadeInExample";
import { RatingExamples } from "@/components/features/RatingExamples";
import { ProfileExample } from "@/components/features/ProfileExample";

export function LandingPage() {
  return (
    <main>
      <ButtonExamples />
      <ProduceCardExamples />
      <RatingExamples />
      <ProfileExample />
      <FadeInExample />
    </main>
  );
}
