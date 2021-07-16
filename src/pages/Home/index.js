import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRepositories } from '../../store/reducers/repositories';

function Home({ repos, dispatch }) {

  useEffect(() => {
    dispatch(getRepositories);
  }, []);

  return (
    <>
      <header>
        Redux
      </header>

      <main>
        <ul className="reposWrapper">
        { repos.map(repo => (
          <li key={repo.id}>{ repo.name }</li>
        )) }
        </ul>
      </main>
    </>
  );
}

export default connect(state => ({ repos: state.repositories }))(Home);