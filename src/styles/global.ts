import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
			margin:0;
			padding: 0;
			box-sizing: border-box;
		}

	html {
		/* font-size: 62.5%; // this will work fine with rem */
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

export default GlobalStyle;
