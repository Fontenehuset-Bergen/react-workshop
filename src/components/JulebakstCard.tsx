import { COUNTRIES } from '../data/countries';
import { julebakstData } from '../data/julebakstData';

type JulebakstCardProps = { index: number };

export function JulebakstCard(props: JulebakstCardProps) {
    const { name, country, description, imgURL, recipeURL } = julebakstData[props.index];

    return (
        <>
            <div className="card">
                <h2>{name}</h2>
                <div className="country">{COUNTRIES[country].name}</div>
                <img src={imgURL}></img>
                <div className="description">{description}</div>
                <a href={recipeURL} target="_blank">
                    Get recipe here!
                </a>
            </div>
        </>
    );
}
