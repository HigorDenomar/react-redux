import { setRepos } from '../actions/repositories';

export default function repositories(state = [], action) {
  if(action.type === 'SET_REPOS') {
    return [...state, ...action.repos];
  }

  return state;
}

export async function getRepositories(dispatch) {
  const repos = await fetch('https://api.github.com/users/higordenomar/repos')
    .then(response => response.json())
    .then(data => data);

  dispatch(setRepos(repos));
}