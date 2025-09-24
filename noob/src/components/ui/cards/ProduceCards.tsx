interface ProduceCardProps {
    name:string
    qnt:number
    price:number
    description:string
    tags: string[]
    picture: string
}

export function ProduceCard(props: ProduceCardProps) {
    const { name, description, picture, price, qnt, tags } = props;

    return (<div className="flex gap-2 p-2 bg-amber-100 rounded">
        <div>
            <img src ={picture} alt={"A picture of " + name} />        
        </div>
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Koster {price},-</p>
            <p>Vi har {qnt} igjen på lager</p>
            <span>
                {tags.map((tag)=><p className="bg-green-300 p-2 rounded">{tag}</p>)}
                </span>
        </div>
    </div>
    );
}