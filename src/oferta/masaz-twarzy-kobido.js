import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../scss/offer.scss';

const Massage = () =>{
    return(
        <>
        <div className = "divOffer">
        <h1 className = "offerTitle">MASAŻ TWARZY KOBIDO</h1>

        <p className = "offerParagraph">Znany jako &quot; <span>niechirurgiczny lifting twarzy”</span> - który działa na głębszych warstwach skóry i
        mięśni, uaktywnia nerwy twarzy, a tym samym zwiększa przepływ energii. To niezwykła
        sztuka masażu twarzy zawierająca wiele skomplikowanych technik manualnych, które dają
        spektakularne efekty. Około godzinna sesja masażu, zawiera w sobie masaż tkanek
        głębokich, drenaż limfatyczny, pracę na punktach akupresurowych oraz elementy masażu
        relaksującego niwelującego napięcia mięśniowe.
        Może być wprowadzony jako <span>jednorazowy „masaż bankietowy” </span>ze spektakularnym efektem
        po pierwszej sesji. <br></br><br></br>Drugą opcją jest <span>pełna trzymiesięczna kuracja Kobido</span>, która zaczyna się
        dwoma masażami w tygodniu, po jedną wizytę w tygodniu, kończąc na jednej wizycie w
        przeciągu dwóch tygodni. Możemy też ustalić <span>indywidualny program.</span>
        Oprócz efektu wizualnego masaż Kobido to <span>rytuał Spa </span>składający się z etapu głębokiego
        masażu relaksującego nasz umysł i ciało, drenażu limfatycznego, liftingu i akupresury twarzy. </p>


<h3 className = "secondTitleOffer">Wizualne efekty masażu  Kobido</h3>


<li>zniwelowanie napięć mięśniowych, które powodują zmarszczki mimiczne</li>
<li>zapobieganie bądź zmniejszenie efektów starzenia się naszej skóry</li>
<li>odzyskanie młodej twarzy  poprzez głęboką pracę na strukturach mięśni</li>
<li>stymulowanie metabolizmu komórkowego, co prowadzi do szybszej regeneracji skóry</li>
<li>oczyszczenie skóry z toksyn, zanieczyszczeń i martwych komórek skóry</li>
<li>zniwelowanie nadmiernych napięć w okolicach szyi, klatki piersiowej i owalu twarzy</li>
<li>Stymulowanie produkcji składników skóry – kolagenu i elastyny</li>


<h3 className = "secondTitleOffer">Zdrowotne efekty masażu Kobido:</h3>

<li>regulowanie bilansu energetyczny całego ciała</li>
<li>walka z stresem</li>
<li>zapewnienie pełnego relaksu i odprężenia</li>
<li>zmniejszenie efekty bruksizmu</li>
<li>łagodzenie bólu głowy</li>
<li>unikane sztywności twarzy</li>
<li>zmniejszenie problemów układu pokarmowego</li>


<h3 className = "secondTitleOffer">Przeciwwskazania do wykonywania masażu Kobido</h3>


<li>stany zapalne skóry</li>
<li>rany i otarcia</li>
<li>nieuregulowane nadciśnienie tętnicze</li>
<li>podwyższona temperatura ciała</li>
<li>stany ropne okołozębowe</li>
<li>trądzik różowaty w stanie zaostrzenia</li>
<li>liszaje</li>
<li>przerwanie naskórka</li>
<li>ostre stany zapalne organizmu, skóry</li>

<li>ekstrakcje zębowe, stany ropne okołozębowe – po zaniku stanu zapalnego</li>
<li>opryszczka, czyli wirusowe pojawienie się zmian (czasami również ropnych) w okolicach
ust</li>
<li>trądzik (krostkowy, różowaty w fazie aktywnej, ropny), czyli w skrócie nadmierna praca
gruczołów łojowych, która skutkuje bolesnymi wybrzuszeniami na skórze</li>
<li>inne stany zapalne skóry (zakaźne oraz alergiczne), które poprzez masaż twarzy mogą się
pogłębiać lub odnieść szkody mechaniczne</li>
<li>stany zapalne (i ropne) jamy ustnej, czyli poprzez bakterie i wirusy</li>
<li>odstępy czasowe po wykonaniu botoksu, kwasu hialuronowego – 4 tygodnie, po
wykonaniu nici PDO 6 tygodni, po mezoterapii 3 dni.</li>

 </div>
        </>
    )
}

export default Massage;