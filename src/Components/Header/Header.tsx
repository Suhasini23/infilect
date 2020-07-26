import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import mainLogo from "../../assets/logo.png";
import styled from "@emotion/styled";
import _ from "../../Utils/lodashUtils"
import * as styles from "./__style";
import { IState } from '../../commanUtils/GenericInterfaces';
import { clearAuth } from '../../Actions/authActions';
const ImageWrapperDiv = styled.div(styles.__imageWrapper);
// @ts-ignore
const WrapperDiv = styled.div(styles.__wrapper);
const ButtonDiv = styled.div(styles.__buttonWrapper);


interface IMapStateToComponentProps {
    isLoggedIn?: boolean
}
interface IHeader {
    isLoggedIn?: boolean
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    clearData: () => dispatch(clearAuth())
});
const mapStateToProps = (state: IState): IMapStateToComponentProps => ({
    isLoggedIn: _.get(state, "isLoggedIn", false)
});

const Header = (props?: IHeader) => {
    // @ts-ignore 
    const { isLoggedIn, clearData } = props;
    const text = isLoggedIn ? "Logout" : "";
    return <WrapperDiv>
        <ImageWrapperDiv>
            <img src={mainLogo} alt="logo" />
        </ImageWrapperDiv>
        <ButtonDiv role="button" onClick={clearData}>{text}</ButtonDiv>
    </WrapperDiv>;
}
// @ts-ignore 
export default connect(mapStateToProps, mapDispatchToProps)(Header);
