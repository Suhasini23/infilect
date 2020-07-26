import React from "react";
import styled from "@emotion/styled";
import * as styles from "./__style";
// @ts-ignore
const LoaderDiv = styled.div(styles.__loader);

interface IComponentProps {
}
const Loader: React.FC<IComponentProps> = props => {
    return (
        <LoaderDiv />
    )
};
export default Loader;