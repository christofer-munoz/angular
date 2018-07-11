import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LlamadoService {

  id_select = '';
  id = '';
  price = '';
  description = '';
  id2 = '';
  price2 = '';
  description2 = '';

  constructor(private http: Http) {}

  searchIndicator() {
    this.http.get('http://localhost:8080/api/products')
    .subscribe(
        (res: Response) => {
          const datos = res.json();
          console.log(datos);
            
              this.id = datos[0]['id'];
              this.price = datos[0]['price'];
              this.description = datos[0]['description'];              
            
        }, err => {
          console.log('UPS!');
          console.log(err);
        }, () => {
          console.log('¡Servicio Finalizado!');
       
        }
    );
  }

  searchIndicatorS() {
    this.http.get('http://localhost:8080/api/products/'+ this.id_select)
    .subscribe(
        (res: Response) => {
          const datos2 = res.json();
          console.log(datos2);
            this.id2 = datos2['id'];
            this.price2 = datos2['price'];
            this.description2 = datos2['description'];
            
        }, err => {
          console.log('UPS!');
          console.log(err);
        }, () => {
          console.log('¡Servicio Finalizado!');
       
        }
    );
  }
}
