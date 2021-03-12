import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/health.scss';


function Health(){
    return(
      <>
      <div className = "health-page">
      <h1 className = 'sitetitle'>Zdrowe i naturalnie odmładzanie</h1>

      <section className = "healt-intro">
        <h3>Żyjemy w czasach „kultu ciała”. 
          Wciąż widzimy piękne twarze na bilbordach i mediach społecznościowych, 
          zastanawiamy się, jak osiągnąć idealny wygląd. 
          Kupujemy coraz więcej drogich kosmetyków, które mają spowodować, 
          że skóra będzie wyglądać młodo i promiennie, korzystamy z wymyślnych zabiegów 
          w salonach kosmetycznych, z dobrodziejstw medycyny estetycznej i zastanawiamy 
          się co dalej ….</h3>
          <p>Coraz częściej szukamy naturalnych metod odmładzania, 
            stosując naturalne kosmetyki, stymulowanie twarzy poprzez ugniatanie, 
            uciskanie, masowanie, dbamy o swoją skórę od środka, poprzez stosowanie 
            prawidłowej diety zawierającej odpowiednie składniki. O tym jest dzisiaj głośno, 
            ale jeszcze nie wszędzie…</p>
      </section>

      <section className = "health-part1">
        <h3>Zacznijmy od słodkości </h3>
        <p>Dostępne badania potwierdzają niekorzystny wpływ cukru na cerę, 
          związany z przyspieszonym procesem starzenia się skóry, 
          pogarszaniem struktury naskórka i zmniejszeniem naturalnych 
          zdolności do złuszczania, co z kolei spowalnia regenerację 
          poziomu witamin A, E, C, B₆, B₁₂, kwasu foliowego, wapnia, magnezu, 
          żelaza czy cynku. </p>
        
        <p>Pod wpływem utrzymującego się wysokiego poziomu cukru występują 
          zmiany w strukturze kolagenu. Włókna kolagenowe, będące głównym budulcem skóry, 
          ulegają pogrubieniu, co zmniejsza ich elastyczność.</p>

        <p>Dieta, w której królują produkty bogate w cukier i o wysokim 
          indeksie glikemicznym bezpośrednio przyczynia się do częstszego występowania 
          zmian skórnych i wzmożonej produkcji sebum na skórze twarzy i głowy.</p>

        <h4 className = "health-border">Szacuje się, że za 40-50% starzenia się skóry, 
          głównie utratę jędrności i powstawanie zmarszczek i przebarwień, odpowiadają cukry.
        </h4>

        <p>Jesteśmy przyzwyczajeni do niezdrowego jedzenia, 
          napakowanego cukrem i różnego rodzaju dodatkami, 
          które pobudzają nasze kubki smakowe i cały czas do tego sięgamy. 
          Jesteśmy uzależnieni od jedzenia, siedzenia przed telewizorem. Zmieńmy to.</p>

          <p>Unikajmy cukrów w nadmiarze, łatwo można go zastąpić innymi produktami: 
            owoce, soki wyciskane samodzielnie, koktajle owocowe… 
            Nie dajmy się jednak zwieść pozornie zdrowym produktom, typu płatki śniadaniowe „fit”, 
            batony zbożowe i białkowe, gotowe owsianki, owocowe jogurty czy soki. W takich „zdrowych” 
            produktach spożywczych znajduje się mnóstwo ukrytych cukrów.</p>
      </section>

        <section className = "health-part2">
          <h3>Zbilansowana dieta ma wielki wpływ nie tylko na wygląd Twojej twarzy.</h3>
          <p>Na przełomie 2015 i 2016 roku przeprowadzono badania w Domu Seniora. 
            W badaniu wzięło udział 90 zdrowych kobiet w wieku od 45 do 94 lat. 
            Stwierdzono, że kobiety pijące zbyt mało płynów mają szersze zmarszczki, 
            więcej przebarwień skóry i nieco większe pory. 
            Codzienne picie kawy zwiększa wielkość porów i zmarszczek, 
            a częste spożywanie mocniejszych alkoholi zmniejsza natłuszczenie skóry. 
            Nadużywanie cukrów może pogarszać strukturę skóry i zmniejszać złuszczanie, 
            a nadużywanie soli powiększa zmarszczki, naczynka, pory i wielkości przebarwień. 
            Codzienne spożywanie tłuszczów zwierzęcych zwiększa skłonność do pojawiania 
            się naczynek. Codzienne spożywanie owoców wpływa na zmniejszenie zmarszczek, 
            a jedzenie warzyw spowalnia złuszczanie. Dieta ogólnie oceniona jako zła 
            pogarsza cztery parametry skóry: pory, zmarszczki, przebarwienia i nawilżenie 
            strefy U. </p>
        <p>
        Czy często nie chce  gotować i sięgasz po półprodukty? 
        Przetworzona żywność zawiera w sobie cukier, sól, konserwanty i niezdrowe tłuszcze, 
        które spożywane w nadmiarze mogą prowadzić do uszkodzenia komórek Twojego ciała. 
        Kiedy nie masz czasu na długie stanie w kuchni, wprowadź do swojej diety dużo 
        owoców i warzyw. Są proste w przygotowaniu, czasem nie wymagają gotowania, 
        a dzięki zawartym w nich przeciwutleniaczom chronią organizm i pozwalają 
        utrzymać skórę w dobrej kondycji, chronią przed działaniem wolnych rodników, 
        które jak wiadomo mają negatywny wpływ na stan skóry. Dlatego jeśli tylko masz 
        ochotę na przekąskę, sięgaj po surowe warzywa i owoce. Dostarczają organizmowi
        wiele naturalnych witamin. Naturalne witaminy zawierają antyoksydanty, 
        które pozwalają na usunięcie z organizmu obumarłych komórek i produktów 
        przemiany materii, oczyszczając w ten sposób ciało i dodając mu energii i witalności!
        </p>
        </section>

        <h2>Dbajmy o siebie od zewnątrz, tak samo jak dbamy o siebie od wewnątrz.</h2>
        


        <section className = "bibliography">
        <h5>Bibliografia</h5>
        <ul>
          <li>Placek W.: Dieta w chorobach skóry. Wydawnictwo Czelej, Lublin 2015.</li>
          <li>Artykuł naukowy „Kosmetologia estetyczna” 1/2017</li>
          <li>Kunachowicz H., Nadolna I., Przygoda B., Iwanow K.: Tabele składu i wartości odżywczej żywności. Wydawnictwo Lekarskie PZWL, Warszawa 2017.</li>
          <li>A. Juncewicz, Mariusz Budrowski Surowe zdrowie. </li>
          <li>Bojarowicz H., Płowiec A., Wpływ witaminy A na kondycję skóry. </li>
        </ul>

        </section>
      </div>

     

      </>
    )
  }

  export default Health;