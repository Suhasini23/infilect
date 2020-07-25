import * as CONST from "../Actions/actionTypes";
import { Dispatch } from "redux";
import axios from 'axios';
import _ from "../Utils/lodashUtils";

export const setImages = (images: []) => ({
    type: CONST.SET_IMAGES,
    images: images
});

export const getImages = (): any => {
    const API_KEY = "8z0Z4beHzJOnKDoOeGEByREs3jhLV6vapHu2T12zjPs";
    const API_URL = "https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=3087493e16dbe6019da8643dc5e3eeb1&group_id=2309748%40N20&format=json&nojsoncallback=1";
    return async (dispatch: Dispatch<any>) => {
        try {
            // dispatch(setShowLoader())
            // dispatch(setClearAllData())
            // dispatch(setSearchKey(keyword))
            const response = await axios.get(API_URL)
            if ((response && response.data)) {
                const data = _.get(response, "data.photos.photo", [])
                // dispatch(setSearchData(data))
                dispatch(setImages(data));
                // dispatch(setHideLoader())
            }
        } catch (ex) {
            console.log(ex);
        }
    };
};

