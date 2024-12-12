import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import NewsTile from "../../components/Sections/NewsTile";
import "./News.css";
import { useEffect, useState } from "react";
import axios from "axios";
import config from '../../config.json'
import React from "react";

const News = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/api/news`);

        if (!response.data) {
          throw new Error("No data received");
        }

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
      <section className="news-wrapper">
        <div className="news-header">
          <h2>Aktualności</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Turpis tellus gravida
            habitasse velit mi vitae. Risus varius egestas scelerisque risus.
          </p>
        </div>
        <div className="news-tiles">
          {data &&
            data.map((e) => (
              <NewsTile
                date={e.date}
                title={e.title}
                desc={e.desc}
                href={"/news/" + e._id}
                img={e.img}
              />
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default News;
