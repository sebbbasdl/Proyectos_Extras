import { Component, Input } from '@angular/core';
import { Egresos } from '../egresos.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {
  @Input() egresoE: Egresos;
  @Input() totalI: number;
}
