import yiiApi from '../apis/yiiApi';

export const setLoading = (value) => dispatch => {
  dispatch({type: 'SET_LOADING', payload: value })
};

export const fetchDocument = (entryId) => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await yiiApi.get('documents/'+ entryId);
    dispatch({type: 'FETCH_DOCUMENT', payload: response.data})
  } catch(error) {
    dispatch({type: 'FETCH_DOCUMENT_FAIL'})
  }
  dispatch(setLoading(false));
  
};

export const fetchDocuments = (page = 1) => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await yiiApi.get('/documents?page='+page);
    const pagination = {
      pages: response.headers["x-pagination-page-count"],
      page: response.headers["x-pagination-current-page"]
    }
    dispatch({type: 'FETCH_DOCUMENTS', payload: response.data });
    dispatch({type: 'SET_PAGINATION', payload: pagination});
  } catch(error) {
    dispatch({type: 'FETCH_DOCUMENTS_FAIL'})
  }
  dispatch(setLoading(false));
};

export const addDocument = (data) => async dispatch => {
    dispatch(setLoading(true));

    const formData = new FormData();
    formData.append('DocumentUploadForm[file]', data.file);
    formData.append('DocumentUploadForm[title]',data.title);
    formData.append('DocumentUploadForm[description]',data.description);
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    };
    try {
      await yiiApi.post('/documents', formData, config);
    } catch(error) {
      console.error(error);
    }
}

export const deleteDocument = (id) => async dispatch => {
    dispatch(setLoading(true));
    try {
      await yiiApi.delete('/documents/'+id);
    } catch(error) {
      console.error(error);
    }
}
