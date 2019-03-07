const initialState = {
    'page': 1,
    'pages': 1,
  }
  
  export default (state = initialState, action) => {
      switch (action.type) {
        case 'SET_PAGINATION':
          return action.payload;
        default:
          return state;
      }
    };