import axios from "axios";
import config from "../../config.json";

const AdminNews = ({img, date, title, desc, id}) => {
  const deleteNews = async () => {
    if(window.confirm("Jesteś pewny/a? Ta czynność jest nie odwracalna!")){
    const authKey = sessionStorage.getItem('token');
    try {
      const response = await axios.post(
        `${config.apiUrl}/api/delete/news`,
        {
          'id': id
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authKey
          }
        }
      );

      if (response.status === 200) {
        alert("Aktualność usunięta poprawnie!")
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  }}
  return (
    <div className="admin-news-tile">
      <button className="admin-news-tile-delete" onClick={deleteNews}>Usuń Aktualność</button>
      <img src={img.url} alt={img.alt}/>
      <p className="admin-news-tile-date">{date}</p>
      <h4 className="admin-news-tile-title">{title}</h4>
      <p className="admin-news-tile-desc">{desc}</p>
      <a className="admin-news-tile-btn" href={"/Admin/dashboard/modify_news/"+id}>Modyfikuj Aktualność</a>
    </div>
  )
}

export default AdminNews;