// Her er eksempler på TypeScript typer, altså vi definerer at dette er tekst, nummer, bools osv osv
type JuleBakst = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    difficulty: 1 | 2 | 3; // 1 = lett, 2 = middels, 3 = avansert
    bakingTimeMinutes: number;
};

// Her lager vi listen, arrayet, med objekter som følger JuleBakst-typen. Her kan vi selvfølgelig
// legge til så mange juekaker vi ønsker. Vi ser også at TypeScript hjelper oss å passe på at vi
// følger strukturen vi definerte i JuleBakst-typen.
const juleBakstListe: JuleBakst[] = [
    {
        id: 5,
        name: "Kakemann",
        description:
            "Myke, sprø og supersøte figurer som smiler til deg og som smaker jul.",
        imageUrl: "/images/kakemann.JPG",
        difficulty: 1,
        bakingTimeMinutes: 45,
    },
    {
        id: 4,
        name: "Pepperkaker",
        description:
            "Det er få ting som smaker så godt som dine egne pepperkaker, men vær forsiktig med å spise plastøyne!",
        imageUrl: "/images/pepperkake.JPG",
        difficulty: 2,
        bakingTimeMinutes: 60,
    },
    {
        id: 1,
        name: "Vepsebol",
        description:
            "Disse er digg! Litt knotete, og vær forsiktig når du pisker.",
        imageUrl: "/images/veps.jpg",
        difficulty: 3,
        bakingTimeMinutes: 90,
    },
    {
        id: 3,
        name: "Brune Pinner",
        description:
            "Mine favoritt-julekaker! Sprø, søte og med deilig smak av kanel og smør.",
        imageUrl: "/images/brunpinn.jpg",
        difficulty: 2,
        bakingTimeMinutes: 30,
    },
    {
        id: 2,
        description: "Lussekatter er digg i julen",
        name: "Lussekatter",
        imageUrl: "/images/lussekatt.jpg",
        difficulty: 1,
        bakingTimeMinutes: 70,
    },
    {
        id: 8,
        description: "Goro",
        bakingTimeMinutes: 80,
        name: "Goro",
        imageUrl: "/images/goro.jpg",
        difficulty: 3,
    },
];

const juleBakstKompisListe: JuleBakst[] = [
    {
        id: 101,
        name: "Kransekake",
        description:
            "En klassisk kake som ofte serveres ved spesielle anledninger i Norge, inkludert julen.",
        imageUrl: "/images/kransekake.jpg",
        difficulty: 3,
        bakingTimeMinutes: 120,
    },
    {
        id: 102,
        name: "Sandkaker",
        description:
            "Små, delikate kaker laget i små former, ofte fylt med mandelfyll.",
        imageUrl: "/images/sandkaker.jpg",
        difficulty: 2,
        bakingTimeMinutes: 60,
    },
    {
        id: 103,
        name: "Delfiakake",
        description:
            "En rik og kremet kake laget med sjokolade og Delfiafett, ofte pyntet med nøtter og tørket frukt.",
        imageUrl: "/images/delfiakake.jpg",
        difficulty: 2,
        bakingTimeMinutes: 90,
    },
];

// Slår sammen dine og kompisen sine bakverk til én liste
const allJuleBakst: JuleBakst[] = [...juleBakstListe, ...juleBakstKompisListe];

// Her ser du helt enkle hjelpe-funksjoner (ren TypeScript)

// Meningen her er å gi en tekst basert på hvor lang tid kaken tar å lage
function formatBakingTime(minutes: number): string {
    if (minutes < 45) return "Superrask å lage – dette rekker du på 1-2-3!";
    if (minutes < 75) return "Ja, det tar litt tid, men er absolutt verdt det.";
    return "Sett på julemusikk – dette er en skikkelig koseøkt på kjøkkenet. Husk kaffe, gløgg og pepperkaker mens du venter!";
}

// Gir en emoji basert på vanskelighetsgrad
function difficultyEmoji(difficulty: JuleBakst["difficulty"]): string {
    if (difficulty === 1) return "🎅"; // lett
    if (difficulty === 2) return "🧑‍🍳"; // middels
    return "👨‍🍳"; // avansert
}

// (Valgfritt) hvis du vil vise tekst istedenfor bare tall:
function difficultyLabel(difficulty: JuleBakst["difficulty"]): string {
    if (difficulty === 1) return "lett";
    if (difficulty === 2) return "middels";
    return "avansert";
}

// Her er selve React-komponenten
export default function JuleBakstGalleri() {
    return (
        <section className='julebakst-wrapper'>
            <h1>Julens fantastiske bakverk</h1>
            <p className='julebakst-intro'>
                Her er noen klassiske julekaker. Hvilken hadde du valgt først?
            </p>

            <div className='julebakst-grid'>
                {allJuleBakst.map((bakst) => (
                    <article key={bakst.id} className='julebakst-card'>
                        <img
                            src={bakst.imageUrl}
                            alt={bakst.name}
                            className='julebakst-image'
                        />

                        <h2>
                            {bakst.name} {difficultyEmoji(bakst.difficulty)}
                        </h2>

                        <p className='julebakst-description'>
                            {bakst.description}
                        </p>

                        <p className='julebakst-meta'>
                            Vanskelighetsgrad:{" "}
                            <strong>{difficultyLabel(bakst.difficulty)}</strong>
                        </p>

                        <p className='julebakst-meta'>
                            {formatBakingTime(bakst.bakingTimeMinutes)}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
