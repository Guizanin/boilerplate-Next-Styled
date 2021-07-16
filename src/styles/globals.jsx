import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
	color: inherit;
  font-family: var(--main-font-family);
  font-weight: 400;
  margin: 0;
  padding: 0;
	text-rendering: optimizeLegibility;
	vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
}

:root {
  --white: #FFFFFF;
  --black: #000000;

  --main-font-family: '';
  --second-font-family: '';
}

html,
body {
	padding: 0;
	margin: 0;
	min-height: 100vh;
  overflow-x: hidden;
}

body {
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
strong {
  font-weight: 700
}

a {
	color: inherit;
	text-decoration: none;
}

button, 
select {
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent
}

select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

img {
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  padding-inline-start: 0;
}

// Max. width for the site
.container {
	width: 100%;
	max-width: 1920px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
}

// Max. width for site content
.internal {
	width: 100%;
	max-width: 1305px; // 1235 + 35 + 35
	margin-left: auto;
	margin-right: auto;
	padding-right: 35px;
	padding-left: 35px;
}
`
