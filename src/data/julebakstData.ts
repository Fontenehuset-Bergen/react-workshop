import type { CountryCode } from './countries';

export type JulebakstDataType = {
    name: string;
    description: string;
    country: CountryCode;
    imgURL: string;
    recipeURL: string;
};

export const julebakstData: JulebakstDataType[] = [
    {
        name: 'Tunis cake',
        description: 'A spungecake with a thick layer of chocolate and shaped marzipan figures.',
        country: 'gb',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Tunis_Cake_KG_Christmas_2021.jpg',
        recipeURL: 'https://www.bbc.co.uk/food/recipes/tunis_cake_61629',
    },
    {
        name: 'Tirggel',
        description:
            'En tynn, hard og veldig søt kake laget av mel og honning. Bakt i en dekorert form.',
        country: 'ch',
        imgURL: 'http://upload.wikimedia.org/wikipedia/commons/a/a5/Migros-Tirggel.jpg',
        recipeURL: 'https://www.poeticroad.com/recipes-1/swiss-triggel-(caramel-honey-cookies)',
    },
] as const;
