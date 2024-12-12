import HomeOfferTile from "../../components/Sections/HomeOfferTile";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import home_welcome from "../../assets/images/home-welcome.png";
import "./Home.css";
import NewsTile from "../../components/Sections/NewsTile";
import Contact from "../../components/Contact/Contact";
import SliderDostawcy from "../../components/Utils/SliderDostawcy";
import { useState, useEffect } from "react";
import axios from "axios";
import config from '../../config.json'
import React from "react";

const Home = () => {
  const [offers, setOffers] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offersResponse = await axios.get(
          `${config.apiUrl}/api/offers`
        );
        const newsResponse = await axios.get(
          `${config.apiUrl}/api/news?i=3`
        );

        if (!offersResponse.data || !newsResponse.data) {
          throw new Error("Data not found");
        }

        setOffers(offersResponse.data);
        setNews(newsResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <main className="home-container">
        <section className="home-welcome">
          <div className="home-welcome-left">
            <div className="home-welcome-text">
              <h1>Firma Mi-Ka działa na rynku od 2008 roku.</h1>
              <p>
                Od chwili naszego powstania, firma Mi-Ka z pasją i
                zaangażowaniem zajmuje się kompleksową obsługą w dziedzinie
                systemów grzewczych, serwisu technicznego oraz nadzoru
                budowlanego. Nasza misja to dostarczanie innowacyjnych rozwiązań
                grzewczych, profesjonalnego serwisu oraz kompleksowego wsparcia
                w realizacji projektów budowlanych.
              </p>
            </div>
            <a href="/Offer">Poznaj ofertę</a>
          </div>
          <img src={home_welcome} alt="brand-color-pipes"></img>
        </section>
        <section className="home-info">
          <div className="home-info-content">
            <div className="home-info-left">
              <img
                src="https://dokariery.pl/documents/20184/418923/hydraulik_1160.png/dbd256e5-6488-422b-a511-420d8ddb439d?t=1615800068669"
                alt="mika-img-hydraulik"
              />
            </div>
            <div className="home-info-right">
              <h1>
                Twój partner w hydraulice i projektach budowlanych
              </h1>
              <p>
                Z wieloletnim doświadczeniem na rynku, zdobyliśmy zaufanie klientów poprzez solidność, wysoką jakość usług oraz terminowe wykonanie powierzonych nam zadań. Nasza firma to zespół wysoko wykwalifikowanych specjalistów, którzy nieustannie doskonalą swoje umiejętności, aby sprostać najwyższym standardom branżowym. Dodatkowo, oferujemy kompleksowe usługi w zakresie projektów i nadzoru budowlanego, zapewniając pełne wsparcie na każdym etapie realizacji inwestycji. <br />
              </p>
            </div>
          </div>
        </section>
        <section className="home-offers">
          <div className="home-offers-content">
            <div className="home-offers-text">
              <h2>
                Nasza Bogata Oferta
              </h2>
              <p>
                Odkryj szeroki zakres naszych usług w hydraulice oraz projektach i nadzorach budowlanych.
              </p>
            </div>
            <div className="home-offers-tiles">
              {offers &&
                offers.map((e) => (
                  <HomeOfferTile
                    title={e.title}
                    text={e.text}
                    href={"/offer/" + e._id}
                  />
                ))}
            </div>
          </div>
        </section>
        <section className="home-news">
          <div className="home-news-header">
            <h2>Aktualności</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Turpis tellus gravida
              habitasse velit mi vitae. Risus varius egestas scelerisque risus.
            </p>
          </div>
          <div className="home-news-tiles">
            {news &&
              news.map((e) => (
                <NewsTile
                  date={e.date}
                  title={e.title}
                  desc={e.desc}
                  href={"/news/" + e._id}
                  img={e.img}
                />
              ))}
          </div>
          <a href="/News">Przejdź do archiwum</a>
        </section>
      </main>
      <SliderDostawcy />
      <Contact bg={true} />
      <Footer />
    </>
  );
};

export default Home;
