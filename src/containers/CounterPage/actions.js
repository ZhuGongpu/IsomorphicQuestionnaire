export const INCREASE = "app/counter/INCREASE";

export function increase(stride = 1) {
    // console.log("increase dispatch");
    return {
        type: INCREASE,
        stride
    }
}

export function increaseAsync(stride, delay = 1000) {
    return (dispatch) => {
        return setTimeout(() => {
                // console.info("increaseAsync dispatch");
                dispatch(increase(stride))
            },
            delay);
    }
}
