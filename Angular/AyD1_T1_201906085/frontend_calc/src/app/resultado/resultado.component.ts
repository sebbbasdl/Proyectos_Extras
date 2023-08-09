import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  template: '<p>Resultado: {{resultado}}</p>',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  
  @Input() resultado: number;
}
