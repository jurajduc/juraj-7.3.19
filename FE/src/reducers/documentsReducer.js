export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_DOCUMENTS':
            return action.payload;
        case 'FETCH_DOCUMENTS_FAIL':
            return null;
        default:
            return state;
    }
};