import { Component, inject } from '@angular/core';
import { AutorService } from '../../services/autor.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {

  id: any;
  producto: any;
  tipo: any;
  precio: any
  
  servicio = inject(AutorService)
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
