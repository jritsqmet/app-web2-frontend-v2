import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent {

  id: any;
  producto: any;
  tipo: any;
  precio: any
  
  servicio = inject(ProductoService)
  ruta = inject(ActivatedRoute)
  

  item: any;

  ngOnInit() {
    this.ruta.params.subscribe(r => {
      this.servicio.getProductoID(r['idProducto']).subscribe(p => {
        this.id = p.id
        this.producto = p.producto
        this.tipo = p.tipo
        this.precio = p.precio
      })
    })
    
  }

  editar(data: any) {
    this.servicio.putProductos(data.value).subscribe()
    window.location.href='productos'
  }

}
