import AdminGoTo from "./AdminGoTo";
import axios from "axios";
import config from '../../config.json'
import {useEffect, useState} from "react";
import "./AdminModify.css"
import AdminNews from "../../components/Admin/AdminNews";
import React from "react";

const AdminModify = () => {
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

  console.log(data)

  return (
    <div className="admin-modify">
      <h2>Modyfikacja Aktualności</h2>
      <AdminGoTo path="/admin/dashboard/"/>
      <div className="admin-modify-news">
        {data &&
          data.map((e, index) => (
            <>
              <AdminNews
                date={e.date}
                title={e.title}
                desc={e.desc}
                id={e._id}
                img={e.img}
              />
            </>
          ))
        }
      </div>
    </div>
  )
}

export default AdminModify;