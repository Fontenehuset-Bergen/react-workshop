interface ProduceCardProps {
  name: string;
  qnt: number;
  price: number;
  description: string;
  tags: string[];
  picture: string;
  onSale?: boolean
}

export function ProduceCard(props: ProduceCardProps) {
  // Object destructuring
  const { name, description, picture, price, qnt, tags, onSale } = props;

  return (
    <div className="w-fit flex gap-2 p-2 bg-amber-100 rounded">
      <div>
        <img src={picture} alt={"A picture of " + name} />
      </div>
      <div>
        <h3 className="text-xl">{name}</h3>
        <p className="italic">{description}</p>
        <p>Koster {price},-</p>
        <p>Vi har {qnt} igjen på lager</p>
        <span className="flex gap-2">
            {tags.map((tag)=><p className="bg-green-300 p-2 rounded">{tag}</p>)}
        </span>
      </div>
      {onSale && <span>Firesale!!1</span>}
    </div>
  );
}
