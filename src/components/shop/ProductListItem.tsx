import TextButton from '../buttons/TextButton';
import { Badge } from '../text/Badge';
import { Paragraph } from '../text/Paragraph';

type ProductListItemProps = {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    inStock: boolean;
    isOnSale: boolean;
};

export function ProductListItem(props: ProductListItemProps) {
    const { name, price, description, imageUrl, inStock, isOnSale } = props;

    const priceFormatter = new Intl.NumberFormat('no-NO', {
        style: 'currency',
        currency: 'NOK',
        maximumFractionDigits: 0,
    });

    return (
        <>
            <li>
                <div className="itemPreview">
                    <img src={imageUrl}></img>
                </div>

                <div className="itemInfo">
                    <h2>{name}</h2>

                    <Paragraph text={description}></Paragraph>
                    <Paragraph text={priceFormatter.format(price)} textSize="larger"></Paragraph>
                </div>

                <div className="actions">
                    <div>
                        {!inStock && <Badge label="Utsolgt!" level="warning" />}
                        {inStock && isOnSale && <Badge label="Salg!" level="success" />}
                    </div>
                    <div>
                        {inStock ? <TextButton label="Vis >" /> : <Badge label="Utilgjengelig" />}
                    </div>
                </div>
            </li>
        </>
    );
}
