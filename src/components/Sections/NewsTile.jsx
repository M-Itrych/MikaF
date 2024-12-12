import "./NewsTile.css";
import React from "react";

const NewsTile = ({img, date, title, desc, href}) => (
    <div className="news-tile">
        <img src={img.url} alt={img.alt} />
        <p className="news-tile-date">{date}</p>
        <h4 className="news-tile-title">{title}</h4>
        <p className="news-tile-desc">{desc}</p>
        <a className="news-tile-btn" href={href}>Przeczytaj artykuł</a>
    </div>
)

export default NewsTile;