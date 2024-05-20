import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { FormularioComponent } from '../../components/formulario/formulario.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaComponent, FormularioComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
