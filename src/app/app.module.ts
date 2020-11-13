import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent }        from './app.component';
import { VideojuegoComponent } from './Videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent }     from './cursos/cursos.component';
import { HomeComponent }       from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
