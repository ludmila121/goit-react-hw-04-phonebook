import {} from '@emotion/styled';
import 'normalize.css';
 
export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 20px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
}

button {
  font-family: -apple-system, BlinkMacSystemFont, 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  height: 22px;
}
`;