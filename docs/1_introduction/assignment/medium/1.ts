/**
 * TODO:
 * 1) Lag fullName(first, last) som returnerer `${first} ${last}` uten "undefined"/"null".
 * 2) Lag priceText(amount) som formaterer NOK med Intl.NumberFormat og setter inn i en malstreng.
 */
export function fullName(first?: string | null, last?: string | null): string {
  // TODO
  return "";
}

export function priceText(amount: number): string {
  // TODO (Intl.NumberFormat)
  return "";
}

// Self-check
console.log(fullName("Ada", null));       // "Ada "
console.log(priceText(1299));             // "1 299,00 kr" (no-NO kan variere litt)
