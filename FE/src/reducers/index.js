import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import documentsReducer from './documentsReducer';
import documentReducer from './documentReducer';
import paginationReducer from './paginationReducer'

export default combineReducers({
    loading: loadingReducer,
    documents: documentsReducer,
    document: documentReducer,
    pagination: paginationReducer,
})