import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@keyframes move {
    0% {
        box-shadow: rgb(252,210,23) 0 0 0px;
    }
    100% {
        box-shadow: rgb(252,210,23) 0 10px 100px
    }
}
body {
    color: #FBFBFB;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: #2828e6;
}
`;

export const Marginals = css`
box-sizing: border-box;
display: flex;
pointer-events: none;
position: fixed;
width: 100vw;
z-index: 1;
`;

export const Wrapper = styled.section.attrs(({$color}) => ({
    style: {
        backgroundColor: `hsl(${$color}, 79%, 53%)`
    }
}))`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
`;

export const ImageContainer = styled.div.attrs(({$isTogether}) => ({
style: {
    animation: $isTogether ? 'move 1s infinite alternate' : 'none'
}
}))`
display: flex;
flex-wrap: wrap;
position: relative;
height: 600px;
width: 400px;
`;
