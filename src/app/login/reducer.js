export const formReducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                success: true,
                error: "",
                loading: false,
            };
        case "LOADING":
            return {
                success: false,
                error: "",
                loading: true,
            };
        case "ERROR":
            return {
                success: false,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const initialFormState = {
    success: false,
    loading: false,
    error: "",
};
