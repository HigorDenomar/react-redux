export function setRepos(repos) {
  return {
    type: 'SET_REPOS',
    repos,
  }
}

export function setSelectedRepo(repo) {
  return {
    type: 'SET_SELECTED_REPO',
    repo
  }
}