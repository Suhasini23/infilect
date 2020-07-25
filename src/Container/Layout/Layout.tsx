import styled from "@emotion/styled";
import Header from '../../Components/Header/Header';
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "../../Utils/lodashUtils"
import * as styles from "./__style";
import { useHistory } from 'react-router';
import { Dispatch } from "redux";
import { getImages } from '../../Actions/mainActions';
import { IState } from '../../commanUtils/GenericInterfaces';
// @ts-ignore
const Wrapper = styled.div(styles.__masonryWrapper);
const ChildWrapper = styled.img(styles.__child);


interface IMapDispatchToProps {
    getImages: () => void;
}

interface IMapStateToComponentProps {
    imageData: []
}
const mapStateToProps = (state: IState): IMapStateToComponentProps => ({
    imageData: _.get(state, "images", [])
});

function mapDispatchToProps(dispatch: Dispatch<any>): IMapDispatchToProps {
    return {
        getImages: () => dispatch(getImages())
    };
}
const Layout: React.FC<any> = props => {
    const { getImages, imageData } = props;
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const history = useHistory();
    useEffect(() => {
        getIndexFromRoute()
        getImages();
    }, []);

    const getIndexFromRoute = () => {
        const pathname = window && window.location.pathname;
        const index = pathname.split("/")[2];
        setSelectedIndex(Number(index))
    }
    const handleOnClick = (val: number) => {
        history.push(`/image/${val}`);
        setSelectedIndex(val)
    }

    return (
        <div>
            <Header />
            <div className="container">
                <Wrapper>
                    {
                        imageData && imageData.map((item: any, index: number) => {
                            const imageURL = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
                            const isSelected = selectedIndex === index;
                            return (
                                <ChildWrapper isSelected={isSelected} src={imageURL} alt={item.title} onClick={() => handleOnClick(index)} />
                            )
                        })
                    }
                </Wrapper>
            </div>

        </div>
    )

}
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Layout);

