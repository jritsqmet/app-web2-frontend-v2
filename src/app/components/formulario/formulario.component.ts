import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  id: any;
  producto: any;
  tipo: any;
  precio: any
  
  servicio = inject(ProductoService)

  guardar(data: any) {
    this.servicio.postProductos(data.value).subscribe()
    
  }

}
