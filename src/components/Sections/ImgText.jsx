import "./ImgText.css"

const ImgText = ({title, text, img, reverse}) => (
    <div className="offerPage-imgtext" style={{flexDirection: (reverse ? "row-reverse" : "row")}}>
        <img src={img.src} alt={img.alt} />
        <div className="offerPage-imgtext-text">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
)

export default ImgText;