---
title: Doku
date: 2019-09-17
---
Projektübersicht / Andi's JAMstack

### Layout / Styling

#### Grundsätze:
- Conditional rendering mittels Ternary operator: ```if (check) return <x> : <y> / null```
- Wiederholende Elemente in Array auslagern (sieh constans/links.js) und mittels ```myArray.map()``` mehrfach rendern.

#### Hilfsmittel:
- react bootsrap für Komponenten (oder Ionic & Co.)
- react icons für Icons

#### allgemein gültiges CSS

Das layout.css enthält algemein gültiges CSS. Hier können auch Variablen gesetzt werden (auf :root), die überall abgerufen werden können var(--myVar).

#### module.css

Die xyz.module.css sind komponenten-gebunden (siehe navbar.module.css). Somit keine Überschneidungen von Klassennamen.

#### styled components

TODO

### Links

- Alle files unter ```pages``` erhalten automatisch einen eigenen slug. ```Link``` und ```navigate``` aus ```gatsby``` nutzen um zu Navigieren.
- AniLink für animierte transitions (fade, paintDrip, swipe, and cover)

### Images

- direkt importieren (siehe jamstackdiagonal.png)
- für optimierte Bilder siehe (jamstack.png): gatsby Image (fixed und fluid)

### Login

Netlifiy Identity:
- loginmodal.js für das Login-Modal
- ```const identity = useIdentityContext()``` und dann check mit ```{identity && identity.user ? (do stuff) : null}```

