import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  standalone: false,
  templateUrl: './opera-bas.component.html',
  styleUrl: './opera-bas.component.css'
})
export class OperaBasComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  operacion: string = '';

  calcular(): void {
    if (this.operacion === 'suma') {
      this.resultado = parseInt(this.num1) + parseInt(this.num2);
    }
    if (this.operacion === 'resta') {
      this.resultado = parseInt(this.num1) - parseInt(this.num2);
    }
    if (this.operacion === 'multiplicacion') {
      this.resultado = parseInt(this.num1) * parseInt(this.num2);
    }
    if (this.operacion === 'division') {
      this.resultado = parseInt(this.num2) !== 0 ? parseInt(this.num1) / parseInt(this.num2) : 0;
    }
  }
}
