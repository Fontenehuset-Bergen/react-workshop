# Dynamiske ruter
Vi så i forrige økt på hvordan vi kunne sitte opp routes for å ha undersider vi kan besøke på nettsiden. Vi skal nå ta dette et steg videre med å se på dynamiske ruter og hvilke fordeler det bringer oss.

Forestill deg denne casen: Du har en liste over kontakt personer som du ønsker å ha tilgjenglig på nettsiden. Du vill ha en navigasjon der du kan kanskje søke etter personer eller velge noen ut fra en liste. Du vill også vise en dedikert side for denne personen der du kan vise mer innhold.
Vi kan oppnå dette ved å bruke dynamiske ruter sammen med layout definisjon.

Hvis vi tenker praktisk på hvordan vi skal implementere dette så bør vi først finne ut av dataen vi skal bruke. Så kan vi lage sidene vi trenger for så å sitte opp rutene i `route.ts`

# Datamodellen
For dette eksempelet kan vi bruke en statisk ressurs i json format, men det er ingenting som stopper deg fra å hente data fra en api tjeneste. Vi kan bruke typescript til å definere hvordan en kontakt person skal se ut
```ts
interface Contact {
  name: string
  phone: number
  adress: string
}
```
Vi kan så lage et dataset i et json array format, f.eks `data/contactDetails.json` med så mange kontakt personer som vi ønsker
```json
[
  {
    "name": "Lars Vulgarus",
    "phone": 99224455,
    "adress" "Hakke bakken Takken 24"
  },
  ...
]
```

# Planlegge 

# Hvordan ønsker vi at siden skal se ut?
Når vi har en datamodell å jobbe med kan vi begynne å tenke på hvordan siden skal se ut med tanke på layout, hvordan hver person skal representeres i kontakt listen og hvordan hver enkelt page for en person skal se ut. Vi kan begynne med å se på person siden.





<table width="100%">
  <tr>
    <td><a href="2_routing.md">← Routing</a></td>
    <td align="right"><a href="4_middleware.md">Navigasjonslogikk →</a></td>
  </tr>
</table>