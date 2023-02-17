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

    .link-btn {
        background-color: transparent;
        border: none;
    }
`;


/* 
.container,
.container-fluid {
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.container { max-width: 1140px; }

.ul-defaults-none {
  list-style: none;
  margin: 0;
  padding: 0;
}

.btn {
  font-weight: 700;
  min-width: 175px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 1.63px;
  transition: 0.4s;
  height: 65px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0 32px 54px rgba(3, 3, 3, 0.12);
}

.btn:not(:disabled):not(.disabled),
button:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn-primary,
.btn-primary a {
  color: #fff;
  background-color: #495fef;
  border-color: #495fef;
}

.round-pill {
  border-radius: 50rem;
}

.header-lg {
  font-size: 5rem;
  letter-spacing: -2.5px;
  line-height: 1.05;
}

.header-md {
  font-size: 3rem;
  letter-spacing: -2px;
}

.sub-header {
  font-size: 1.3125rem;
  line-height: 1.5;
  padding-top: 1.25rem;
  padding-bottom: 1.875rem;
}



 */
