import React, { Component } from 'react';
import Home from './home/Home';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        value: 0,
        total : 0,
        operator : '',
        isFirstNum : false,

    }

  }

  clickNum =(num)=>() =>{
      let _first = false;
      let _tmp = this.state.value;
      if(this.state.isFirstNum == true){
          _first  = false;
          _tmp = 0;
      }
      if(Math.pow(10, 16) > _tmp){
          _tmp = _tmp*10 + num;
      }

      this.setState({
          value : _tmp,
          isFirstNum : _first
      });

  }

  clickAC =() =>() =>{
      this.setState({
          value : 0,
          total : 0,
          operator : '',
          isFirstNum : false,
      });
  }
  calculate =(oper)=>() =>{
      let _tot = this.state.total;
      let _val = this.state.value;

      if(this.state.operator === ''){
          _tot = _val;
      }
      //과거에 입력한 연산이 -(빼기) 일때
      else if(this.state.operator === '-'){
          _tot = _tot - _val;

      }
      else { //덧셈일때
          _tot = _tot + _val;
      }
      this.setState({
          operator : oper,
          value : _tot,
          total : _tot,
          isFirstNum : true,
      });


  }



  render() {
    return (
      <div className="App">
          <div className="same">
              <div className="typing"> {this.state.value}</div>
              <div className="main">
                  <div className="flex">
                      <div onClick={this.clickAC()} className="first_three">AC</div>
                      <div className="first_one">/</div>
                  </div>

                  <div className="flex">
                      <div onClick={this.clickNum(7)} className="rest_one">7</div>
                      <div onClick={this.clickNum(8)} className="rest_one">8</div>
                      <div onClick={this.clickNum(9)} className="rest_one">9</div>
                      <div className="rest_one">*</div>
                  </div>

                  <div className="flex">
                      <div onClick={this.clickNum(4)} className="rest_one">4</div>
                      <div onClick={this.clickNum(5)} className="rest_one">5</div>
                      <div onClick={this.clickNum(6)} className="rest_one">6</div>
                      <div onClick={this.calculate('-')} className="rest_one">-</div>
                  </div>

                  <div className="flex">
                      <div onClick={this.clickNum(1)} className="rest_one">1</div>
                      <div onClick={this.clickNum(2)} className="rest_one">2</div>
                      <div onClick={this.clickNum(3)} className="rest_one">3</div>
                      <div onClick={this.calculate('+')} className="rest_one">+</div>
                  </div>

                  <div className="flex">
                      <div onClick={this.clickNum(0)} className="rest_two">0</div>
                      <div className="rest_one">.</div>
                      <div className="rest_one">=</div>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}


