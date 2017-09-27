import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import { form, FieldGroup,ControlLabel,FormControl  } from 'react-bootstrap';
import {FormGroup, HelpBlock, Button} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import './temp.css';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css';

class Dtemp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: '',
        select: 1,
        date: moment().format('YYYY-MM-DD'),
        format: "YYYY-MM-DD",
        inputFormat: "DD/MM/YYYY",
        mode: "date",
        submit:'',
        loading: true
      };
    }

    setdata() {
      var myData = this.props.data.resultDB;
      var refetch = this.props.realtimedata.reFetch;
      console.log(myData);
      this.setState({
        data:myData,
        fetch:refetch,
        loading:false
      });
    }

    componentDidMount(){

      setTimeout(()=>{
        this.setdata()
      },1000);

      setInterval(()=>{
        //this.props.setData(this.state.tbname)
      },10000);
    }

    onChange(newDate) {
      return this.setState({date:newDate});
    }

    handleChange(e) {
      const select = e.target.value;
      this.setState({
        select: select
      });
    }
    handleSubmit(e) {
      axios.get('http://127.0.0.1/ProjectReact/dstatic.php', {
         params: {
             select: this.state.select,
             date : this.state.date
         }
      }).then(res => {
          console.log(res.data);
          this.setState({data: res.data}) })
        .catch(err => { throw err; });
      e.preventDefault();
    }

    render() {

        const mr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],length=this.state.data.length;
        const tr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

        if (this.state.loading) {
          var dateTime = ['DD','MM','YY'];

        } else {

            var dateTime= this.state.data[0].datetime;
            dateTime = dateTime.split(" ");//dateTime[0] = date, dateTime[1] = time
            dateTime = dateTime[0].split("-");
            dateTime[2] = Number(dateTime[2]);
            dateTime[1] = Number(dateTime[1]);
            dateTime[0] = Number(dateTime[0]);
            for (var i=0;i<length&&i<=23;i++){
              mr.splice(i,1,Number(this.state.data[i].moisture))
              tr.splice(i,1,Number(this.state.data[i].temperature))
            }

        }

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
                          pointStart: Date.UTC(dateTime[0],dateTime[1]-1,dateTime[2],0,0,0),
                          pointInterval: 3600 * 1000 // every hour in day
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

      const {date, format, mode, inputFormat} = this.state;
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
              <ControlLabel>เลือกเวลา</ControlLabel>
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
  }

const mapStateToProps = (state) => {
  return{
    user: state.user,
    data: state.db,
    realtimedata: state.fetch
  };
};
const mapDispatchToprops = (dispatch) => {
  return{
      setData : () =>{
        dispatch({
          type: "FETCH_DB",
          payload : new Promise((resolve,reject) => {
            setTimeout(() => {
              resolve(this.state.data)
              console.log(resolve);
            },500)
          })
        })
      }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(Dtemp));
