import { Zapatilla } from '../models/zapatilla';
import { Injectable } from '@angular/core';


@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook', 'Rebookr', 'Blancas', 80, true),
            new Zapatilla('Nike', 'Nike', 'Negras', 90, false),
            new Zapatilla('Adidas', 'Adidas', 'Verdes', 60, true),
            new Zapatilla('AdidasTR', 'Adidas', 'Negras', 480, false)
        ];
    }
    getTexto(){
        return "Hola mundo desde un servicio";
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}