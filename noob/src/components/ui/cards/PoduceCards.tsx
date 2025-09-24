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

    return <div>
        <div>
            <img src ={picture} alt={"A picture of " + name} />        
        </div>
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Koster {price},-</p>
            <p>Vi har {qnt} igjen på lager</p>
            <span>
                {tags.map((tag)=><p>{tag}</p>)}
                </span>
        </div>
    </div>
}