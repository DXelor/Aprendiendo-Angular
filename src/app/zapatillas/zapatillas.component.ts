import { Component , OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;
    constructor(){
        this.mi_marca = "Fila";
        this.color = 'orange';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Reebook', 'Rebookr', 'Blancas', 80, true),
            new Zapatilla('Nike', 'Nike', 'Negras', 90, false),
            new Zapatilla('Adidas', 'Adidas', 'Verdes', 60, true),
            new Zapatilla('AdidasTR', 'Adidas', 'Negras', 480, false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            };
            //console.log(index);
        });
        console.log(this.marcas);
    }
    getMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca);
    }
    borrarMarca(index){
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    }
    // onBlur(){
    //     console.log("has salido del imput")
    // }
    // mostrarPalabra(){ //keyup
    //     alert(this.mi_marca);
    // }
}
