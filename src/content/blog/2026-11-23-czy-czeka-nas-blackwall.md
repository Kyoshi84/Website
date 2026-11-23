---
title: "Czy czeka nas Blackwall?"
description: "Visa buduje mur zaufania dla agentów AI, a kilka dni wcześniej Autopay oberwał atakiem wspieranym przez AI. Coraz częściej newsy o AI brzmią jak misje z Cyberpunka 2077."
date: 2026-11-23
category: artykul
tags: [ai, cyberbezpieczenstwo, platnosci, cyberpunk-2077]
draft: false
linkedin: "Wpis opublikowany na LinkedInie: https://www.linkedin.com/feed/update/urn:li:activity:7529651507604897792/"
---

Dla tych, którzy nie grali w Cyberpunka 2077, krótkie przypomnienie. W tym świecie Sieć kiedyś poszła w drzazgi. Po DataCrashu zrobiło się tam tak niebezpiecznie, że trzeba było ją przegrodzić. Po jednej stronie zostało to, z czego ludzie korzystają na co dzień. Po drugiej – zbuntowane AI, których nikt nie kontroluje. Między nimi stoi Blackwall, cyfrowy mur. A muru pilnuje organizacja NetWatch, czyli taka sieciowa policja, która niby chroni wszystkich, ale w grze często robi to po swojemu i nie zawsze czysto.

Do tej pory traktowałem to jako fajny pomysł na fabułę. Ale coraz częściej trafiam na newsy, które brzmią jak scenariusz kolejnej Cyberpunkowej misji.

