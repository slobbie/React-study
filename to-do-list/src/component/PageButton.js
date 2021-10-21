import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
export default function Pagebutton(){
    const { day } = useParams();


    // const days = useFetch(`http://localhost:3001/day/${day.day}`);

    function prevDay(){
        return day - 1;
    }

    function nextDay(){
        return day ;
    }

    return (
    <>
    <Link to={`/day/${prevDay()}`}>
            <button 
            type="button"style={{marginLeft: "20px" ,}}>
                 prevDay
            </button>
    </Link> 

    <Link to={`/day/${nextDay()}`}>
    <button type="button"style={{marginLeft: "20px" ,}}>
                nextDay
            </button>
    </Link>

    </>
    );
}