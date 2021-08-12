import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedRepo } from '../../store/actions/repositories';

import { getRepositories } from '../../store/reducers/repositories';

import styles from './styles.module.scss';

export default function ListRepositories() {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repositories.list)

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