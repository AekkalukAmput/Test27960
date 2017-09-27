import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import { form, FieldGroup,ControlLabel,FormControl  } from 'react-bootstrap';
import {FormGroup, HelpBlock, Button} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getValue, setValue } from '../actions/User.actions';
import './temp.css';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css';

class Dtemp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: '0',
        select: 1,
        date: moment(),
        format: "DD/MM/YYYY",
        inputFormat: "DD/MM/YYYY",
        mode: "date",
        submit:'',
        loading: true
      };
    }

    componentDidMount () {
      new Promise((resolve,reject) => {
        setTimeout(()=>{
          resolve(axios.get('http://127.0.0.1/test/dstatic.php', {
                  params: {
                    ID: 12345
                  }
              })
              .then(response => {
                this.setState({
                  data: response.data,
                  loading: false
                });
              })
              .catch(error => {
                console.log(error);
              })
            )
          },1000);
      })
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
    onChange(newDate) {
      return this.setState({date:newDate});
      console.log("new Date", newDate);
    }

    handleChange(e) {
      const select = e.target.value;
      this.setState({
        select: select
      });
      console.log(this.state.select);
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
          resolve(axios.get('http://127.0.0.1/test/dtemp.php', {
                  params: {
                    ID: 12345
                  }
              })
              .then(response => {
                this.setState({
                  data: response.data,
                  loading: false
                });
              })
              .catch(error => {
                console.log(error);
              })
            )
          },1000);
      })
      e.preventDefault();
    }

    render() {
      let content;
      if (this.state.loading) {
        content = <div>Loading...</div>;
      } else {
        var mr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],length=this.state.data.length;
        var tr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        var dateTime= this.state.data[0].datetime;
        dateTime = dateTime.split(" ");//dateTime[0] = date, dateTime[1] = time
        dateTime = dateTime[0].split("-");
        dateTime[2] = Number(dateTime[2]);
        dateTime[1] = Number(dateTime[1]);
        dateTime[0] = Number(dateTime[0]);
        //console.log(date);
        for (var i=0;i<=23;i++){
          mr.splice(i,1,Number(this.state.data[i].moisture))
          tr.splice(i,1,Number(this.state.data[i].temperature))
        }
        // console.log(this.state.data[i].moisture);
        // console.log(mr);
        const config = {
                    title: {
                        text: 'กราฟแสดงผลความชื้นแบบรายวัน'
                    },

                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        type: 'datetime',
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    yAxis: {
                        title: {
                            text:'Moisture (%) and Temperature (°C)'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080',
                        }]

                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },
                    plotOptions: {
                      series: {
                          pointStart: Date.UTC(dateTime[2],dateTime[1],dateTime[0],0,0,0),
                          pointInterval: 3600 * 1000 // one day
                      }
                    },
                    series: [{
                          name:'moisture',
                          data: mr
                    }, {
                          name:'temperature',
                          data: tr,
                          color: '#71c73e'
                    }]
                    }


      return(
        <div>
          <div>
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

          </div>
            <ReactHighcharts config={config} ref="chart"></ReactHighcharts>;
        </div>
        )
      }
      const {date, format, mode, inputFormat} = this.state;
      return(
        <div>
          <div>
            {content}
          </div>
        </div>
      )
    }
  }
  const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getValue: () => {
      dispatch(getValue());
    },
    setValue: (select,date) => {
      dispatch(getValue(select));
      dispatch(getValue(date));
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dtemp));
