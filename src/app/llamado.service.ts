import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LlamadoService {

  typeInspect = '';
  dateInspect = '';
  valueUf = '';

  constructor(private http: Http) {}

  searchIndicator() {
    this.http.get('https://mindicador.cl/api/'+this.typeInspect+'/'+this.dateInspect)
    .subscribe(
        (res: Response) => {
          const valueIndicator = res.json();
          console.log(valueIndicator);
         
            this.valueUf = valueIndicator['serie'][0]['valor'];
            
        }, err => {
          console.log('UPS!');
          console.log(err);
        }, () => {
          console.log('¡Servicio Finalizado!');
       
        }
    );
  }

}
