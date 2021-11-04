import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from "./Word"

export default function Day(){

    const { day } = useParams();
    const petchday = Number (day);

   
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    const history = useHistory();

    function handleClick(){
        if(day > 1){     
                history.push(`/day/${day - 1}`);    
        }
    }



    function nextDay(){     
        return history.push(`/day/${parseInt(day) + 1}`);  
        // if(day === '' || day === null || day === undefined){   
        //     return history.push(`/day/${parseInt(day) + 1}`);  
        // } else if(petchday !== undefined){
        //     alert('더이상 단어장이 없습니다.')           
        //     return history.replace("/create_day");            
        // }else{
            
        // }  
    }


    const goBack = () => {
       history.goBack();
    }


    // function nextDay(){      
    //     if(petchday !== undefined){
    //         alert('더이상 단어장이 없습니다 단어장으로 이동하실?.')           
    //         return history.replace("/create_day");            
    //     }else{
    //         return history.push(`/day/${parseInt(day) + 1}`);  
    //     }  
    // }


   
   


    // 데이 자체를 넘버라고 명시를 해버리고  조건문으로 서버에 더이상 데이가 없으면 단어장이 없다는 무언가 알림을 주기
    // const nextDay = () => {     
    //     if (day === '' || day === null || day === undefined){
    //         history.push(`/day/${parseInt(day) + 1}`);   
    //     }else if(day !== '' || day !== null || day !== undefined) { 
    //             if(!window.confirm('더이상 단어장이 없습니다.새로운 단어장을 추가할까요?')){
    //                 return
    //             }else{
    //                 return history.replace("/create_day");
    //             }           
    //     }        
    // } 

   
    
   
    return (
        <>
            <h2>Day {day}
            <button className="page_btn"
            onClick={handleClick}>
                prevDay
            </button>
            <button className="page_btn"
            onClick={() => nextDay()}>
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
            <button type="button" className="goBack" onClick={goBack}>뒤로가기</button>
        </>
    );
} 