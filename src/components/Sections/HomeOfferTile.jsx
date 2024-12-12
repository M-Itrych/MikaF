const HomeOfferTile = ({ title, text, href }) => (
  <div className="home-offer-tile">
    <h4>{title}</h4>
    <p>{text}</p>
    <a href={href}>Poznaj Ofertę</a>
  </div>
);

export default HomeOfferTile;
