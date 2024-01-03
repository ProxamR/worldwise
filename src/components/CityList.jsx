
import styles from './CityList.module.css';
import CityItem from './CityItem'; // Ensure this matches the actual file name
import Spinner from './Spinner';
import Message from './Message';

export default function CityList({cities, isloading}) {
    if(isloading) return <Spinner/>;

    if(!cities.length) return <Message message='Add your first city by clicking on city on map'/>;

  return (
    <ul className={styles.cityList}>
        {cities.map((city) =>(
        <CityItem city={city} key={city.id}/>
        ))}
    </ul>
  );
}
