import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  private API_AUTOR = "http://localhost:9090/autores"
  //private API_AUTOR = "http://localhost:3000/autores"


  getProducto():Observable<any>{
    return this.http.get(this.API_AUTOR)
  }

  getProductoID(id: any):Observable<any>{
    return this.http.get(`${this.API_AUTOR}/${id}`)
  }

  postProducto(producto: any):Observable<any>{
    return this.http.post(this.API_AUTOR, producto)
  }

 
  putProductos( producto: any): Observable <any>{
    return this.http.put( `${this.API_AUTOR}/${producto.id}`, producto)
  }

  deleteProductos( id: any): Observable <any>{
    return this.http.delete(`${this.API_AUTOR}/${id}`)
    
  }

}
