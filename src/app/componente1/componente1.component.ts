import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit, OnChanges{
  @Input() ageNumber:Number = 22;
  test:Number=5;
  
 
  @Output() onTestChange:EventEmitter<Number>=new EventEmitter<Number>();
  constructor() { }

  ngOnInit(): void {
  }
  emitEvent(){
    this.onTestChange.emit(this.test);
  }

 ngOnChanges(changes: any): void {
    console.log("My age is " +changes.ageNumber.currentValue)
    
  }
}
