import { Component, OnInit,DoCheck, OnDestroy} from '@angular/core'; //OnDestroy: se ejecuta cada vez que se elimine un componente

@Component ({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck{
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "listado de juegos GG";
        //console.log("se ah cargado tu componente")
    }
    ngOnInit(){
        //console.log('OnInit Ejecutado'); //OnInit: ejecuta el codigo al empezar
    }
    ngDoCheck(){
        //console.log('DoCheck ejecutado'); //DoCheck: se ejecuta cada vez que se produzca un cambio en el componente
    }
    ngOnDestroy(){
        //console.log('OnDestroy ejecutado');
    }
    cambiarTitulo(){
        this.titulo = "Nuevo titulo";
    }
}