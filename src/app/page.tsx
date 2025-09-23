import { IconButton } from "../components/ui/buttons/iconButton";
import { Camera } from "lucide-react";
import "./page.css";
import { ProduceCard, type iProduceCard } from "../components/ui/cards/produce";
import orange from "../assets/media/react.svg";

export function LandingPage() {
  const produce: iProduceCard = {
    imgLink: "/vite.svg",
    label: "appelsin",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem similique, autem, esse consectetur perspiciatis beatae voluptas.",
    price: 20,
    tags: ["fruit", "yellow", "tasty"],
    onSale: true,
    dateListed: new Date(2000, 1, 3),
  };
  const produce2: iProduceCard = {
    imgLink: orange,
    label: "appelsin",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem similique, autem, esse consectetur perspiciatis beatae voluptas.",
    price: 60,
    tags: ["vegtable", "yellow", "sour"],
    dateListed: new Date(2025, 1, 3),
  };

  return (
    <main className="flex-1 flex flex-col items-center gap-6">
      <div className="flex gap-6 flex-wrap">
        <ProduceCard {...produce} />
        <ProduceCard {...produce2} />
      </div>
      <IconButton icon={<Camera />} label="min knapp" />
    </main>
  );
}
