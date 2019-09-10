<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Andi's Gatsby Playground
</h1>

**SOLVED**
The IdentityModal is not styled properly when importing
"../css/loginmodal.module.css" - see line 9 in index.js

The react-bootstrap Button styling is overwritten when importing
"react-netlify-identity-widget/styles.css" directly - see line 10 in index.js

TODO: Import the react-netlify-identity-widget/styles.css in a way that does not change the react-bootstrap stylings

The issue is known:
https://github.com/sw-yx/react-netlify-identity-widget/issues/3

How can we "namespace" this now? --> Done by sw-yx himself now with "react-netlify-identity-widget": "^0.2.5"

