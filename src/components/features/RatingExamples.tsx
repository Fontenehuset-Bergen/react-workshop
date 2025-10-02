import { FadeInSection } from "../layout/sections/FadeInSection";
import { RatingStars } from "../ui/rating/Stars";

export function RatingExamples() {
  return (
    <FadeInSection>
      <h1>Ratings</h1>
      <p>Vi kan lage et komponent som viser star ratings</p>
      <span className="flex justify-around flex-wrap">
        <div>
          <RatingStars rating={1} />
          <RatingStars rating={2} />
          <RatingStars rating={3} />
          <RatingStars rating={4} />
          <RatingStars rating={5} />
        </div>
        <div>
          <RatingStars rating={1.5} />
          <RatingStars rating={2.5} />
          <RatingStars rating={3.5} />
          <RatingStars rating={4.5} />
          <RatingStars rating={5.5} />
        </div>
      </span>
    </FadeInSection>
  );
}
