import { setRepos } from '../actions/repositories';

const INITIAL_STATE = {
  selected: {},
  list: []
}

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_REPOS':
      return {...state, list: [...state.list, ...action.repos]};
      
    case 'SET_SELECTED_REPO':
      return { ...state, selected: action.repo };

    default:
      return state;
  }
}

export function getRepositories(username) {

  return async (dispatch) => {
    const repos = await fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => data);
  
    dispatch(setRepos(repos));
  }
}