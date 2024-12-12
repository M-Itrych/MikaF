import OfferTile from "../../components/Sections/OfferTile";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Offer.css";
import SliderDostwacy from "../../components/Utils/SliderDostawcy";
import { useEffect, useState } from "react";
import axios from "axios";
import config from '../../config.json'
import React from "react";

const Offer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/api/offers`);

        if (!response.data) {
          throw new Error("No data received");
        }
        console.log(response.data);
        setData(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);



  return (
    <>
      <NavBar />
      <main className="offer-wrapper">
        <section className="offer-heading">
          <h1>Oferta</h1>
          <p>
            Zanurz się w Naszych Wyjątkowych Ofertach
          </p>
        </section>
        {data &&
          data.map((e, index) => (
            <OfferTile
              key={index}
              title={e.title}
              text={e.text}
              img={{ src: e.img.src, alt: e.img.alt }}
              btn={true}
              bg={!(index % 2)}
              reverse={!(index % 2)}
              href={"/offer/" + e._id}
            />
          ))}
        <section className="offer-contact-footer">
          <div className="offer-contact-wrapper">
            <h1>Skontaktuj się z nami w sprawie uzyskania oferty</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin eu
              condimentum tristique nibh in. Amet sed eget nisl vitae turpis id
              donec. Facilisis elit facilisis duis nisi tristique etiam massa.
              Feugiat.
            </p>
            <a href="/contact" className="offer-contact-btn">
              Napisz do nas
            </a>
          </div>
        </section>
      </main>
      <SliderDostwacy />
      <Footer />
    </>
  );
};

export default Offer;
