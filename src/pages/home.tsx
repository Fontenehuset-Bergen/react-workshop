import { ButtonExamples } from "@/components/features/ButtonExamples";
import { FadeInExample } from "@/components/features/FadeInExample";
import { ProduceCardExamples } from "@/components/features/ProduceExamples";
import { ProfileExample } from "@/components/features/ProfileExample";
import { RatingExamples } from "@/components/features/RatingExamples";

export default function Home() {
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
