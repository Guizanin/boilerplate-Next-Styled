import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #FFFFFF;

  --main-font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  --second-font-family: '';
}

html,
body {
	padding: 0;
	margin: 0;
	min-height: 100vh;
}

body {
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font-family: var(--main-font-family);
  font-weight: 400;
}

a {
	color: inherit;
	text-decoration: none;
}

button {
  cursor: pointer;
}
`
