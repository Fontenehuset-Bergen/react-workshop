import { ProduceCard, type iProduceCard } from "../ui/cards/produce";
import orange from "@/assets/media/examples/orange.jpeg";

export function ProduceCardExamples() {
  const produce: iProduceCard = {
    imgLink: "/banana.jpg",
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
    <section>
      <h2>Kort komponenter</h2>
      <p>Se vårt store utvalg av frukt og grønt!</p>
      <span className="flex justify-center flex-wrap gap-2">
        <ProduceCard {...produce} />
        <ProduceCard {...produce2} />
        <ProduceCard {...produce2} />
        <ProduceCard {...produce2} />
      </span>
      <hr />
    </section>
  );
}
