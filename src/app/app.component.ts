import { Component } from '@angular/core';
import { FotoService } from './services/foto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio';
public fotos:Array<any>=[]

  //inyeccion de servicio
  constructor(
    private fotoService: FotoService
  ){
    this.fotoService.getFotos().subscribe((resp:any)=>{
console.log(resp)
this.fotos=resp
    })
  }
}
