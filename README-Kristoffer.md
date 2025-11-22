# Workshop i front-end rammeverket React

Velkommen! Dette repositoriet brukes i en nybegynnervennlig workshop i regi av Fontenehuset Bergen. Vi fokuserer på React med Vite på klientsiden, og lærer å bygge komponenter, forstå state, og bruke hooks gjennom korte øvelser og en liten eksempelapp.

## Innhold

> [!NOTE]
> Lenker blir oppdatert etter hvert som dokumentasjon blir lagt til underveis.

- [Terminologi](./docs/1_introduction/terminology.md)
- [Dokumentasjon](./docs/README.md)
    - [Introduksjon](./docs/1_introduction/README.md)
    - Komponenter
    - States
    - Effects
- Oppgaver
  - Uke 1: [Intro](./docs/1_introduction/assignment/README.md)
  - Uke 2: Komponenter
  - Uke 3: States
  - Uke 4: Effects
- Gruppeprosjekt
- [Velg arbeidsmetode](#velg-arbeidsmåte-stackblitz-eller-lokalt)

## Velg arbeidsmåte: StackBlitz eller lokalt
Vi kommer til å bruke Stackblitz som en del av undervisning, men for de som er interessert i å prøve seg på lokal utvikling med programmer installert på din egen maskin anbefaler jeg å prøve dette. Vi kan være til hjelp hvis du møter på noen problemer underveis, men dette vill skje utenom undervisning.

### A. StackBlitz (nettleser)

1. Gå til https://stackblitz.com og logg inn.
2. Koble GitHub-kontoen din under **Account** om du vil importere repoet direkte.
3. Velg **New Project → Import GitHub**, og pek til dette repositoriet.
4. StackBlitz installerer ofte automatisk. Hvis ikke, åpne terminalen i StackBlitz og kjør:

```console
npm install
```

```console
npm run dev
```

5. Forhåndsvisningen åpnes i eget panel i nettleseren.

### B. Lokal IDE

1. Installer https://nodejs.org/en/download og bruk foretrukket IDE, for eksempel https://code.visualstudio.com/
2. Sitt opp [git](https://git-scm.com/) til kunne clone repo
3. Klon dette repositoriet:

```console
git clone https://github.com/Fontenehuset-Bergen/react-workshop
```

4. Åpne mappen i VS Code.
5. Installer avhengigheter:

```console
npm install
```

6. Start utviklingsserver:

```console
npm run dev
```

Vite starter en utviklingsserver og viser en lokal adresse i terminalen. Åpne denne i nettleseren for å se appen.
