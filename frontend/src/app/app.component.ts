import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { LlamadoService } from './llamado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id_select = '';
  id = '';
  price = '';
  description = '';
  id2 = '';
  price2 = '';
  description2 = '';

  constructor(private llamadoService: LlamadoService){
    
  }
  
  do() {
    this.id = this.llamadoService.id;
    this.price = this.llamadoService.price;
    this.description = this.llamadoService.description;
    this.llamadoService.searchIndicator();  
  }
  doS() {
    this.llamadoService.id_select = this.id_select;
    this.id2 = this.llamadoService.id2;
    this.price2 = this.llamadoService.price2;
    this.description2 = this.llamadoService.description2;
    this.llamadoService.searchIndicatorS();  
  }
  
}