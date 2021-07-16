import ListRepositories from '../../components/ListRepositories';
import SelectedRepository from '../../components/SelectedRepository';

import styles from './styles.module.scss';

export default function Home() {

  return (
    <>
      <header className={styles.header}>
        <strong>Redux</strong>
      </header>

      <main className={styles.container}>
        <ListRepositories />

        <SelectedRepository />
      </main>
    </>
  );
}

