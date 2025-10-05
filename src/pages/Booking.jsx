import SectionButton from '../components/SectionButton';
import BookingButton from '../components/BookingButton';

export default function Booking(){
return (
  <div>
    <div className="app-container">
      <div>
        <header className="mainHeader">
          <h1>Taniti</h1>
          <h4>-Experience Everything-</h4>
        </header>

        <div>
          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Book Your Trip to Taniti</h2>

            <label>
              Name:
              <input type="text" name="name" required />
            </label>

            <label>
              Email:
              <input type="email" name="email" required />
            </label>

            <label>
              Phone Number:
              <input type="tel" name="phone" required />
            </label>

            <label>
              Number in Party:
              <input type="number" name="partySize" min="1" required />
            </label>

            <label>
              Length of Visit (in days):
              <input type="number" name="length" min="1" required />
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div
          className="sectionButtonHolder"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <SectionButton
            path={"/"}
            label={"Return to Home"}
            onClick={() => console.log("Food and Lodging")}
          />
        </div>
      </div>
    </div>
    <footer>
      All Images Used Are Provided For Fair Use By: https://www.pexels.com/
    </footer>
  </div>
);


}