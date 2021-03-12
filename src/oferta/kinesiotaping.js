import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../scss/offer.scss';

const Kinesiotaping = () =>{
    return(
        <>
        <div className = "divOffer">
        <h1 className = "offerTitle">KINESIOTAPING</h1>
    <p className = "offerParagraph">Metoda kinesiotapingu została opracowana w 1973 roku przez
    lekarza japońskiego pochodzenia Kenzo Kase. 
    W kosmetologii <span>kinesiotaping</span> zaczęto stosować stosunkowo niedawno 
    i ta metoda zyskuje coraz większą popularność na całym świecie zarówno 
    wśród kobiet, jak i mężczyzn, ze względu na wysoką skuteczność i niemal 
    całkowity brak skutków ubocznych.
    <br></br><br></br>Taśmy do tapingu są wyjątkowym sposobem na schorzenia związane z układem 
    limfatycznym, wpływają też na mięśnie oraz na stawy, łagodząc dolegliwości 
    związane z obrzękami i bólami.
    Naklejona i aktywna aplikacja <span>powoduje uniesienie skóry</span>,  
    co zwiększa przestrzeń pomiędzy skórą, a mięśniami i osłaniającą je powięzią. 
    Wpływa to bardzo pozytywnie na  pracę układu limfatycznego. 
    <span> Limfa zaczyna krążyć szybciej i sprawniej </span> – zachodzi naturalny drenaż limfatyczny, 
    który wpływa na likwidację obrzęku oraz przyspieszenie regeneracji tkanek. 
    <br></br><br></br>Człowiek prawie nie czuje taśm na skórze. Ruchy ciała nie są ograniczone. 
    Ponadto taśma ma <span>trwałe działanie lecznicze,</span> stymulując jedynie własne zasoby organizmu. 
    W połączeniu z naturalną aktywnością ruchową taśma kinesio rozciąga i unosi skórę, 
    wykonując naturalny masaż.
    Ze względu na wyjątkowe właściwości taśmy i wysoką elastyczność są bardzo 
    zbliżone do elastyczności naszej skóry. 
</p>

<h3 className = "secondTitleOffer">Przy prawidłowym nałożeniu taśmy wpływają na:</h3>


<li>poprawę metabolizmu tkanek</li>
<li>zminimalizowanie zespołów bólowych</li>
<li>normalizowanie napięć mięśniowych</li>
<li>mają pozytywny wpływ na narządy wewnętrzne</li>
<li>poprawiają przepływu limfy i krwi</li>
<li>przyspieszają regenerację tkanek</li>


</div>
        </>
    )
}


export default Kinesiotaping;