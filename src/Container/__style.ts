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
    width: "unset",
    gridTemplateColumns: "auto",
    display: "flex",
    flexDirection: "column",
    margin: "8px 0 0px 0px",
    height: "82vh",
  }

}
);

export const __title = (props: object) => ({
  fontSize: "66px",
  fontFamily: fonts.boldFont,
  "@media only screen and (max-width: 768px)": {
    fontSize: "26px",
    textAlign: "center",
    padding: "90px 0"
  }
}
);


export const __titleWrapper = (props: object) => ({
  color: colors.white,
  fontFamily: fonts.mediumFont,
  padding: "140px",
  "@media only screen and (max-width: 768px)": {
    padding: "unset"
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
  },
  "@media only screen and (max-width: 768px)": {
    img: {
      paddingTop: "0px",
      display: "none"
    }
  }
}
);

export const formStyle = (props: object) => ({
  padding: "35px 0",
  "@media only screen and (max-width: 768px)": {
    padding: "110px 20px"
  }
}
);
