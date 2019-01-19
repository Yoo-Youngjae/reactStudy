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
        isUnderNum : false,
        underNumSize : 0,
    }

  }

  clickNum =(num)=>() =>{
      let _first = false;
      let _tmp = this.state.value;
      let _underNumSize = this.state.underNumSize;
      if(this.state.isFirstNum == true){
          _first  = false;
          _tmp = 0;
      }
      if(this.state.isUnderNum == true){    // 소숫점 입력시
          _tmp = _tmp + Math.pow(10,-1*_underNumSize)*num;
          _underNumSize++;
      }
      else{
          if(Math.pow(10, 16) > _tmp){
              _tmp = _tmp*10 + num;
          }
      }

      this.setState({
          value : _tmp,
          isFirstNum : _first,
          underNumSize : _underNumSize,
      });

  }

  clickAC =() =>() =>{
      this.setState({
          value : 0,
          total : 0,
          operator : '',
          isFirstNum : false,
          isUnderNum : false,
          underNumSize : 0,
      });
  }
  clickDot=()=>()=>{
      let _tmp = this.state.isUnderNum;
      if(_tmp === false){
          this.setState({
              isUnderNum : true,
              underNumSize : 1,
          });
      }
  }
  calculate =(oper)=>() =>{
      let _tot = this.state.total;
      let _val = this.state.value;
      let _isUnderNum = this.state.isUnderNum;

      if(this.state.operator === ''){
          _tot = _val;
      }
      //과거에 입력한 연산이 -(빼기) 일때
      else if(this.state.operator === '+'){
          _tot = _tot + _val;
      }
      else if(this.state.operator === '-'){
          _tot = _tot - _val;
      }
      else if(this.state.operator === '*'){
          _tot = _tot * _val;
      }
      else if(this.state.operator === '/'){ //나눗셈일때
          if(_val == 0){    //0으로 나눌때의 예외처리
              alert("0으로 나눌 수 없습니다.");
              return ;
          }
      }
      //=을 눌렀을때
      if(oper == '='){
          this.setState({
              operator : '',
              value : _tot,
              total : 0,
              isFirstNum : true,
              isUnderNum : false,
              underNumSize : 0,
          });
          return;
      }

      this.setState({
          operator : oper,
          value : _tot,
          total : _tot,
          isFirstNum : true,
          isUnderNum : false,
          underNumSize : 0,
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
                      <div onClick={this.calculate('/')}className="first_one">/</div>
                  </div>

                  <div className="flex">
                      <div onClick={this.clickNum(7)} className="rest_one">7</div>
                      <div onClick={this.clickNum(8)} className="rest_one">8</div>
                      <div onClick={this.clickNum(9)} className="rest_one">9</div>
                      <div onClick={this.calculate('*')} className="rest_one">*</div>
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
                      <div onClick={this.clickDot()} className="rest_one">.</div>
                      <div onClick={this.calculate('=')} className="rest_one">=</div>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}


