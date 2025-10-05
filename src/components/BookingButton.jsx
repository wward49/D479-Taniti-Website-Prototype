import { Link } from 'react-router-dom';
export default function BookingButton(){

    return (
      <Link to={"/booking"}>
        <button
          className="button-73"
          onClick={() => scrollToTop()}
        >
          Book a Trip!
        </button>
      </Link>
    );
}