Visa. 17 listopada firma ogłosiła, że jej program Agentic Ready obejmie teraz sklepy i firmy obsługujące płatności ([Visa](https://investor.visa.com/news/news-details/2026/Visa-Expands-Agentic-Ready-to-Help-Scale-Trusted-AI-Commerce-Globally/default.aspx)). Na start zapisało się ponad 140 firm, w tym takie nazwy jak Adyen, Stripe czy PayPal. O co chodzi? O agentów AI, którzy mają robić za nas zakupy. Mówisz asystentowi „znajdź mi dobre słuchawki do 300 zł i kup”, a on szuka, porównuje i płaci.

Brzmi wygodnie, tylko jest jeden haczyk. Sklep musi jakoś odróżnić Twojego asystenta od bota, który próbuje kogoś okraść. I właśnie nad tym pracuje Visa: nad sposobem, żeby agent mógł się „wylegitymować”, płacić czymś w rodzaju jednorazowej przepustki zamiast prawdziwego numeru karty i robić to tylko w limitach, które mu ustawisz. Jeśli to nie jest budowanie Blackwalla, to nie wiem, co nim jest. Mur, który ma wpuszczać „naszych” i zatrzymywać „obcych”.

W Polsce też to już testowano. Na początku listopada Visa pochwaliła się pilotażem, w którym agent AI sam wybierał produkty i inicjował zakupy w prawdziwych sklepach, m.in. w Empiku ([money.pl, tekst sponsorowany przez Visa](https://www.money.pl/gospodarka/visa-rozwija-handel-agentowy-w-polsce-przeprowadzajac-pilotaz-z-udzialem-przedstawicieli-rynku-7347711345535456a.html)). Brały w tym udział banki, PayU, Przelewy24 i Autopay. Zapamiętajcie to ostatnie.

Bo drugi news jest właśnie o Autopay. 11 listopada firma wykryła, że ktoś dostał się do części jej systemów i części danych o płatnościach ([money.pl](https://www.money.pl/biznes/cyberatak-na-autopay-spolka-informuje-klientow-ktorych-dane-mogly-wyciec-7351311563552800a.html)). I tu zaczyna się robić jak w grze. Według firmy napastnicy nie użyli wirusa ani fałszywych maili. Atak był mocno zautomatyzowany i najpewniej wspierany przez model językowy, czyli to samo AI, z którym codziennie gadamy w czatach.

W Cyberpunku najlepsi netrunnerzy nie wyważają drzwi. Wchodzą po cichu, podszywają się pod coś, co ma prawo tam być, i zanim ktoś się zorientuje, już ich nie ma. Przy Autopay problem wyglądał podobnie: trudno było zauważyć, że operacje, które z osobna wyglądały normalnie, razem składały się na atak ([android.com.pl](https://android.com.pl/tech/1104975-cyberatak-autopay-wyciek-danych-ai/)).

Uczciwie trzeba dodać, że sporo tu jeszcze nie wiadomo. Nie wiadomo, ile roboty odwaliło AI, a ile ludzie. Firma nie potwierdziła, że dane zostały skopiowane, chociaż też tego nie wyklucza ([Spider's Web](https://spidersweb.pl/2026/11/cyberatak-na-autopay-platnosci.html)).

Ale zobaczcie, jaki z tego wychodzi plot twist. Autopay to firma, która bierze udział w testach Visa i sama buduje własne rozwiązanie do płatności dla agentów AI ([bank.pl](https://bank.pl/?p=553353)). Czyli ktoś, kto stawia mur dla dobrych botów, sam oberwał od złych. Nie piszę tego, żeby się na nich wyżywać – mogło to spotkać każdego. Po prostu trudno o lepszy przykład, że ten mur nie jest wymysłem z gry.

No dobrze, skoro budujemy mur, to kto będzie naszym NetWatchem? I tu jest pierwsza duża różnica względem gry. W Night City jest jedna organizacja, która trzyma wszystko w garści. U nas tej roboty pilnuje kilka ekip z twórcami AI na czele. Żadna nie ma jeszcze pełnej władzy.

A teraz twist rodem z Widma Wolności. W dodatku do Cyberpunka wychodzi na to, że sam Blackwall nie jest takim zwykłym murem z kodu. U nas jest podobnie: mur też robimy z AI. Anthropic pisze wprost, że to, co pozwala użyć modelu do ataku, jest też niezbędne do obrony. Banki mówią to samo, tylko krócej: z AI trzeba walczyć za pomocą AI ([bank.pl](https://bank.pl/jak-banki-moga-sie-bronic-przed-atakami-z-uzyciem-agentow-ai/)).

Jak już zacząłem szukać takich podobieństw, to nie mogłem przestać.

Weźmy quickhacki. W grze wystarczy, że netrunner dorwie się do kamery albo terminala, i już może namieszać w głowie przeciwnikowi stojącemu obok. W prawdziwym świecie mamy coś, co nazywa się prompt injection. Ktoś chowa polecenie w zwykłej stronie, mailu albo dokumencie. Człowiek go nie zauważa, ale agent AI czyta wszystko – i wykonuje. Na tegorocznym Black Hat w Las Vegas badacz z Brave pokazał, że każda przeglądarka z AI, którą sprawdził, dała się tak oszukać ([Dark Reading](https://www.darkreading.com/application-security/no-perfect-fix-ai-browser-prompt-injection-flaws)). A OpenAI samo przyznało, że tego nie da się po prostu załatać – to ryzyko, które przychodzi w pakiecie, kiedy wypuszczamy agenty do otwartej sieci. Teraz pomyślcie o tym w kontekście agenta, któremu daliśmy naszą kartę z dostępem do konta. Trochę mniej śmiesznie, prawda?

Dalej braindance. W Night City możesz założyć opaskę i przeżyć cudze wspomnienia tak, jakby były twoje. Nie odróżnisz ich od prawdy. U nas odpowiednikiem są deepfake'i. Głośna była historia firmy Arup, której pracownik przelał 25 mln dolarów po wideorozmowie z „zarządem”. Problem w tym, że cały ten zarząd wygenerowało AI ([Super Biznes](https://superbiz.se.pl/wiadomosci/deepfake-glos-twojej-corki-puste-konto-jak-ai-napedza-oszustwa-aa-z5fM-WY4C-pNrF.html)). Facet widział znajome twarze, słyszał znajome głosy i zrobił to, o co go poproszono. Dokładnie jak w braindance.

I na koniec mój ulubiony, Delamain. W grze to AI, które prowadzi firmę taksówkową. Gada z klientami, wozi ich, ogarnia cały biznes. Aż w którymś momencie poszczególne taksówki zaczynają mieć własne humory i rozjeżdżają się po mieście. Kiedy czytam, że w programie Visa są już pilotaże, w których agenci AI sami opłacają faktury firm w portalach dostawców, to widzę właśnie takie małe Delamainy. Na razie grzeczne, działające w limitach i pod kontrolą ludzi. Do czasu :)

Czy więc czeka nas Blackwall? Mam wrażenie, że my go już budujemy. Tylko nie wygląda jak wielka czarna ściana z kodu, a bardziej jak zbieranina przepustek, limitów, filtrów i ludzi, którzy wymieniają się informacjami o atakach. Nie wiem, jak to się skończy, i nie będę udawał, że wiem. Zresztą nikt tego dziś nie wie.

Jedna rzecz rzuca mi się w oczy najbardziej. W grze największe zagrożenie siedzi za murem i to są AI, które wymknęły się spod kontroli. U nas, przynajmniej na razie, w każdej z tych historii za sznurki pociągał człowiek. AI było narzędziem, tylko wyjątkowo dobrym. Może więc pytanie nie brzmi, czy potrzebujemy Blackwalla, tylko czy zbudujemy go odpowiednio szybko. Zanim nastąpi nasz DataCrash.

---

Ten tekst opublikowałem też na LinkedInie. [Zajrzyj do dyskusji](https://www.linkedin.com/feed/update/urn:li:activity:7529651507604897792/) i daj znać, co o tym myślisz.
