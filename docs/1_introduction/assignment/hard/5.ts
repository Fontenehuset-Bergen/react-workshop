type Item = { id: number; active: boolean; name: string };

/**
 * TODO:
 * 1) activeNames: returner navn for items der active=true (map/filter).
 * 2) findById: returner item med gitt id (find) eller undefined.
 */
export function activeNames(items: Item[]): string[] {
  // TODO
  return [];
}
export function findById(items: Item[], id: number): Item | undefined {
  // TODO
  return undefined;
}

// Self-check
const sample: Item[] = [
  { id: 1, active: true, name: "A" },
  { id: 2, active: false, name: "B" },
  { id: 3, active: true, name: "C" },
];
console.log(activeNames(sample)); // ["A","C"]
console.log(findById(sample, 2)?.name); // "B"
