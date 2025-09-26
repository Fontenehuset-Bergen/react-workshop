interface ProduceCardsProps {
    name: string;
    qnt: number;
    price: number;
    description: string;
    tags: string[];
    picture: string;
    onSale?: boolean
}

export function ProduceCard(props: ProduceCardsProps) {
    //Object destructing
    const {name, description, picture, price, qnt, tags, onSale} = props;

    return (
    <div className="w-fit flex gap-2 bg-amber-100 p-2 rounded">
        <div>
            <img src={picture} alt={"A picture of" + name} />
        </div>
        <div>
            <h3 className="text-xl">{name}</h3>
            <p className="italic">{description}</p>
            <p>Costs {price},-</p>
            <p>We have {qnt} left in stock</p>
            <span className="flex gap-2">
                {tags.map((tag)=><p className="bg-green-300 p-2 rounded">{tag}</p>)}
            </span>
        </div>
        {onSale && <span>For Sale!!</span>}
    </div>)
}