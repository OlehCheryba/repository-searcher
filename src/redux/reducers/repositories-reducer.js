import repositoriesAPI from './../../api/repositories-api';

const SET_SEARCHED_REPOSITORIES = 'searcher/repositories/SET_SEARCHED_REPOSITORIES';
const SET_SELECTED_REPOSITORIES = 'searcher/repositories/SET_SELECTED_REPOSITORIES';
const TOGGLE_IS_FETCHING= 'searcher/repositories/TOGGLE_IS_FETCHING';

const initialState = {
  searchedRepositories: [],
  selectedRepositories: [],
  isFetching: false
}

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHED_REPOSITORIES:
      return {
        ...state,
        searchedRepositories: action.repositories
      }
    case SET_SELECTED_REPOSITORIES:
      return {
        ...state,
        selectedRepositories: action.repositories
      }
    case TOGGLE_IS_FETCHING:
      return { 
        ...state, 
        isFetching: action.isFetching 
      }
    default:
      return state;
  }
}

export const setSearchedRepositories = (repositories) => ({ 
  type: SET_SEARCHED_REPOSITORIES, 
  repositories 
});

export const setSelectedRepositories = (repositories) => ({ 
  type: SET_SELECTED_REPOSITORIES, 
  repositories 
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING, 
  isFetching 
});

export const searchRepositories = (keyword) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const repositories = await repositoriesAPI.searchRepositories(keyword);
  dispatch(toggleIsFetching(false));
  dispatch(setSearchedRepositories(repositories));
}

export const requestSelectedRepositories = () => (dispatch) => {
  const repositories = repositoriesAPI.getSelectedRepositories();
  dispatch(setSelectedRepositories(repositories));
}

export const selectRepository = (repository) => (dispatch) => {
  repositoriesAPI.selectRepository(repository);
  dispatch(requestSelectedRepositories());
}

export const deleteRepositoryFromSelected = (repositoryToDeleteId) => (dispatch) => {
  repositoriesAPI.deleteRepositoryFromSelected(repositoryToDeleteId);
  dispatch(requestSelectedRepositories());
}

export default repositoriesReducer