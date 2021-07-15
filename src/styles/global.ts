import { createGlobalStyle } from 'styled-components'




export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E62E4D;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light:#6933FF;

        --text-title:#363F5F;
        --text-body:#969CB3;
        
        --shape:#FFFFFF;
        --background: #F0F2F5;

    }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    // font-size: 16px é o padrão (Desktop)
    html {
        @media(max-width:1080px) {
            font-size: 93.75%; //15px
        }
        
        @media(max-width:720px) {
            font-size: 87.5%; //14px
        }
    }

    //REM 1 rem é igual ao font-size da página
    //então se diminui o padrão da font-size diminui o 1REM
    //Se adapta melhor a tela do usuário
    //Usar percentual permite que aumente e diminua de acordo com a preferência do usuário.

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    button {
        cursor:pointer;
    }

    [disabled] {
        opacity:0.6;
        cursor:not-allowed;
    }
`