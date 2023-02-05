import styles from '../Filter/Filter.module.scss';

export default function Filter({ onChange }) {
  return (
    <div className={styles.filterGroup}>
      <label className={styles.filterLabel}>Find contacts by name</label>
      <input className={styles.filterInput} name="filter" onChange={onChange} />
    </div>
  );
}
