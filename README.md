# FoodNow · Projecte base (UP04)

App de repartiment de menjar en Ionic 9 + Angular 22. Partiu d'aquest projecte durant tota la UP04.

## Posar-lo en marxa

```bash
npm install
npx ng serve
```

Obriu http://localhost:4200 i activeu la vista de mòbil a les DevTools (Ctrl+Maj+M).

## Què hi ha

| Fitxer | Per a què serveix |
| --- | --- |
| `src/app/app.routes.ts` | Rutes: pestanyes amb Inici, Cerca, Carretó i Perfil |
| `src/app/tabs/tabs.page.ts` | Barra de pestanyes inferior |
| `src/app/services/menu.service.ts` | Servei amb les dades: restaurants i plats |
| `src/app/data/menu.data.ts` | 6 restaurants i 30 plats de prova |
| `src/app/models/` | Interfícies `Restaurant` i `Plat` |
| `src/app/pages/inici/` | **Kata de les sessions 1-2** |
| `src/theme/variables.scss` | *Design tokens* (sessions 3-4) |

## Normes de la parella

- Un *commit* al final de cada sessió, amb un missatge que diga què heu fet.
- Canvieu de conductor/a i navegant cada 15 minuts.
- Abans d'acabar, comproveu que `npx ng build` no dona errors.
