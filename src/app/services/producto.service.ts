import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  private API_PRODUCTOS = "http://localhost:3000/productos"
  

  ///////////////// GET //////////////////
  getProductos(): Observable<any>{
    return this.http.get(this.API_PRODUCTOS)
  }

  getProductoID(id: any): Observable<any>{
    return this.http.get(`${this.API_PRODUCTOS}/${id}`)
  }

  ////////////// POST /////////////////////
  postProductos(producto: JSON): Observable<any>{
    return this.http.post(this.API_PRODUCTOS, producto)
  }

  //////////////// PUT ////////////////////////////
  putProductos( producto: any ): Observable<any>{
    return this.http.put(`${this.API_PRODUCTOS}/${producto.id}`, producto)
  }

  ////////////////// DELETE ///////////////////////////
  deleteProductos(id: any): Observable<any>{
    return this.http.delete(`${this.API_PRODUCTOS}/${id}`)
  }


}
