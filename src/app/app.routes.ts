import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'productos/:idProducto', component: DetallesProductoComponent},
    
    { path: '**', redirectTo:'home'}
];
