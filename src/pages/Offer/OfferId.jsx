import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ImgText from "../../components/Sections/ImgText";
import "./OfferId.css";
import { useEffect, useState } from "react";
import axios from "axios";
import config from '../../config.json'
import React from "react";

const OfferId = () => {
  const [data, setData] = useState();

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${config.apiUrl}/api/offers/${id}`
        );

        if (!response.data) {
          throw new Error("No data received");
        }

        setData(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data)
  let textParts = data.text.split("<br />");

  return (
    <>
      <NavBar />
      <section className="offerPage-wrapper">
        <div className="offerPage-header">
          <img src={data.headerimg.src} alt={data.headerimg.alt} />
          <h1 className="">{data.title}</h1>
          {textParts.map((tpart, i) => (
            <p key={i} className="offerPage-text">
              {tpart}
            </p>
          ))}
        </div>
        {data.additions && (
          <div className="offerPage-additions">
            {data.additions.map((e, i) => {
              if (e.type === "img-text") {
                return (
                  <ImgText
                    title={e.title}
                    text={e.text}
                    img={e.img}
                    reverse={!(i % 2)}
                  />
                );
              } else return <></>;
            })}
          </div>
        )}
        <div
          className="offerPage-contact"
          style={{ backgroundColor: !data.additions && "#FFF" }}
        >
          <h2>
            Skontaktuj się z <br /> nami w sprawie uzyskania oferty
          </h2>
          <p>
            Skontaktuj się z nami, abyśmy mogli przygotować dla Ciebie
            indywidualną ofertę. Jesteśmy dostępni przez telefon, e-mail lub
            osobiście, gotowi odpowiedzieć na Twoje pytania i omówić szczegóły.
          </p>
          <a href="/contact">Napisz do nas</a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OfferId;
