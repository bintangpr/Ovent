import {createGlobalStyle} from "styled-components";

//Reset Style
const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

*{
    margin:0;
    pading:0;
}

*,*::before,*::after{
    box-sizing: inherit;
}

html{
    box-sizing: border-box;
    font-size: 62.5%; 
    @media only screen and (max-width:56.25em){
        font-size: 50%;
    } 
    @media only screen and (max-width:37.5em){
        font-size: 43.75%;
    } 
}
body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #222;
    line-height: 1.6;
    background-color: #fff;
    min-height:100vh;
    width:100%;
  }
  `;




//body belum dimasukkin^

export default GlobalStyle;