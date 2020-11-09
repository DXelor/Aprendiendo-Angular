import { Component } from '@angular/core';
import { config } from 'process';
import { Config } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(){
    this.config = Config;
    this.title = Config.titulo;
    this.descripcion = Config.descripcion;
  }

  ocultarVideojuegos(value){
    this.mostrar_videojuegos = value;
  }
}
