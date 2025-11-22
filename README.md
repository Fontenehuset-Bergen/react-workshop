# Fontenehuset -- Julebakst Galleri 🎄🍪

Velkommen til et lite, koselig React + Vite + TypeScript-prosjekt der
målet er å utforske grunnleggende komponenter, enkel TypeScript-bruk og
litt styling -- pakket inn i ekte julebakst-stemning.

## Hva du lærer her

-   Lage egne React-komponenter
-   Jobbe med TypeScript-typer
-   Lage og bruke enkle funksjoner
-   Bruke arrays og `.map`
-   Legge til bilder i et Vite-prosjekt
-   Litt CSS for å få et penere uttrykk
-   Jobbe i egen branch og pushe til GitHub

---

## Kom i gang

### 1. Installer avhengigheter

```sh
npm install
```

### 2. Start prosjektet

```sh
npm run dev
```

### 3. Lag ny branch

```sh
git checkout -b feature/julebakst-galleri, eller lag dette ved å åpne opp branchmenyen og create new branch from...
```

---

## Oppgave: Lag et julebakst-galleri

Hovedoppgavene:

1.  Lag en ny komponent: `JuleBakstGalleri.tsx`
2.  Lag en TypeScript-type for julebakst
3.  Lag en array med julekaker (kakemann, pepperkake, krumkake osv.)
4.  Vis dem i et grid
5.  Legg inn bilder i `public/images`
6.  Lag noen små TS-funksjoner som:
    -   `formatBakingTime`
    -   `difficultyEmoji`
7.  Koble komponenten inn i `App.tsx`
8.  Legg til enkel styling

---

## Forslag til mappestruktur

    src/
      components/
        JuleBakstGalleri.tsx
      App.tsx
      main.tsx
    public/
      images/
        kakemann.jpg
        pepperkaker.jpg
        krumkaker.jpg

---

## Bonus-oppgave

-   Legg til flere typer bakverk
-   Lag en funksjon som teller hvor mange kaker som er "lett"
-   Legg til felt som opprinnelsesland, tradisjon eller årstall
-   Lag en egen komponent for tittel

---

## Git og GitHub

Når du er ferdig:
Push endringene til din egen branch, dette gjør du via "knappen" på venstre side som heter Source Control eller du kjører old school og bruker komandolinjen og kjører komandoer under

```sh
git add .
git commit -m "Laget julebakst-galleri"
git push -u origin feature/julebakst-galleri
```

---

## ⭐ Og der er plutselig din branch med dine favoritt julekaker oppe på github, og lever sine beste dager i "https://github.com/Fontenehuset-Bergen/react-workshop"!

Håper dokkar får det gøy med denne oppgaven -- vi går selvfølgelig gjennom dette sammen neste gang!
