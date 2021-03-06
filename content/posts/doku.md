---
title: Doku
date: 2019-04-17
---
Funktionsübersicht / Andi's JAMstack

### Layout / Styling

#### Grundsätze:
- Parent to child - Komponente erhält Attribute als props: ```<MyComponent name="Andi" />```  sendet an

  ```const MyComponent = (props) => { return (props.name)}```
- Child to parent - Use a callback:

  In parent:
  ```javascript
  myCallback = (dataFromChild) => {
        [...use dataFromChild here...]
  },

  return (
    <div>
      <ChildComponent callbackFromParent={myCallback}/>
    </div>
  );
  ```

  In child:
  ```javascript
  someFn = () => {
      [...here define a variable infoFromChild...]
      props.callbackFromParent(infoFromChild);
  }
  ```
- Komponenten rendern neu wenn deren props oder state ändert. Das Verhalten kann mit ```useCallback()``` ```useMemo()```und ```useEffect()```  gesteuert werden. ```useEffect()``` wird immer ausgeführt, nachdem eine Komponente gerendert wurde (erlaubt über das zweite Argument [list of dependencies] auch ein tracken von state Änderungen). Sideeffects und Async operations immer als Funktion in ```useEffect()```
- Conditional rendering mittels Ternary operator: ```if (check) return <x> : <y> / null```
- Wiederholende Elemente in Array auslagern (sieh constans/links.js) und mittels ```myArray.map()``` mehrfach rendern.
- State mit React Hooks: ```const [myText, setMyText] = useState("default value")``` und dann z.B. two way binding: ```<input type="text" value={myText} onChange={event => setMyText(event.target.value)} />```
- Element Referenzieren mit React Hooks: ```const myElement = useRef(null)```  - ```<p ref={myElement} .../>```  - ```myElement.current```

#### Hilfsmittel:
- ```react-bootsrap``` für Komponenten (oder Ionic & Co.)
- ```react-icons``` für Icons



#### allgemein gültiges CSS

Das ```layout.css``` enthält algemein gültiges CSS. Hier können auch Variablen gesetzt werden (auf :root), die überall abgerufen werden können ```var(--myVar)```.

#### module.css

Die ```xyz.module.css``` sind komponenten-spezifisch (siehe ```navbar.module.css```). Somit keine Überschneidungen von Klassennamen.

#### styled components

TODO in code

### Umgebungsvariabeln

Environment variables für lokalen Gebrauch in ```.env.local``` file und für porduktiv direkt in Netlify hinterlegt. Abrufbar mit ```process.env``` siehe: ``` `Bearer ${process.env.GATSBY_GRAPHCMS_KEY}` ```.

Braucht diesen Import in ```gatsby-config.js```:
```javascript
require("dotenv").config({
  path: `.env.local`,
})
```

### Links

- Alle files unter ```pages``` erhalten automatisch einen eigenen slug. ```Link``` und ```navigate``` aus ```gatsby``` nutzen um zu Navigieren.
- AniLink für animierte transitions (fade, paintDrip, swipe, and cover)

### Images

- direkt importieren (siehe jamstackdiagonal.png)
- für optimierte Bilder (siehe jamstack.png): gatsby Image (fixed und fluid)

### Login

Netlifiy Identity:
- loginmodal.js für das Login-Modal
- ```const identity = useIdentityContext()``` und dann check mit ```{identity && identity.user ? (do stuff) : null}```

### Forms

- folgende Zeilen verbinden mit Netlify Forms:
```javascript
data-netlify="true"
data-netlify-honeypot="bot-field"
>
<input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="contactform" />
``` 
- Alternative: ```<form action="https://formspree.io/email@domain.com" method="POST">```

### Data

#### Gatsby Queries (at build-time) - alle gatsby-source-... plugins
- Page Queries: werden ausgeführt sobald die Komponente erstellt wird uns stellen die Daten auf ```props.data``` bereit. Page Queries können Argumente aufnehmen. Nützlich für automatische Seitenerstellung (siehe templates)
- Static Quieries: Können keine Argumente nehmen, aber überall zur Abfrage eingesetzt werden (siehe ```useStaticQuery()```)

#### Apollo Client (at run-time)
- Queries: ```useQuery()```  on page load / ```useLazyQuery()```  on event
- Mutations: ```useMutation()```  on event

Der apollo client wird über das ```wrapRootElement``` der ganzen App zur Verfügung gestellt (```<ApolloProvider>```). Der entsprechende export muss in diesen beiden files aufgeführt werden: ```gatsby-browser.js``` and ```gatsby-ssr.js```

### Automatisch Seiten generieren / Blog & Co.

Die Templates (siehe folder templates) ziehen über die Page Queries ihre Daten aus den Markdown files (unter content/posts) und werden über die Funktionen im ```gatsby-node.js``` befüllt (siehe ```createPage()```).

### Lambda Functions

Lambda function at: https://gatsby.andierni.ch/.netlify/functions/hello-world?name=Andi

Braucht den Pfad zu den Funktionen im ```netlify.toml``` file: ```[build]functions = "functions"```

### GatsbyJS Konfigurationsdateien
- ```gatsby-config.js``` : siteMetadata und Registrierung aller plugins
- ```gatsby-node.js``` : um automatisch Seiten zu erstellen aus templates
- ```gatsby-browser.js``` : um importe und exporte dem ganzen Projekt zur Verfügung zu stellen (client seitig)
- ```gatsby-ssr.js``` : um importe und exporte dem ganzen Projekt zur Verfügung zu stellen (server seitig)

