# Madevix 2.0 - Dark/Light Mód Dokumentáció

## 1. Alapelvek és Filozófia
* **Default nézet:** Világos mód (prémium törtfehér, `#FAF8F5`), amely maximális bizalmat, átláthatóságot és nyugalmat sugároz a német KKV ügyfelek számára.
* **Opcionális nézet:** Sötét mód (futurisztikus, mély sötétkék/szürke, `#0A0F1D`), amely modern, prémium vizuális élményt nyújt.
* **Strukturális konzisztencia:** Mindkét nézetben hajszálpontosan ugyanaz a struktúra, elrendezés és arány érvényesül. A sötét mód nem egy különálló oldal, hanem a vizuális paletta elegáns kiterjesztése.

---

## 2. Technológiai Megvalósítás (Tailwind & Next.js)

### Stratégia
A Tailwind CSS beépített **`class` alapú dark mode** kezelését használjuk. 
* A `<html>` tag kap egy `dark` CSS osztályt, ha a sötét mód aktív.
* Ha a `dark` osztály hiányzik, az oldal automatikusan a világos alapértelmezett stílusokat veszi fel.

### Ikonrendszer (`lucide-react`)
* Az ikonok megjelenítéséhez a **`lucide-react`** npm csomagot használjuk.
* A témaváltó gombban a `Sun` (Nap) és `Moon` (Hold) ikonok váltják egymást attól függően, hogy éppen melyik mód aktív.

### Állapotkezelés és Perzisztencia (`localStorage`)
* A téma állapotát a kliens oldalon (pl. `Navbar.tsx`) kezeljük egy `isDarkMode` state-tel (`useState`).
* Induláskor (`useEffect`) ellenőrizzük a böngésző `localStorage`-ét a `madevix-theme` kulcs alapján:
  * Ha értéke `'dark'`, hozzáadjuk a `dark` osztályt a `document.documentElement`-hez, és `true`-ra állítjuk az állapotot.
  * Különben eltávolítjuk a `dark` osztályt, és marad világos módban.
* Váltáskor (`toggleTheme`) a kód frissíti a DOM-ot, megváltoztatja az állapoti változót, és elmenti a választást a `localStorage`-be, megelőzve az oldal újratöltésekor jelentkező vizuális villanást (flash).

---

## 3. Színpaletta Leképezés (Design Tokens)

| Elem | Világos Mód (Default) | Sötét Mód (`dark:`) |
| :--- | :--- | :--- |
| **Fő háttér** | `#FAF8F5` (Törtfehér) | `#0A0F1D` (Mély sötétkék) |
| **Fő szöveg** | `#222222` (Sötétszürke) | `white` / `white/90` |
| **Fejléc (Navbar)** | `#FAF8F5/80` + backdrop-blur | `#0A0F1D/85` + backdrop-blur |
| **Kiemelt szín** | `#0F62FE` (Madevix Kék) | `#0F62FE` (Madevix Kék) |
| **Szegélyek** | `#222222/5` | `white/10` |

---

## 4. Komponens Szintű Szabályok
* Minden új komponens megírásakor kötelező felkészíteni mindkét módra a Tailwind prefixek használatával:
  * Például háttérre: `bg-[#FAF8F5] dark:bg-[#0A0F1D]`
  * Például szövegre: `text-[#222222] dark:text-white`
* A témaváltó gomb implementációjának mintája:
  ```tsx
  import { Sun, Moon } from 'lucide-react';

  // ...
  <button onClick={toggleTheme} aria-label="Toggle Theme">
    {isDarkMode ? <Sun size="{18}"/> : <Moon size="{18}"/>}
  </button>