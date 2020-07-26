
import { keyframes } from "@emotion/core";

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`
export const __loader = (props: object) => ({

    border: "16px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "16px solid #3498db",
    width: "120px",
    margin: "auto",
    height: "120px",
    webkitAnimation: `${spin} 2s linear infinite`, /* Safari */
    animation: `${spin} 2s linear infinite`,
}
);