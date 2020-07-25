import colors from '../../commanUtils/color';

export const __imageWrapper = () => ({
    img: {
        width: "200px",
        margin: "-45px 20px"
    },
    "@media only screen and (max-width: 768px)": {
        img: {
            width: "45px",
            margin: "27px 20px"
        },
    }
});

export const __wrapper = () => ({
    display: "flex",
    height: "99px",
    justifyContent: "space-between",
    background: colors.white,
    position: "sticky",
    top: 0,
    width: "100%",
    zIndex: "1007",
    boxShadow: "0 3px 6px 0 rgba(0,0,0,0.15)"
});