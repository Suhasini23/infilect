import colors from '../../commanUtils/color';
import fonts from '../../commanUtils/fonts';

export const __imageWrapper = () => ({
    img: {
        width: "200px",
        margin: "-45px 20px"
    },
    "@media only screen and (max-width: 768px)": {
        img: {
            width: "132px",
            margin: "-16px 21px;"
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

export const __buttonWrapper = () => ({
    width: "5%",
    margin: "auto 0",
    fontFamily: fonts.boldFont,
    fontSize: "16px",
    "@media only screen and (max-width: 767px)": {
        width: "20%",
    }
});
