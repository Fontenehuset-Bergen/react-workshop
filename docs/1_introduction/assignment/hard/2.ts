/**
 * TODO:
 * 1) Implementer safeLabel som returnerer label hvis label ikke er null/undefined, ellers "Ukjent".
 *    Bruk ?? (nullish coalescing).
 * 2) Implementer showIf som returnerer tekst hvis cond er truthy, ellers tom streng.
 *    Bruk && (kortslutning).
 */
export function safeLabel(label: string | null | undefined): string {
  // TODO
  return "";
}

export function showIf(cond: unknown, text: string): string {
  // TODO
  return "";
}

// Self-check
console.log(safeLabel(undefined)); // Forventet: "Ukjent"
console.log(showIf(true, "Hei"));  // Forventet: "Hei"
console.log(showIf(0, "Hei"));     // Forventet: "" (ikke vis "0")
