import React, { Component } from 'react';

class Home extends React.Component {
  render(){
    const dateTime = ['DD','MM','YY'];
    console.log(dateTime[0],dateTime[1],dateTime[2],dateTime);
    return(
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
export default Home;
