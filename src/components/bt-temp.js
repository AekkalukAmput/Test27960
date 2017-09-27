import React, { Component } from 'react';
import { form, FieldGroup,ControlLabel,FormControl  } from 'react-bootstrap';
import {FormGroup, HelpBlock, Button} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { promise } from 'react-promise';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css';

class ButtonTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:'',
      select: 1,
      date: moment(),
      format: "DD/MM/YYYY",
      inputFormat: "DD/MM/YYYY",
      mode: "date",
      submit:'',
      loading: true
    };
  }

  setdata() {
      var myArray = this.props.data.resultDb;
      console.log(myArray);
      this.setState({
            data:myArray,
            loading: false
      });

  }
  onChange(newDate) {
    return this.setState({date:newDate});
  }

  handleChange(e) {
    const data = e.target.value;
    this.setState({
      select: data
    });
  }
  handleSubmit(e) {
    this.props.setValue({
      select: this.state.select,
      date: this.state.date
    });
    var select = this.state.select;
    var date = this.state.date;
    new Promise((resolve,reject) => {
      setTimeout(()=>{
        resolve(axios.get('http://127.0.0.1/test/getjs.php', {

            })
          .then(res => {
            console.log(res.data);
            return res.data })
          .catch(err => { console.log(err);}));
      },1000);
    })
    e.preventDefault();
  }

  render(){
    const {date, format, mode, inputFormat} = this.state;
    return(
        <form onSubmit={this.handleSubmit.bind(this)} method='post'>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>เลือกเซนเซอร์</ControlLabel>
              <FormControl componentClass="select" placeholder="เลือกเซนเซอร์" onChange={this.handleChange.bind(this)} >
                <option value="1" >1</option>
                <option value="2" >2</option>
              </FormControl>
          </FormGroup>
          <FormGroup>
            <DateTimeField
              dateTime={date}
              format={format}
              viewMode={mode}
              inputFormat={inputFormat}
              defaultText="Please select a date"
              onChange={this.onChange.bind(this)}

            />
          </FormGroup>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
    );
  }
}


export default ButtonTime;
