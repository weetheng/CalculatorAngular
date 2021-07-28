import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayValue: number;
  tempValue: number;
  deletePressed: boolean;
  functionPressed: boolean;
  function:string;
  numbersPressed:boolean;

  ngOnInit(){
    this.displayValue = 0;
    this.tempValue = 0;
    this.deletePressed = false;
    this.functionPressed = false;
    this.function = "";
  }
  deleteDisplayValue(){
    this.displayValue = 0;
  }
  resetValues(){
    this.displayValue = 0;
    this.tempValue = 0;
  }
  
}
