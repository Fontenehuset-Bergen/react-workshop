# Github hjelp
Denne filen er under aktiv utvikling. Hvis du har spørsmål og trenger hjelp så ta kontakt med underviser. Jeg skal prøve å holde denne filen oppdatert med relevante problemstillinger vi møter på.

## Ofte brukte kommandoer for Git
[cheatsheet](https://www.geeksforgeeks.org/git/git-cheat-sheet/)

### Oppdater git historie
Denne kommandoen kjører jeg hele tiden før jeg bruker andre kommandoer. Den henter informasjon fra Github om endringer til repository som nye branches, oppdaterte regler osv.
```console
git fetch origin
```

### Hent ned de nyeste filene i en branch
```console
git pull
```


#### Min branch inneholder ikke docs mappen
Hvis du jobber i din branch og du ikke finner docs mappen kan du kjøre følgende kommando for å hente den inn på nytt.
```console
git checkout origin/main -- docs/
``