import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --bg: ${({ theme }) => theme.bg};
        --bg-panel: ${({ theme }) => theme.bgPanel};
        --color-headings: ${({ theme }) => theme.colorHeadings};
        --color-text-opacity: ${({ theme }) => theme.colorTextOpacity};
        --color-text: ${({ theme }) => theme.colorText};
        --color-text-base: ${({ theme }) => theme.colorTextBase};
        --border: ${({ theme }) => theme.border};
        --color-hover: blue;
        --marquee-width: 80vw;
        --marquee-height: 15vh;
        --marquee-elms-displayed: 5;
        --marquee-elm-width: calc(
            var(--marquee-width) / var(--marquee-elms-displayed)
        );
        --marquee-duration-animation: calc(var(--marquee-elms) * 3s);
    }

    section,
    footer,
    header,
    main,
    nav {
        display: block;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: var(--color-text);
        background-color: var(--bg);
        text-align: center;
        max-width: 2400px;
    }

    a {
        color: #495fef;
        text-decoration: none;
        background-color: transparent;
    }

    h1,
    h2,
    h3,
    h4 {
        color: var(--color-headings);
        margin-top: 0.25rem;
        margin-bottom: 0.5rem;
    }

    p {
        margin-top: 0;
    }

    button {
        outline: none;
    }
`;
