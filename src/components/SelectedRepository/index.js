import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

export default function SelectedRepository() {
  const repository = useSelector(state => state.repositories.selected);

  if(!repository?.name) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <span>No repository selected.</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span>Selected repository</span>

      <div className={styles.data}>
        <h1>{ repository.name.replaceAll('-', ' ') }</h1>

        <p>{repository.description}</p>

        <small>{repository.created_at}</small>
      </div>
    </div>
  );
}