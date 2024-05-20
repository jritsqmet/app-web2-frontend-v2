import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  productos: any;

  servicio = inject(ProductoService)
  
  ngOnInit() {
    this.servicio.getProductos().subscribe(p => {
      this.productos = p;
    })
  }

  eliminar(id: any) {
    this.servicio.deleteProductos(id).subscribe()
  }

}
