import React, { Component } from 'react';
import on from '../image/on.png';
import off from '../image/off.png';
import field2 from '../image/field2.png';
import m from '../image/m.png';
import t from '../image/t.png';
import v from '../image/v.png';
import mon from '../image/m-on.png';
import ton from '../image/t-on.png';
import von from '../image/v-on.png';
import moff from '../image/m-off.png';
import toff from '../image/t-off.png';
import voff from '../image/v-off.png';
import axios from 'axios';
import ReactDOM from 'react-dom';
import index from './statebor.css';

const styles = {
  container:{
    flex: 1
  },
   apDiv5: {
    position: 'absolute',
    width: 182,
    height: 115,
    zIndex: 5,
    left: 50,
    top: 120
  },
   apDiv6: {
    position: 'absolute',
    width: 47,
    height: 24,
    zIndex: 1,
    left: 35,
    top: 107
  },
   apDiv7: {
    position: 'absolute',
    width: 45,
    height: 37,
    zIndex: 2,
    left: 83,
    top: 107
  },
   apDiv8: {
    position: 'absolute',
    width: 67,
    height: 33,
    zIndex: 3,
    left: 50,
    top: -45
  },
   apDiv9: {
    position: 'absolute',
    width: 39,
    height: 33,
    zIndex: 4,
    left: 38,
    top: 74
  },
   apDiv10: {
    position: 'absolute',
    width: 40,
    height: 42,
    zIndex: 5,
    left: 84,
    top: 74
  },
  apDiv11: {
    position: 'absolute',
    width: 40,
    height: 44,
    zIndex: 6,
    left: 145,
    top: 40
  },
   apDiv12: {
    position: 'absolute',
    width: 35,
    height: 38,
    zIndex: 7,
    left: 142,
    top: 9
  },
   apDiv13: {
    position: 'absolute',
    width: 53,
    height: 28,
    zIndex: 8,
    left: 38,
    top: 306
  },
   apDiv14: {
    position: 'absolute',
    width: 36,
    height: 33,
    zIndex: 9,
    left: 44,
    top: 272
  },
   apDiv15: {
    position: 'absolute',
    width: 41,
    height: 33,
    zIndex: 10,
    left: 83,
    top: 304
  },
   apDiv16: {
    position: 'absolute',
    width: 41,
    height: 34,
    zIndex: 11,
    left: 85,
    top: 272
  },
  apDiv17: {
    position: 'absolute',
    width: 39,
    height: 38,
    zIndex: 12,
    left: 144,
    top: 213
  },
   apDiv18: {
    position: 'absolute',
    width: 37,
    height: 37,
    zIndex: 13,
    left: 146,
    top: 181
  },

   apDiv: {
    position: 'absolute',
    width: 169,
    height: 302,
    zIndex: 5,
    left: 372,
    top: 152
  },
  apDiv60: {
    position: 'absolute',
    width: 248,
    height: 300,
    zIndex: 6,
    left: 50,
    top: 580
  },
  table: {
      border: "1px solid #ddd",
      borderCollapse: 'collapse',
      width: 100,
      textAlign: 'center',
      fontFamily:'supermarket',
      fontSize:16
  },
  td: {
      border: "1px solid #ddd",
      borderCollapse: 'collapse',
      width: 60,
      textAlign: 'center',
      fontFamily:'supermarket',
      fontSize:16,
      padding: 15
  },
  td2: {
      borderCollapse: 'collapse',
      width: 176,
      textAlign: 'center',
      fontFamily:'supermarket',
      fontSize:16,
      padding: 15
  },
  tr:{
      border: "1px solid #ddd",
      borderCollapse: 'collapse',
      textAlign: 'center',
      fontFamily:'supermarket',
      fontSize:16,
      padding: 15

  },


  font:{
    fontFamily: 'supermarket',
    fontSize:30
  }

};

class Statebor4 extends React.Component {
  constructor() {
    super();
    this.state = {
      data1: '',
      loading1: true
    };
  }

