import { Component, inject } from '@angular/core';
import { AutorService, } from '../../services/autor.service';
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

  servicio = inject(AutorService)
  
  ngOnInit() {
    this.servicio.getProducto().subscribe(p => {
      this.productos = p;
    })
  }

  eliminar(id: any) {
    this.servicio.deleteProductos(id).subscribe()
  }

}
