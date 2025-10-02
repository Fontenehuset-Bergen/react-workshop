import { Star, StarHalf } from "lucide-react";

export function RatingStars({ rating }: { rating: number}) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} fill="gold" strokeWidth={0} />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<StarHalf key={i} fill="gold" enableBackground="black" strokeWidth={0} />);
    } else {
      stars.push(<Star key={i} fill="gray" strokeWidth={0} />);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
}