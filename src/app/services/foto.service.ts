import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class FotoService {

  //url del api rest
  _url='https://jsonplaceholder.typicode.com/photos';
  constructor(
    private http: HttpClient
  ) {
    //escribir en consola para probar la inyección
console.log('servicio persona')
   }
//realizar consulta al servicio api
   getFotos(){
let header = new HttpHeaders()
.set('Content-Type','application/json')

return this.http.get(this._url,{
  headers:header
})
   }
}
