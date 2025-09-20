import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  standalone: false,
  templateUrl: './opera-bas.component.html',
  styleUrl: './opera-bas.component.css'
})
export class OperaBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }


}
