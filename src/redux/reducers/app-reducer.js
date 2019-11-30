const ENABLE_SEARCH_MODE = 'searcher/app/ENABLE_SEARCH_MODE';

const initialState = {
  isModeSearch: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_SEARCH_MODE:
      return {
        isModeSearch: true
      }
    default:
      return state;
  }
}

export const enableSearchMode = () => ({ 
  type: ENABLE_SEARCH_MODE 
});

export default appReducer