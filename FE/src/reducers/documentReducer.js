export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_DOCUMENT':
            return action.payload;
        case 'FETCH_DOCUMENT_FAIL':
            return null;
        default:
            return state;
    }
  };