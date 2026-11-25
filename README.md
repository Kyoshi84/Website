# Jan Mejor — portfolio i blog

Strona statyczna zbudowana w [Astro](https://astro.build), hostowana za darmo na Cloudflare Pages.
Każdy push na gałąź `master` automatycznie publikuje nową wersję.

## Struktura

| Ścieżka | Co tam jest |
|---|---|
| `src/pages/index.astro` | Strona główna (portfolio) |
| `src/pages/certyfikaty.astro` | Rejestr certyfikatów i szkoleń |
| `src/data/konferencje.json` | **Kalendarz konferencji** (strony `/konferencje/`, `/konferencje/ai/`, `/konferencje/igaming/`, `/konferencje/polska/`, `/konferencje/2027/`): gaming + AI/tech w jednym pliku, pole `branza` = `gaming` / `ai-tech`; zakończone znikają same. Teksty i definicje podstron: `src/lib/konferencje.ts`. Filtry działają też z adresu, np. `/konferencje/?polska=1` |
| `src/content/blog/` | **Wpisy bloga** w Markdown — tu dodajesz treści |
| `src/styles/global.css` | Wygląd strony |
| `public/` | Zdjęcie, favicon, obrazki do wpisów (`public/images/`) |
| `.pages.yml` | Konfiguracja panelu Pages CMS |

## Nowy wpis

Plik `src/content/blog/RRRR-MM-DD-tytul.md`:

```markdown
---
title: "Tytuł"
description: "Lead, 1–2 zdania."
date: 2026-11-24
category: raport-ai   # albo: raport-gaming, artykul
tags: [ai, bielik]
draft: false          # true = wpis nie pojawi się na stronie
linkedin: "Krótki post do wklejenia na LinkedIn."
---

Treść w Markdown…
```

Szablony raportów: `src/content/blog/_szablon-raportu-ai.md` i `_szablon-raportu-gaming.md`.

## Pisanie w przeglądarce (Pages CMS)

1. Wejdź na https://app.pagescms.org i zaloguj się kontem GitHub.
2. Wybierz repozytorium `Kyoshi84/Website` — panel odczyta `.pages.yml`.
3. W sekcji **Blog** dodawaj i edytuj wpisy. Zapis = commit = publikacja.
   Nowe wpisy domyślnie mają zaznaczone „Szkic”; odznacz, żeby opublikować.

## Wdrożenie na Cloudflare Pages (jednorazowo)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → zakładka **Pages** → **Connect to Git**.
2. Wybierz repozytorium `Kyoshi84/Website`.
3. Ustawienia budowania:
   - Production branch: `master`
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Zmienna środowiskowa: `NODE_VERSION` = `22`
4. **Save and Deploy**. Po minucie strona działa pod adresem `https://<nazwa-projektu>.pages.dev`.
5. Jeśli adres różni się od `https://jan-mejor.pages.dev`, zmień `site` w `astro.config.mjs`
   (używany w RSS, mapie strony i linkach kanonicznych).

## Lokalnie

```bash
npm install
npm run dev      # podgląd na http://localhost:4321
npm run build    # gotowa strona w dist/
```

## SEO i analityka

- **Grafika do udostępniania** (Facebook, LinkedIn, komunikatory): `public/og-image.jpg`, 1200×630.
- **Dane strukturalne (JSON-LD), meta tagi, okruszki, `robots.txt`, mapa strony**: generowane automatycznie w `src/layouts/Base.astro`, `src/pages/robots.txt.ts` i `astro.config.mjs`. Po zmianie domeny wystarczy poprawić `site` w `astro.config.mjs`.
- **Weryfikacja wyszukiwarek i statystyki** — zmienne w Cloudflare Pages (Settings → Variables and secrets → Production), po dodaniu uruchom ponowny deploy:
  - `PUBLIC_GSC_VERIFICATION` — wartość `content` z metatagu weryfikacyjnego Google Search Console,
  - `PUBLIC_BING_VERIFICATION` — to samo z Bing Webmaster Tools,
  - `PUBLIC_CF_ANALYTICS_TOKEN` — token z Cloudflare Web Analytics.

  Po weryfikacji dodaj w obu narzędziach mapę strony: `https://www.unclekyoshi.is-not-a.dev/sitemap-index.xml`.
- **Codzienny rebuild**: `.github/workflows/codzienny-rebuild.yml` wywołuje deploy hook Cloudflare (instrukcja na górze pliku), żeby zakończone wydarzenia znikały z kalendarza bez pushu.
- **Przekierowania**: `public/_redirects` (stary adres kalendarza `/blog/konferencje/` → `/konferencje/`).
- **Tytuły i opisy raportów**: wzór w szablonach `_szablon-raportu-*.md` (tytuł do ok. 60 znaków z hasłami tematycznymi, opis 140–155 znaków).
