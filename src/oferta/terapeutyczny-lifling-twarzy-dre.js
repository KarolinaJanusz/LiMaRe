import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../scss/offer.scss';

const Lifting= () =>{
    return(
        <>
        <div className = "divOffer">
        <h1 className = "offerTitle">TERAPEUTYCZNY LIFTING TWARZY DRE</h1>
        <p className = "offerParagraph">Kompozycja technik manualnej stymulacji twarzy, szyi i dekoldu, które wywodzą się z
            drepoterapii (wielowarstwowej terapii twarzy), skierowana ku poprawie wyglądu twarzy i jej
            odnowie biologicznej. Zabieg polega na <span>stymulowaniu wszystkich warstw twarzy</span> w celu
            poprawy jej ogólnego wyglądu, zachowania i wywołania efektu liftingu tkanek. <br></br><br></br><span>Lifting DRE</span> to
            „dopieszczenie” naturalnego środowiska funkcjonowania twarzy - skóry, mięśni, powięzi,
            kości oraz przebiegających pomiędzy nimi nerwów, naczyń krwionośnych i limfatycznych
            oraz stworzenie warunków do tego, aby procesy metaboliczne przebiegały bez zarzutu,
            mikrokrążenie krwi było swobodne i zapewniało n każdym poziomie optymalny przebieg
            procesów oczyszczania i detoksykacji, a także uwalniania napięć.
            <span> <br></br>Techniki liftingu DRE oparte są na:</span> refleksologii manualnej twarzy, Yin miofascioplastyce,
            Yang miostymulacji, limfofrenażu manulanym i biodynamicznej osteoplastyce głowy. </p>

<h3 className = "secondTitleOffer">Efekty wizualne</h3>

    <li>poprawienie wyglądu twarzy, w szczególności efekt twarzy wypoczętej i promiennej</li>
    <li>poprawa owalu twarzy - przywrócenie młodszego wyglądu</li>
    <li>redukcja zastojów wewnątrz tkankowych - poprawa mikrokrążenia komórkowego</li>
    <li>odbudowanie rusztowania mięśniowego, wzmocnienie wszystkich warstw twarzy</li>
    <li>spłycenie zmarszczek</li>
    <li>poprawa, rozjaśnienie kolorytu skóry</li>


<h3 className = "secondTitleOffer">Działanie ogólne na organizm:</h3>

    <li>uruchomienie procesów regulacji i odnowy biologicznej organizmu</li>
    <li>poprawa mikrokrążenia krwi i limfy, przywrócenie wewnętrznej równowagi</li>
    <li>redukcja poziomu adrenaliny i kortyzolu oraz zwiększona produkcja DHEA „hormonu
        młodości”, ogólna poprawa samopoczucia, regeneracja psychiczna</li>
    <li>wywołanie długotrwałych śladów w pamięci komórek – długo utrzymujące się efekty
        psychofizyczne</li>
    


<h3 className = "secondTitleOffer">Przeciwwskazania do liftingu terapeutycznego DRE:</h3>

    <li>stan podgorączkowy i gorączka</li>
    <li>objawy infekcji górnych dróg oddechowych (katar, kasze, drapanie w gardle, ból
        gardła/migdałków)</li>
    <li>aktywna migrena</li>
    <li>ból uch/uszu i zębów</li>

</div>
        </>
    )
}

export default Lifting;