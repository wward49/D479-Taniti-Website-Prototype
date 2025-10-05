import SectionButton from '../components/SectionButton';
import BookingButton from '../components/BookingButton';
import ImageScroller from "../components/ImageScroller";

export default function Home() {
  
  return (
    <div>
      <div className="app-container">
        <ImageScroller/>
        <header className='mainHeader'>
              
          <h1>Taniti</h1>
          <h4>-Experience Everything-</h4>
        </header>

        <div className='mainText'>
          <h2>Get to know Taniti!</h2>
          <p>Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture.</p>
        </div>
        
        <div className='sectionButtonHolder'>
          <SectionButton path={"/section/food-lodging"} label={"Food and Lodging"} onClick={() => scrollToTop()}/>
          <SectionButton path={"/section/entertainment"} label={"Entertainment"} onClick={() => scrollToTop()}/>
          <SectionButton path={"/section/getting-around"} label={"Getting Around"} onClick={() => scrollToTop()}/>
          <SectionButton path={"/section/faq"} label={"FAQ"} onClick={() => scrollToTop()}/>  
        </div>

        <div className='bookingButtonHolder'>
          <BookingButton/>
        </div>

        <div className='mainFooting'>
          <h3>What do others say?</h3>
          <p>
            Fred from Florida: "This is a great place!"
            <br/>
            Timmy from Texas: "This is a great place with great food!!"
            <br/>
            Iggy from Iowa: "This is an awesome place!"
            <br/>
            Steve from Spain: "This is a scary place! In a good way!"
            <br/>
            Kate from Kenya: "This is a cool place!"
            <br/>
            Josuke from Japan: "This is the greatest place!"
          </p>
        </div>
        
      </div>
      <footer>All Images Used Are Provided For Fair Use By: https://www.pexels.com/</footer>
      </div>

  );
}