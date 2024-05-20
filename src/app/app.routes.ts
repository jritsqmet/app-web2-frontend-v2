import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AutorComponent } from './pages/autor/autor.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'autor/:idAutor', component: AutorComponent},
    
    { path: '**', redirectTo:'home'}
];
