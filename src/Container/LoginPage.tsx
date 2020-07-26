import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import * as styles from "./__style";
import background from "../assets/aa.jpg"
import Header from '../Components/Header/Header';
import { setAuth } from '../Actions/authActions';

// @ts-ignore
const Wrapper = styled.div(styles.__wrapper);
// @ts-ignore
const DetailsWrapper = styled.div(styles.__detailWrapper);
// @ts-ignore
const TitleWrapper = styled.div(styles.__titleWrapper);
// @ts-ignore
const ImgWrapper = styled.p(styles.__imgWrapper);
// @ts-ignore
const Title = styled.p(styles.__title);
// @ts-ignore
const FormWrapper = styled.form(styles.formStyle);


interface IMapDispatchToProps {
    setAuthData: (name: string, pass: string) => void;
}

function mapDispatchToProps(dispatch: Dispatch<any>): IMapDispatchToProps {
    return {
        setAuthData: (name: string, pass: string) => dispatch(setAuth(name, pass))
    };
}


const LoginPage: React.FC<any> = props => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { setAuthData } = props;

    const notify = () => toast.error("Please fill both the fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const validateFormFields = () => {
        if (username.length > 0 && password.length > 0) {
            setAuthData(username, password);
            history.push("/");
            console.log('Successfully Login');
            return;
        }
        notify();
        return;
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        validateFormFields();

    }
    if (localStorage.getItem("name") != null && localStorage.getItem("pw") != null) {
        history.goForward()
    }
    return (
        <Wrapper>
            <Header />
            <div className="container">
                <DetailsWrapper>
                    <TitleWrapper>
                        <Title> EXPLORE.</Title>
                        <FormWrapper onSubmit={handleSubmit}>
                            <FormGroup controlId="Username">
                                <FormControl
                                    autoFocus
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={e => setUserName(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" >
                                <FormControl
                                    value={password}
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                />
                            </FormGroup>
                            <Button block type="submit">
                                Login
                            </Button>

                        </FormWrapper>
                    </TitleWrapper>
                    <ImgWrapper>
                        <img src={background} alt="riimg" />
                    </ImgWrapper>
                </DetailsWrapper>
                <ToastContainer />

            </div>
        </Wrapper>

    )
}
// @ts-ignore
export default connect(null, mapDispatchToProps)(LoginPage);
