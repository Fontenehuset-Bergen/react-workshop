# Front-end rammeverk – React + Vite

> Opplæringsprosjekt ved Fontenehuset: vi lærer å bygge moderne nettsider med React og Vite, jobber strukturert med Git/GitHub og leverer et felles hovedprosjekt med underprosjekter.

## Innhold

- [Om prosjektet](#om-prosjektet)
- [Mål for kurset](#mål-for-kurset)
- [Praktisk opplegg](#praktisk-opplegg)
- [Teknologi og verktøy](#teknologi-og-verktøy)
- [Repo-struktur](#repo-struktur)
- [Komme i gang](#komme-i-gang)
- [Scripts](#scripts)
- [Branch-strategi og arbeidsflyt](#branch-strategi-og-arbeidsflyt)
- [Undervisningsplan (oversikt)](#undervisningsplan-oversikt)
- [Kvalitetskrav](#kvalitetskrav)
- [Testing](#testing)
- [Deploy](#deploy)

---

## Om prosjektet

I **Front-end rammeverk** lærer vi å bruke **React** og **Vite** for å bygge moderne nettsider og forstå hvorfor disse verktøyene er nyttige. Vi utvikler et felles **hovedprosjekt** med tilknyttede **underprosjekter** som presenteres på en felles nettside. Undervisningen foregår hovedsakelig fysisk på **Fontenehuset**, med mulighet for **digital deltakelse**.

Koden ligger på **GitHub**. Grunnleggende kunnskap om Git/GitHub og lokal utvikling er en fordel, men vi setter av tid til gjennomgang ved behov. Vi starter med å **sette opp** en nettside og bygger den gradvis ut. Alle deltakere lærer å **forke** repositoryet og sende inn egne endringer. Hovedrepoet har en stabil `main`-branch og **ukebranche(r)** for progresjon, f.eks. `week-<number>-<subject>`. Deltakere kan jobbe i en lokal kopi eller via en egen fork.

> **Målgruppe:** Deltakere med grunnleggende HTML/CSS/JS-erfaring. Ingen forkunnskap i React kreves.

---

## Mål for kurset

- Forstå grunnleggende React-konsepter (komponenter, props, state, hooks, routing).
- Bygge og style funksjonelle nettsider med Vite, React og CSS/Tailwind.
- Lære sunn arbeidsflyt med Git/GitHub (brancher, PRer, code review).
- Levere et felles hovedprosjekt med små underprosjekter og ett brukerprosjekt mot slutten.
- Innarbeide kvalitet: TypeScript, linting/formattering, enkel testing og deploy.

---

## Praktisk opplegg

- **Format:** 2 økter per uke (onsdag og fredag), 4 timer per økt (8 t/uke).
- **Sted:** Hovedsakelig fysisk på Fontenehuset, med digital deltakelse ved behov.
- **Arbeidsform:** Mini-forelesning → felles kodeøkt → parprogrammering → kort retro.

---

## Teknologi og verktøy

- **Kjerne:** Node, npm, Vite, React, TypeScript
- **Routing:** React Router
- **Stil:** CSS og/eller Tailwind CSS
- **Kvalitet:** ESLint, Prettier
- **Testing:** React Testing Library (Vitest/JSDOM)
- **Verktøy:** React Developer Tools, Lighthouse (ytelse)

> Alternativer kan introduseres som bonus (f.eks. Wouter/TanStack Router), men React Router er standard.

---

## Repo-struktur

```txt
.
├─ apps/               # Underprosjekter / demo-applikasjoner (valgfritt)
├─ examples/           # Små eksempler tilknyttet tema per uke
├─ src/                # Hovedprosjektets kildekode
│  ├─ components/
│  ├─ pages/           # Evt. ruter/visninger
│  ├─ hooks/
│  ├─ styles/
│  └─ ...
├─ public/             # Statisk innhold
├─ tests/              # Tester (kan også ligge ved koden)
├─ .eslintrc.*         # Lint-konfig
├─ .prettierrc         # Format-konfig
├─ vite.config.ts
├─ tsconfig.json
└─ package.json
```
