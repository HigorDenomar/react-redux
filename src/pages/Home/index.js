import { connect } from 'react-redux';

function Home({ repos }) {
  console.log(repos);

  return (
    <>
      <header>
        Redux
      </header>

      <main>
        <ul className="reposWrapper">
        { repos?.map(repo => (
          <li key={repo.id}>{ repo.name }</li>
        )) }
        </ul>
      </main>
    </>
  );
}

export default connect(state => ({ repos: state.repositories }))(Home);