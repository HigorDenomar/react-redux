import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectedRepo } from '../../store/actions/repositories';

import { getRepositories } from '../../store/reducers/repositories';

import styles from './styles.module.scss';

function ListRepositories({ repos, dispatch }) {
  useEffect(() => {
    const username = "HigorDenomar";

    dispatch(getRepositories(username));
  }, [dispatch]);

  function selectRepository(repo) {
    dispatch(setSelectedRepo(repo));
  }

  return (
    <ul className={styles.reposWrapper}>
      { repos.map(repo => (
        <li key={repo.id} onClick={() => selectRepository(repo)}>
          { repo.name.replaceAll('-', ' ') }
        </li>
      )) }
    </ul>
  );
}

export default connect(state => ({ repos: state.repositories.list }))(ListRepositories);