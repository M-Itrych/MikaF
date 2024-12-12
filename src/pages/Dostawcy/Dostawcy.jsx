import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Dostawcy.css"

const Dostawcy = () => {
    const dostawcy = [
        { url: "1.webp", link: "http://www.aco.pl" },
        { url: "2.webp", link: "http://www.afriso.pl/" },
        { url: "3.webp", link: "http://www.agaflex.pl" },
        { url: "4.webp", link: "http://www.agam.com.pl/" },
        { url: "5.webp", link: "http://www.armacell.com/pl" },
        { url: "6.webp", link: "http://www.grupa-armatura.com" },
        { url: "7.webp", link: "https://www.atagor.com" },
        { url: "8.webp", link: "http://www.beretta.pl" },
        { url: "9.webp", link: "http://bmeters.pl/" },
        { url: "10.webp", link: "http://www.bohamet-armatura.pl" },
        { url: "11.webp", link: "https://www.caleffi.com/poland/pl" },
        { url: "12.webp", link: "http://www.comap.pl/pl" },
        { url: "13.webp", link: "http://deante.pl/" },
        { url: "14.webp", link: "https://www.dksystem.pl/" },
        { url: "15.webp", link: "http://ecomess.pl/" },
        { url: "16.webp", link: "http://www.esbe.eu/pl/pl-pl" },
        { url: "17.webp", link: "http://www.euroster.pl/" },
        { url: "18.webp", link: "https://www.ferro.pl/" },
        { url: "19.webp", link: "http://www.fireangel-polska.pl" },
        { url: "20.webp", link: "http://www.fitting.pl/" },
        { url: "21.webp", link: "https://flamcogroup.com/pl" },
        { url: "22.webp", link: "http://www.fondital.com/pl/pl/" },
        { url: "23.webp", link: "http://www.franke.com/countries/pl/pl/home.html" },
        { url: "24.webp", link: "http://galmet.com.pl/" },
        { url: "25.webp", link: "http://www.giacomini.com" },
        { url: "26.webp", link: "http://www.gorgiel.com.pl/" },
        { url: "27.webp", link: "http://www.hel-wita.com.pl/" },
        { url: "28.webp", link: "http://www.husty.pl" },
        { url: "29.webp", link: "http://hutmen.pl/" },
        { url: "30.webp", link: "http://www.ibpgroup.com.pl/" },
        { url: "31.webp", link: "http://www.immergas.com.pl/" },
        { url: "32.webp", link: "http://www.instalprojekt.com.pl/" },
        { url: "33.webp", link: "http://www.invena.pl/pl" },
        { url: "34.webp", link: "http://joule-pl.pl/" },
        { url: "35.webp", link: "http://www.kamen.com.pl/" },
        { url: "36.webp", link: "http://www.kanplast.pl/" },
        { url: "37.webp", link: "http://www.kflex.com" },
        { url: "38.webp", link: "http://klechniowska.com/" },
        { url: "39.webp", link: "https://www.korado.pl/" },
        { url: "40.webp", link: "http://www.kotar.pl/pl/kotar.html" },
        { url: "41.webp", link: "http://www.heating-polska.pl" },
        { url: "42.webp", link: "http://kuchinox.pl/" },
        { url: "43.webp", link: "http://mcalpine.pl/" },
        { url: "44.webp", link: "http://www.mkzary.pl/" },
        { url: "45.webp", link: "http://www.newheat.pl" },
        { url: "46.webp", link: "http://eeodlewnia.pl/" },
        { url: "47.webp", link: "https://www.ottone.pl/" },
        { url: "48.webp", link: "http://perfexim.pl/" },
        { url: "49.webp", link: "http://www.pipelife.com/pl/" },
        { url: "50.webp", link: "http://www.prandelli.pl/" },
        { url: "51.webp", link: "http://www.qualt.pl" },
        { url: "52.webp", link: "http://rawiplast.pl/" },
        { url: "53.webp", link: "http://www.ricomenergy.pl/" },
        { url: "54.webp", link: "http://www.saniteisenberg.pl/" },
        { url: "55.webp", link: "http://www.sanplast.pl/" },
        { url: "56.webp", link: "http://www.santech.com.pl/" },
        { url: "57.webp", link: "http://www.schedpol.pl" },
        { url: "58.webp", link: "http://schlosser.com.pl/pl/" },
        { url: "59.webp", link: "http://www.sigmali.pl/" },
        { url: "60.webp", link: "http://www.sonniger.com/" },
        { url: "61.webp", link: "http://www.spiroflex.pl/" },
        { url: "62.webp", link: "http://www.stalmark.pl" },
        { url: "63.webp", link: "http://www.stiebel-eltron.pl" },
        { url: "64.webp", link: "http://techmet.pl/" },
        { url: "65.webp", link: "http://www.teklakotly.pl/" },
        { url: "66.webp", link: "http://www.termet.com.pl/" },
        { url: "67.webp", link: "https://thermaflex.com/pl" },
        { url: "68.webp", link: "http://www.tiasystem.pl/" },
        { url: "69.webp", link: "http://www.topvac.pl" },
        { url: "70.webp", link: "http://www.unipak.pl/" },
        { url: "71.webp", link: "https://www.ustm.pl/" },
        { url: "72.webp", link: "http://www.valsir.pl/" },
        { url: "73.webp", link: "http://valvex.com/" },
        { url: "74.webp", link: "http://vesbopoland.pl/" },
        { url: "75.webp", link: "http://walraven.com/pl/" },
        { url: "76.webp", link: "http://www.wilo.pl/" },
        { url: "77.webp", link: "http://winkiel.pl" },
        { url: "78.webp", link: "http://www.wolf-polska.pl/" },
    ]
    // src={process.env.PUBLIC_URL + `dostawcy/${e.url}`}
    return (
        <>
        <NavBar />
        <section className="dostawcy-wrapper">
            <h1>Nasi Dostawcy</h1>
            <div className="dostawcy-grid">
                {
                    dostawcy.map((e, i) => (
                        <a key={i} href={e.link} className="dostawcy-grid-item" style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/dostawcy/${e.url})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            padding: "1rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "8rem",
                            textDecoration: "none", 
                          }}>
                             
                        </a>
                    ))
                }
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Dostawcy;