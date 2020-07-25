export const __masonryWrapper = (props: object) => ({
    /* Masonry container */
    columnCount: "3",
    columnGap: "1em",
    "@media only screen and (min-width: 1024px)": {
        columnCount: "3",
    },
    "@media only screen and (max-width: 1023px) and (min-width: 768px)": {
        columnCount: "3",
    },
    "@media only screen and (max-width: 767px) and (min-width: 540px)": {
        columnCount: "2",
    }

});

export const __child = (props: any) => ({
    backgroundColor: "#eee",
    display: "inline-block",
    margin: "0 0 1em",
    width: "100%",
    border: props.isSelected ? "4px solid blue" : "unset"

}
);
