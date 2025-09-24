# Lifssuklys i React

For at React skal fungere så har den en del innebygde funksjoner som blir kjørt i en spesefikk rekkefølge, sammen er disse funksjonene ansvarlig for å vise innholdet i koden vår. For funksjonelle komponenter kan vi dele rekkefølgen inn i 3 grupper.

1. Mounting

- Oppstart av komponentet
- Her blir variabler opprett med en initial state, tenk `useState(initialValue)`

2. Update
   - Når state eller props endres
   - Rendrer komponentet på nytt
   - Kan endre utsende på komponentet
3. Unmounting
   - Komponentet fjernes fra DOM (html)
   - Vi kan rydde opp i tidligere kode; fjerne listeners, timers, osv.

I praksis er det ikke så ofte vi trenger å tenke på disse stegene, men det kan være smart å vite om hvordan underliggende React funksjonalitet kan påvirke komponentene våre. For å demonstrere hvordan vi kan påvirke lifssyklus så kan vi bruke `useEffect` fra React

```tsx
import { useEffect, useState } from "react";

export function ScrollToTop() {
  // Vi kan opprette en state for å vise komponentet
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  // useEffect tar imot to argumenter: useEffect(funksjon, conditions)
  useEffect(() => {
    // Vi oppretter en enkel funksjon som vi kan ligge til i event listener.
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    // Siden useEffekt kjører etter at DOM er lastet har vi tilgang på window/document
    // Vi kan da ligge til en event listener som følger med på om vi scroller.
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <button>Scroll up</button>;
}
```

<table width="100%">
  <tr>
    <td><a href="3_hooks.md">← Hooks</a></td>
    <td align="right"><a href="../week_3/README.md">Neste emne →</a></td>
  </tr>
</table>
