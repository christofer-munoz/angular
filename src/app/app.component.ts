import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { LlamadoService } from './llamado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typeInspect = '';
  dateInspect = '';
  valueUf = '';

  constructor(private llamadoService: LlamadoService){
    
  }
  
  do() {
    this.llamadoService.typeInspect = this.typeInspect;
    this.llamadoService.dateInspect = this.dateInspect;
    this.valueUf = this.llamadoService.valueUf;
    this.llamadoService.searchIndicator();  
  }
  
}