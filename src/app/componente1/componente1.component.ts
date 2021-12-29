import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit, OnChanges{
  @Input() ageNumber:Number = 22;

  constructor() { }
 

  ngOnInit(): void {
  }

 ngOnChanges(changes: any): void {
    console.log("My age is " +changes.ageNumber.currentValue)
    
  }
}