  componentDidMount () {


    this.interval = setInterval(() => {

    const url1 = 'http://127.0.0.1/test/database4.php';

    // in axios access data with .data

      axios.get(url1)
        .then(response1 => {
          this.setState({
            data1: response1.data,
            loading1: false
          });
        })
        .catch(error => {
          console.log(error);
        });

        this.forceUpdate();
      }, 10000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){

    let content1_1,content1_2,content1_3,content1_4,content1_5,content1_6;

    if (this.state.loading1) {
      content1_1 = <div>Loading...</div>;
    } else {
      content1_1 = this.state.data1.map((request) => {

        return (

          <div>
          {(request.mois1 === 'on')
          ? <img src={mon} width="30" height="30" />
          : <img src={moff} width="30" height="30" />
          }
          </div>

        )
      })
      content1_2 = this.state.data1.map((request) => {

        return (

          <div>
          {(request.mois2 === 'on')
          ? <img src={mon} width="30" height="30" />
          : <img src={moff} width="30" height="30" />
          }
          </div>

        )
      })
      content1_3 = this.state.data1.map((request) => {

        return (

          <div>
          {(request.temp1 === 'on')
          ? <img src={ton} width="30" height="30" />
          : <img src={toff} width="30" height="30" />
          }
          </div>

        )
      })
      content1_4 = this.state.data1.map((request) => {

        return (

          <div>
          {(request.temp2 === 'on')
          ? <img src={ton} width="30" height="30" />
          : <img src={toff} width="30" height="30" />
          }
          </div>

        )
      })
      content1_5 = this.state.data1.map((request) => {

        return (

          <div>
          {(request.val1 === 'on')
          ? <img src={von} width="30" height="30" />
          : <img src={voff} width="30" height="30" />
          }
          </div>

        )
      })
      content1_6 = this.state.data1.map((request) => {

        return (

          <div>
          {(request.val2 === 'on')
          ? <img src={von} width="30" height="30" />
          : <img src={voff} width="30" height="30" />
          }
          </div>

        )
      })
    }


    return(


<div>

<p>&nbsp;</p>
<p>&nbsp;</p>

<div style={styles.apDiv5}>




  <div style={styles.apDiv6}><img src={m} width="42" height="21" /></div>
  <div style={styles.apDiv7}><img src={t} width="32" height="31" /></div>
  <div style={styles.apDiv8}><p style={styles.font}>บ่อที่:4</p></div>
  <div style={styles.apDiv9}>

    {content1_1}

  </div>
  <div style={styles.apDiv18}>

    {content1_6}

  </div>
  <div style={styles.apDiv10}>

    {content1_3}

  </div>
  <div style={styles.apDiv12}>

    {content1_5}

  </div>
  <div style={styles.apDiv16}>

  {content1_4}

  </div>
  <div style={styles.apDiv14}>

    {content1_2}

  </div>

  <div style={styles.apDiv11}><img src={v} width="29" height="33" /></div>
  <div style={styles.apDiv13}><img src={m} width="42" height="21" /></div>
  <div style={styles.apDiv15}><img src={t} width="32" height="31" /></div>
  <div style={styles.apDiv17}><img src={v} width="29" height="33" /></div>
  <img src={field2} width="150" height="400" /></div>

  <div style={styles.apDiv60}>
    <table style={styles.table}>
      <tbody >
        <tr style={styles.tr}>
            <td style={styles.td} ><img src={on} width="30" height="30" /></td>
            <td style={styles.td} ><p>ON</p></td>

          </tr>
          <tr style={styles.tr}>
            <td style={styles.td} ><img src={off} width="30" height="30" /></td>
            <td style={styles.td} >OFF</td>
          </tr>

          <tr style={styles.tr}>
            <td style={styles.td}> M</td>
            <td style={styles.td} >Soil Moisture sensor </td>
          </tr>
          <tr style={styles.tr}>
            <td style={styles.td}>T</td>
            <td style={styles.td}>Temperature sensor </td>
          </tr>
          <tr style={styles.tr}>
            <td style={styles.td}>V</td>
            <td style={styles.td}>Solenoid Valve </td>
          </tr>
      </tbody>
    </table>
  </div>
</div>
    );

  }
}

export default Statebor4;
