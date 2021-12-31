import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit,OnChanges {
  @Input() favNumber:Number = 19;
  test:Number=5;
  
 
  @Output() onTestChange:EventEmitter<Number>=new EventEmitter<Number>();
  constructor() { }
  emitEvent(){
    this.onTestChange.emit(this.test);
  }
  ngOnChanges(changes: any): void {
    console.log("My favorite number is "+changes.favNumber.currentValue);
   
  }

  ngOnInit(): void {

  }

}
