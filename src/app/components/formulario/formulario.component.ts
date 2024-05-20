import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutorService} from '../../services/autor.service';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(private servicio: AutorService){}

  nombre:any
  apellido:any
  id:any
  email:any

  cargar(form: any) {


    this.servicio.postProducto(form.value).subscribe()

  }

}
