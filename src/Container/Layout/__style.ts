export const __masonryWrapper = (props: object) => ({
    /* Masonry container */
    columnCount: "3",
    columnGap: "1em",
    "@media only screen and (min-width: 1024px)": {
        columnCount: "3",
    },
    "@media only screen and (max-width: 1023px)": {
        columnCount: "3",
    },
    "@media only screen and (max-width: 767px)": {
        columnCount: "2",
        columnGap: "0em",
    }

});

export const __child = (props: any) => ({
    backgroundColor: "#eee",
    display: "inline-block",
    margin: "0 0 1em",
    width: "100%",
    border: props.isSelected ? "10px solid blue" : "10px solid white",
    "@media only screen and (max-width: 767px)": {
        margin: "unset",
        border: props.isSelected ? "3px solid blue" : "3px solid white",

    }
}
);
