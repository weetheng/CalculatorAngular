import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayValue: string;
  tempValue: number;
  deletePressed: boolean;
  functionPressed: boolean;
  function:string;
  numbersPressed:boolean;
  themeValue:number;

  ngOnInit(){
    this.displayValue = "0";
    this.tempValue = 0;
    this.deletePressed = false;
    this.functionPressed = false;
    this.function = "";
    this.themeValue = 1;
  }
  deleteDisplayValue(){
    if(this.functionPressed==true){
      this.displayValue = "0";
    }
  }
  resetValues(){
    this.displayValue = "0";
    this.tempValue = 0;
    this.deletePressed = false;
    this.functionPressed = false;
  }
  //if numpad pressed
  updateDisplay(value: string){
    if(this.functionPressed==true){
      if(this.displayValue[this.displayValue.length-1] == "."){
        this.displayValue += "0";
      }
      this.tempValue = Number(this.displayValue);
      this.displayValue = value;
      this.functionPressed = false;
    }
    else{
      if(this.displayValue == "0"){
        this.displayValue = value;
      }
      else{
        this.displayValue += value;
      }
    }
  }
  updateFunction(value: string){
    this.function = value;
    this.functionPressed = true;
  }
  equalPressed(){
    console.log("display vlue " + this.displayValue);
    console.log("temp value " + this.tempValue);
    //make sure last digit not '.' like 123.
    if(this.displayValue[this.displayValue.length-1] == "."){
      this.displayValue += "0";
    }
    
    if (this.function == "+"){
      this.displayValue = (this.tempValue + Number(this.displayValue)).toString();
    }
    if (this.function == "-"){
      this.displayValue = (this.tempValue - Number(this.displayValue)).toString();
    }
    if (this.function == "*"){
      this.displayValue = (this.tempValue * Number(this.displayValue)).toString();
    }
    if (this.function == "/"){
      this.displayValue = (this.tempValue / Number(this.displayValue)).toString();
    }

    this.tempValue = Number(this.displayValue);
    this.functionPressed = false;
    this.function = "";
  }
}
