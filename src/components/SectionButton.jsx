import { Link } from 'react-router-dom';
export default function SectionButton({path, label, onClick}){

    return(
        <Link to={path}>
            <button className="button-29" onClick={onClick}>
                {label}
            </button>
        </Link>
    );
}