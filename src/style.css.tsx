
import { styled } from '@stitches/react';

const getScreenWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const screenWidth = getScreenWidth();

export const Main = styled("div", {
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    backgroundColor: "#37dfdf",
    minWidth: screenWidth + "px",
})
   

export const StyledRoot = styled('div', {
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
    marginLeft:"auto",
    marginRight:"auto",
});
