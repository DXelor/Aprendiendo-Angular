//importar modulos del router de angular

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { HomeComponent }       from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './Videojuego/videojuego.component';
import { CursosComponent }     from './cursos/cursos.component';
import { ExternoComponent }    from './externo/externo.component';




//Array de rutas
const appRoutes: Routes = [
    {path: '',                  component: HomeComponent},
    {path: 'zapatillas',        component: ZapatillasComponent},
    {path: 'videojuego',        component: VideojuegoComponent},
    {path: 'cursos',            component: CursosComponent},
    {path: 'cursos/:nombre',    component: CursosComponent},
    {path: 'externo',           component: ExternoComponent},
    {path: '**',                component: HomeComponent}
];

//Exportar el modulo del router
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);