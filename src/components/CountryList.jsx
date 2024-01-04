import styles from './CountryList.module.css';
import CountryItem from './CountryItem'; // Ensure this matches the actual file name
import Spinner from './Spinner';
import Message from './Message';

export default function CountryList({cities, isloading}) {
    if(isloading) return <Spinner/>;

    if(!cities.length) return <Message message='Add your first City by clicking on city on map'/>;

    const countries = cities.reduce((arr, city)=> {
      if(!arr.map((el)=>el.country).includes(city.country)) 
      return [...arr,{country:city.country, emoji: city.emoji}];
    else return arr}
    , []);

  return (
    <ul className={styles.countryList}>
        {countries.map((country) =>(
        <CountryItem country={country} key={country.country}/>
        ))}
    </ul>
  );
}
