import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./NewsId.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from '../../config.json'

const NewsId = () => {
  const [data, setData] = useState();

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${config.apiUrl}/api/news/${id}`
        );

        if (!response.data) {
          throw new Error("No data received");
        }

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  let textParts = data.text.split("\n");
  console.log(textParts);

  return (
    <>
      <NavBar />
      <section className="news-element-section">
        <div className="news-element-card">
          <img src={data.img.url} alt={data.img.alt} />
          <p className="news-element-date">{data.date}</p>
          <h2 className="news-element-header">{data.title}</h2>
          <p className="news-element-text">
            {textParts.map((e) => (
              <>
                <p>{e}</p>
                <br />
              </>
            ))}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NewsId;
