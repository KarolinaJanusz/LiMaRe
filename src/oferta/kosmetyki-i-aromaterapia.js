import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../scss/offer.scss';

const Cosmetics = () =>{
    return(
        <>
        <div className = "divOffer">
        <h1 className = "offerTitle">KOSMETYKI I AROMATERAPIA JAKO ZAPROSZENIE DO RYTUAŁÓW NA TWARZ</h1>
        <p className = "offerParagraph">W zabiegach postawiłam na <span>marki kosmetyków bliskie natury </span>, 
        wykorzystujące moc aromaterapii, stosowane przy technikach manualnych. 
        Wykonując japoński masaż twarzy Kobido, którego mistrzem i nauczycielem 
        jest  Tomasz Tomasik , wykorzystuję kosmetyki proponowane przez 
        Akademię Spa  - najbardziej znaną szkołę masażu, komponowane przez 
        wieloletnich praktyków i doskonałych trenerów. Przyznam szczerze, 
        że zachwytom klientek i klientów nie ma końca. <span>Masaż wykonuję z 
        sercem i zaangażowaniem.</span> Poza zauważalnymi efektami kosmetycznymi, 
        przenosi w świat błogiego relaksu, którego wszyscy obecnie tak bardzo potrzebujemy. 
        Jego moc polega na tym, że dzięki masażowi każdy, nawet najprostszy zabieg kosmetyczny, 
        zmienia się w prawdziwy rytuał.<br></br>
        <p className = "offerParagraph"></p>
        Aromaterapia zajmuje szczególne miejsce w filozofii gabinetu LiMaRe, 
        gdyż z definicji jest metodą holistyczną, a naturalne olejki eteryczne 
        oddziałują zarówno na ciało, jak i ducha. 
        <span> Aromateriapię z naturalnymi olejkami 
        eterycznymi wykorzystuję na kilka sposobów:</span> jako ogólne nawonienie 
        pomieszczenia przy użyciu dyfuzora, jako świece zapachowe, do inhalacji, 
        okładów na skórę, w zabiegu jako składniki preperatów. 
        Podczas ich stosowania mogę połączyć pielęgnację skóry z <span>oddziaływaniem na psychikę. </span>
         Przemyślany dobór olejków i ich stężenia pozwala mi na uzyskanie 
        optymalnego efektu zabiegu oraz osiągnięcie harmonii emocjonalnej, 
        co przekłada się na Państwa satysfakcję. 
        </p>
        </div>
        </>
    )
}

export default Cosmetics;