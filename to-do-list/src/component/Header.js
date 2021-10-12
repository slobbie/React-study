import { Link } from 'react-router-dom';

export default function Header(){
    return <div className="header">
        <h1>
            <Link to="/">To-Do-LIST</Link>
        </h1>
        <div className="menu">
            <a href="#x" className="link">
                할일추가
            </a>
            <a href="#x" className="link">
                날짜추가
            </a>
        </div>
    </div>;
}