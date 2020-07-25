import { keyframes } from "@emotion/core";
import colors from '../commanUtils/color';
import fonts from '../commanUtils/fonts';
export const __wrapper = (props: object) => ({
    backgroundColor: colors.extremeBlack,
    height: "100vh",
}
);


export const __detailWrapper = (props: object) => ({
    display: "grid",
    gridTemplateColumns: "55% auto",
    border: "7px solid white",
    margin: "80px 0 0px 0px",
    height: "70vh",
    background: "#000 url(//cssanimation.rocks/demo/starwars/images/bg.jpg)",
    "@media only screen and (max-width: 768px)": {
        margin: "9px 0px 0px 0px",
        width: "unset",
        gridTemplateColumns: "auto",
        height: "95vh"
    }

}
);

export const __title = (props: object) => ({
    fontSize: "36px",
    "@media only screen and (max-width: 768px)": {
        fontSize: "26px",
        textAlign: "center"
    }
}
);


export const __titleWrapper = (props: object) => ({
    color: colors.white,
    fontFamily: fonts.mediumFont,
    padding: "140px",
    "@media only screen and (max-width: 768px)": {
        padding: "unset",
    }
}
);

export const __subTitleWrapper = (props: object) => ({
    "@media only screen and (max-width: 768px)": {

        paddingTop: "62px",
        margin: "0 25px",
        textAlign: "center",
    }
}
);

export const __imgWrapper = (props: object) => ({
    img: {
        paddingTop: "63px"
    }
}
);



export const __glitch = (props: object) => ({
    fontSize: "30px",
    textAlign: "center",
    position: "relative",
    animation: `${shake} .4s infinite`,
    animationDirection: "alternate",

    span: {
        "&:first-child": {
            color: "#0301FA",
            animation: `${glitch} .4s linear infinite`,
            animationDirection: "alternate",
            position: "absolute",
            transform: "translateY(0px)",
            left: 0
        },
        "&:nth-child(2)": {
            color: "#0301FA",
            animation: `${glitch} .4s linear infinite`,
            animationDirection: "alternate",
            position: "absolute",
            transform: "translateY(0px)",
            left: "25px"
        },
        "&:nth-child(3)": {
            color: "#0301FA",
            animation: `${glitch} .4s linear infinite`,
            animationDirection: "alternate",
            position: "absolute",
            transform: "translateY(0px)",
            left: "50px"
        },
        "&:nth-child(4)": {
            color: "#0301FA",
            animation: `${glitch} .4s linear infinite`,
            animationDirection: "alternate",
            position: "absolute",
            transform: "translateY(0px)",
            left: "75px"
        },
        "&:nth-child(5)": {
            color: "#0301FA",
            animation: `${glitch} .4s linear infinite`,
            animationDirection: "alternate",
            position: "absolute",
            transform: "translateY(0px)",
            left: "100px"
        },
        "&:nth-child(6)": {
            color: "#0301FA",
            animation: `${glitch} .4s linear infinite`,
            animationDirection: "alternate",
            position: "absolute",
            transform: "translateY(0px)",
            left: "125px"
        },
        "&:nth-child(7)": {
            color: "#0301FA",
            animation: `${glitch} .4s linear infinite`,
            animationDirection: "alternate",
            position: "absolute",
            transform: "translateY(0px)",
            left: "150px"
        },

    }
}
);


export const __glitchOpacity = (props: object) => ({
    fontSize: "30px",
    textAlign: "center",
    color: "#EEEEEE",
    position: "absolute",
    top: "0",
    left: "-2px",
    animation: `${show} .2s infinite`,
    animationDirection: "alternate",
    span: {
        color: "#F802F8"
    }
}
);

export const __glitchFixed = (props: object) => ({
    fontSize: "30px",
    textAlign: "center",
    color: "#EEEEEE",
    position: "relative",
    animation: `${color} .4s infinite`,
    animationDirection: "alternate",
}
);



export const __filpWrapper = () => ({
    position: "absolute",
    // top: "45%",
    // marginLeft: "85px",
    top: "365px",
    marginLeft: "22px",
    // transform: "translateX(-50%) translateY(-50%)",
    "@media only screen and (max-width: 768px)": {
        top: "100px",
        marginLeft: "0px",
        right: "140px",

    }

})

const show = keyframes`
50% {
    opacity: 0;
    text-shadow: 2px 2px #AAE90E;
  }
`;

const color = keyframes`
50% {
    color: #b1b1b1;
  }
`;


const shake = keyframes`
0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(0px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(2px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(2px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`;


const glitch = keyframes`
0% {
    transform: translateY(-10%);
    transform: translateX(-5%);
  }
  50% {
    transform: translateY(-10%);
    transform: translateX(-10%);
    color: #01FA01;
  }
  100% {
    transform: translateY(10%);
    transform: translateX(5%);
    color: #FA0103;
    clip: rect(40px, 0px, 40px, 0px);
  }
`;