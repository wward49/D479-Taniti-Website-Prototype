import { useParams } from "react-router-dom";
import SectionButton from "../components/SectionButton";
import BookingButton from "../components/BookingButton";
import foodImg from '../images/food.jpg';
import entertainmentImg from '../images/entertainment.jpg';
import travelImg from '../images/travel.jpg';
import faqImg from '../images/faq.jpg';
import sectionContent from '../data/sectionContent.json'


    const imageMap = {
        "food-lodging": foodImg,
        "entertainment": entertainmentImg,
        "getting-around": travelImg,
        "faq": faqImg,
    };

    const experienceMap = {
        "food-lodging": "Comfort",
        "entertainment": "Entertainment",
        "getting-around": "Wonder",
        "faq": "Everything",
    };

export default function Section(){ 
    const { slug } = useParams();

    const formattedTitle = slug
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const imageToShow = imageMap[slug]

    const content = sectionContent[slug] || "No content for this section...";

    return (
      <div>
          <div className="app-container">
            <div>
              <header className="mainHeader">
                <h1>Taniti</h1>
                <h4>-Experience {experienceMap[slug]}-</h4>
              </header>

              <div>
                <img 
                src={imageToShow} 
                alt={`Image for: ${formattedTitle}`}
                style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
                />
              </div>

              <div className="mainText">
                <h2>{formattedTitle}</h2>
                <div>
                    {content.split('\n').map((text, index) => (
                        <p>
                        {text}
                        <br />
                        </p>
                    ))
                    }
                </div>
              </div>

              <div className="bookingButtonHolder">
                <BookingButton/>
              </div>

              <div 
              className="sectionButtonHolder" 
              style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
              >
                <SectionButton
                  path={"/"}
                  label={"Return to Home"}
                  onClick={() => console.log("Food and Lodging")}

                />
              </div>              
            </div>
          </div>
        <footer>All Images Used Are Provided For Fair Use By: https://www.pexels.com/</footer>
      </div>
    );

}