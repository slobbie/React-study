import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from "./Word"

export default function Day(){
    // const a = useParams();
    // const day = a.day;

    const { day } = useParams();

   
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    const history = useHistory();

    function handleClick(){
        if(day > 1){     
                history.push(`/day/${day-1}`);    
        }
    }
    function handleClick2(){
        history.push(`/day/${day}`);
    }


   
    return (
        <>
            <h2>Day {day}
            <button className="page_btn"
            onClick={handleClick}>
                prevDay
            </button>
            <button className="page_btn"
            onClick={handleClick2}>
                nextDay
            </button>
            </h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word =>( 
                    <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}