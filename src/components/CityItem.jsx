import styles from './CityItem.module.css';
import { Country }  from 'country-state-city';

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
 
function CityItem({ city }) {
  let country = Country.getAllCountries();

  const { cityName, emoji, date } = city;
  const flag = country.filter((ctry)=> ctry.flag===emoji)
  console.log(flag);

  return (
    
    <li className={styles.cityItem}>
  
      <span className={styles.emoji}>{JSON.stringify.flag}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  )
}

export default CityItem
