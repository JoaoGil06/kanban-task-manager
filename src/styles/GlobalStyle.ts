import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
  --slateBlue: #635FC7;
  --maximumBluePurple: #A8A4FF;

  --richBlack: #000112;
  --gunmetal: #2B2C37;
  --darkGunmetal: #20212C;
  --arsenic: #3E3F4E;
  
  --shadowBlue: #828FA3;
  --lavender: #E4EBFA;
  --aliceBlue: #F4F7FD;
  
  --white: #FFFFFF;
  
  --fireOpal: #EA5555;
  --americanPink: #FF9898;
    
  }

* {
  box-sizing: border-box
}
  html {
  /* font-size: 10px; */
  font-size: 62.5%;
  padding: 0;
  margin: 0;
  height:100%;
}

/* 600px */
@media only screen and (max-width: 37.5em) {
  html {
    /* font-size: 10px; */
    font-size: 62.5%;
  }
}

/* 900px */
@media only screen and (max-width: 56.25em) {
  html {
    /* font-size: 8px; */
    font-size: 50%;
  }
}

/* 1200px */
@media only screen and (max-width: 75em) {
  html {
    /* font-size: 9px */
    font-size: 56.25%;
  }
}

/* 1800px */
@media only screen and (min-width: 112.5em) {
  html {
    /* font-size: 12px; */
    font-size: 75%;
  }
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: var(--white);
  height:100%;

}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  text-decoration: none;
}

`;
