import styles from './Statistic.module.css';

function Statistic({ title, stats }) {
  return (
    <section className={styles.statistic}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statsList}>
        {stats.map(stat => (
          <li className={styles.item} key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistic;
