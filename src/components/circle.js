import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import index from './statebor.css';
import Thermometer from "react-thermometer";
import axios from 'axios';

const styles = {
    apDiv1: {
    position: 'absolute',
    left: 100,
    top: 100
    },
    apDiv2: {
    position: 'absolute',
    left: 300,
    top: 100
    },
    apDiv3: {
    position: 'absolute',
    left: 70,
    top: 80
    },
    apDiv4: {
    position: 'absolute',
    left: 100,
    top: 135
    },
    font:{
      fontFamily: 'supermarket',
      fontSize:50,
      textAlign: 'left'
    },
    font2:{
      fontFamily: 'supermarket',
      fontSize:20,
      textAlign: 'left'
    }
};

class Circle extends React.Component {

  constructor() {
    super();
    this.state = {
      data: '0',
      loading: true
    };
  }

  componentDidMount () {


    this.interval = setInterval(() => {

    const url = 'http://127.0.0.1/test/b1temp1.php';

    // in axios access data with .data

      axios.get(url)
        .then(response => {
          this.setState({
            data: response.data,
            loading: false
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
      let content;
      if (this.state.loading) {
        content = <div>Loading...</div>;
      } else {
        content = this.state.data.map((request, index) => {
          return (
            <div>
              <div style={styles.apDiv1}>
                <h1 style={styles.font}>ความชื้น</h1>
                <CircularProgressbar percentage={request.moisture} />
              </div>
              <div style={styles.apDiv2}>
                <h1 style={styles.font}>อุณหภูมิ</h1>
                <div style={styles.apDiv3}>
                  <Thermometer
                        min={0}
                        max={50}
                        width={15}
                        height={130}
                        backgroundColor={'#D6D6D6'}
                        fillColor={'#C83E3E'}
                        current={request.temperature}
                />
              </div>
              <div style={styles.apDiv4}>
                <p style={styles.font2}>{request.temperature}&nbsp;ํC</p>
              </div>
              </div>
          </div>

          )
        })
      }
      return(
        <div>

              {content}

        </div>
    );
  }
}
export default Circle;
