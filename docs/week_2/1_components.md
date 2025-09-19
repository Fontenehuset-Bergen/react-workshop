# Uke 2: Komponenter


## Hvordan gjøre importering lettere med @alias
- istedet for `../../ui/buttons/myButton` kan vi bruke `@/components/ui/buttons/myButton`
- gjør det lettere å se hvor filen er, trenger ikke å gjette hvor den ligger
- Vi trenger å gjøre 2 endringer for å få dette til i følgende filer
    - vite.config.ts slik at vite vet hvor filene ligger. Vi var innom hvordan vi kunne [konfigurerer vite](../week_1/2_configuration.md#hvordan-kan-vi-endre-på-vite-oppsettet) tidligere.

    ```ts
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";
    import tailwindcss from "@tailwindcss/vite";

    export default defineConfig({
    // andre settings
    resolve: {
        alias: {
        "@": "/src/"
        }
      }
    });
    ```

    - tsconfig.json slik at vi får intellisence i IDE
    ```json
    {
      "compilerOptions": {
        /* Andre instillinger */
        ...

        /* Alias */
        "paths": {
            "@/*": ["./src/*"]
        }
      },
      "include": ["src"]
    }
    ```