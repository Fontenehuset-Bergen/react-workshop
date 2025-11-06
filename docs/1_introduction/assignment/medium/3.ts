type User = { id: number; name?: string; address?: { city?: string } };

/**
 * TODO:
 * 1) Hent name med default "Ukjent".
 * 2) Hent city fra address med default "Ukjent by".
 * Bruk sikre defaults (objekt på mellomledd) så det ikke kaster.
 */
export function userSummary(u?: User): string {
  // TODO (destructuring med defaults)
  return "";
}

// Self-check
console.log(userSummary({ id: 1 }));                        // "Ukjent @ Ukjent by"
console.log(userSummary({ id: 2, name: "Ada", address: { city: "Bergen" } })); // "Ada @ Bergen"
