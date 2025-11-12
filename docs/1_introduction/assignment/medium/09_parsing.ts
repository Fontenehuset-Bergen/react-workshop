/**
 * MEDIUM: URL-safe parser
 * Vi bruker innebygde URL/URLSearchParams for trygg parsing.
 * Krav:
 * - parseQuery: tar "?a=1&b=hei%20på%20deg" ELLER "a=1&b=..." og returnerer et objekt
 *   (siste forekomst vinner ved duplikate keys)
 * - parseUrl: tar en URL (absolutt eller relativ), returnerer { path, query }
 */

// 1) parseQuery: bygg et enkelt Record<string,string>
export function parseQuery(qs: string): Record<string, string> {
    const out: Record<string, string> = {};

    // TODO:
    // - fjern ledende '?'
    // - bruk new URLSearchParams(...)
    // - for ... of (params) og legg inn i out (senere forekomst vinner)

    const params = new URLSearchParams(qs);

    for (let param of params) {
        out[param[0]] = param[1];
    }

    return out;
}

// 2) parseUrl: håndter både absolutte og relative URL-er
export function parseUrl(input: string): { path: string; query: Record<string, string> } {
    // TODO:
    // - new URL(input, 'http://example')
    // - hent .pathname og .search
    // - parseQuery(...)
    const url = new URL(input, 'http://example');

    return { path: url.pathname, query: parseQuery(url.search) };
}

/** -------------------------- Self-check ----------------------------
 *  Kjør følgende kommando for å se om koden din kjørte
 *  npx tsx tasks/js-recap/medium/03_url_safe_parser.ts
 *  ------------------------------------------------------------------
 */
console.log(
    `Answer: ${JSON.stringify(
        parseQuery('?q=react%20hooks&page=1')
    )}\tExpected: {"q":"react hooks","page":"1"}`
);
console.log(
    `Answer: ${JSON.stringify(
        parseQuery('lang=nb&x=%E2%9C%93')
    )}\t\tExpected: {"lang":"nb","x":"✓"}`
);

console.log(
    `Answer: ${JSON.stringify(
        parseUrl('/search?q=hei+verden&x=1')
    )}\tExpected: {"path":"/search","query":{"q":"hei verden","x":"1"}}`
);
console.log(
    `Answer: ${JSON.stringify(
        parseUrl('https://example.com/a/b?tag=a&tag=b')
    )}\tExpected: {"path":"/a/b","query":{"tag":"b"}}`
);
