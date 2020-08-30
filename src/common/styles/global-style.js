import { createGlobalStyle } from "styled-components";
import CovidImage from "../../assets/images/covid.jpg";

const globalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        line-height: normal;
    }

    html, body {
        width: 100%;
        height: 100%;

        display: flex;
    }

    #root {
        height: 100%;
        width: 100%;

        background: url(${CovidImage});
        background-size: cover;
        background-position: center center;
    }

    .mb-2 {
        margin-bottom: 16px;
    }

    .pt-2 {
        padding-top: 16px;
    }

    .cursor {
        cursor: pointer;
    }
`;

export default globalStyle;
