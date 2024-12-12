import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, Fragment } from "react";
import axios from "axios";
import config from "../../config.json";
import AdminGoTo from "./AdminGoTo";

const AdminModifyNews = () => {
  const [data, setData] = useState();
  const [initialData, setInitialData] = useState();
  const [isEditingText, setIsEditingText] = useState(false);
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [isEditingImg, setIsEditingImg] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [textParts, setTextParts] = useState([]);
  const textareaRef = useRef(null);

  const authKey = sessionStorage.getItem("token");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/api/news/${id}`);

        if (!response.data) {
          throw new Error("No data received");
        }

        setData(response.data);
        setInitialData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (data) {
      const parts = data.text.split("\n");
      setTextParts(parts);
    }
  }, [data]);

  const handleEditClick = () => {
    setIsEditingText(true);
  };

  const handleEditHeaderClick = () => {
    setIsEditingHeader(true);
  };

  const handleEditImgClick = () => {
    setIsEditingImg(true);
  };

  const handleEditDescriptionClick = () => {
    setIsEditingDescription(true);
  };

  const handleTextareaChange = (event) => {
    setTextParts(event.target.value.split("\n"));
  };

  const handleHeaderChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const handleUrlChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      img: {
        ...prevState.img,
        url: event.target.value,
      },
    }));
  };

  const handleAltChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      img: {
        ...prevState.img,
        alt: event.target.value,
      },
    }));
  };

  const handleDescriptionChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      desc: event.target.value,
    }));
  };

  const handleTextSave = () => {
    const updatedText = textParts.join("\n");
    setData((prevData) => ({
      ...prevData,
      text: updatedText,
    }));
    setIsEditingText(false);
  };

  const handleHeaderSave = () => {
    setIsEditingHeader(false);
  };

  const handleImgSave = () => {
    setIsEditingImg(false);
  };

  const handleDescriptionSave = () => {
    setIsEditingDescription(false);
  };

  useEffect(() => {
    if (isEditingText && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [isEditingText]);

  const isDataModified = () => {
    if (!initialData) return false;
    return JSON.stringify(initialData) !== JSON.stringify(data);
  };

  const sendData = async () => {
    try {
      if (!isDataModified()) {
        return;
      }
      const response = await axios.post(
        `${config.apiUrl}/api/update/news`,
        {
          id: data._id,
          title: data.title,
          description: data.description,
          url: data.img.url,
          alt: data.img.alt,
          text: data.text,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authKey,
          },
        }
      );

      alert("Zaktualizowano!");
      setInitialData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="news-element-section">
      <AdminGoTo path="/admin/dashboard/modify_news/" />
      <div className="news-element-card">
        {isEditingImg ? (
          <>
            <input
              type="text"
              value={data.img.url}
              style={{ width: "100%" }}
              onChange={handleUrlChange}
              className="admin-modify-input"
            />

            <input
              type="text"
              value={data.img.alt}
              style={{ width: "100%" }}
              onChange={handleAltChange}
              className="admin-modify-input"
            />
          </>
        ) : (
          <img
            src={data.img.url}
            alt={data.img.alt}
            onClick={handleEditImgClick}
          />
        )}
        {isEditingImg && <button onClick={handleImgSave}>Save</button>}
        <p className="news-element-date">{data.date}</p>
        {isEditingHeader ? (
          <input
            type="text"
            value={data.title}
            style={{ width: "100%" }}
            onChange={handleHeaderChange}
            className="admin-modify-input"
          />
        ) : (
          <h2 className="news-element-header" onClick={handleEditHeaderClick}>
            {data.title}
          </h2>
        )}
        {isEditingHeader && <button onClick={handleHeaderSave}>Save</button>}
        {isEditingDescription ? (
          <input
            type="text"
            value={data.desc}
            style={{ width: "100%" }}
            onChange={handleDescriptionChange}
            className="admin-modify-input"
          />
        ) : (
          <p className="news-element-header" onClick={handleEditDescriptionClick}>
            Opis: {data.desc}
          </p>
        )}
        {isEditingDescription && <button onClick={handleDescriptionSave}>Save</button>}
        {isEditingText ? (
          <textarea
            className="news-element-text"
            style={{ resize: "none", alignSelf: "stretch" }}
            onChange={handleTextareaChange}
            ref={textareaRef}
            value={textParts.join("\n")}
          />
        ) : (
          <p
            className="news-element-text"
            style={{ resize: "none" }}
            onClick={handleEditClick}
          >
            {textParts.map((e, index) => (
              <Fragment key={index}>
                <span>{e}</span>
                <br />
              </Fragment>
            ))}
          </p>
        )}
        {isEditingText && <button onClick={handleTextSave}> Save </button>}
        {isDataModified() && <button onClick={sendData}>Send Changes</button>}
      </div>
    </section>
  );
};

export default AdminModifyNews;
