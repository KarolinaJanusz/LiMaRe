import React from 'react';


function Price(){
    return(
      <>
        <h1 className = 'sitetitle'>cennik</h1>

        <table>
          <thead>
            <tr className = "backgroundRaw2">
            <th className = "tableTitle">Zabieg</th>
            <th>Cena regularna</th>
            <th>Cena promocyjna*</th>
            <th>Czas trwania</th>
            </tr>
          </thead>

          <tbody>
            <tr className = "backgroundRaw">
              <th>Lifting terapeutyczny DRE</th>
              <td>220,00</td>
              <td>150,00</td>
              <td>60 min</td>
            </tr>

            <tr className = "backgroundRaw2">
              <th>Masaż Kobido</th>
              <td>250,00</td>
              <td>150,00</td>
              <td>60 min</td>
            </tr>

            <tr className = "backgroundRaw">
              <th>Masaż Kobido plus dodatki (peeling i maska lub kinesiotaping)</th>
              <td>350,00</td>
              <td>200,00</td>
              <td>90 min</td>
            </tr>

            <tr className = "backgroundRaw2">
              <th>Karnet 5 zabiegów Kobido + kinesiotaping</th>
              <td>1000,00</td>
              <td>700,00</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <p className = "pTable">*Cena promocyjna jest proponowana dość często przy różnego rodzaju okazjach, które należy śledzić na stronie.</p>
      </>
    )
  }

  export default Price;