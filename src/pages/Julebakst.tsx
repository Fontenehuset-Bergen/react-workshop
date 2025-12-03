import { JulebakstCard } from '../components/JulebakstCard';
import { julebakstData } from '../data/julebakstData';

export function Julebakst() {
    let cards = julebakstData.map((v, index) => <JulebakstCard index={index}></JulebakstCard>);

    return (
        <>
            <h2>Julebakst</h2>
            <section className="julebakst">{cards}</section>
        </>
    );
}
