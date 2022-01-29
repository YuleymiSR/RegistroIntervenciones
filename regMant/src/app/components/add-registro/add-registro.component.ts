import { Component, OnInit,NgZone, ViewChild } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-add-registro',
  templateUrl: './add-registro.component.html',
  styleUrls: ['./add-registro.component.sass']
})
export class AddRegistroComponent implements OnInit {

  equipos=[];
  intervencion=[];
  load;

  constructor( private _ngZone: NgZone) {

// EQUIPOS
    fetch('http://localhost:3000/api/equipo/traertodos').then(response => {
      console.log(response)
      return response.json()
    }).then(data => {
      console.log(data.content)
      
      data.content.forEach(cadaUno => {
        this.equipos.push({
          nombre_eq: cadaUno.nombre_eq,
          equipo_id: cadaUno.equipo_id,
          intervencion_id: cadaUno.intervencion_id,
          
        })      

        console.log(this.equipos);        

      });

      this.load=true;
      
    })


// INTERVENCION
    fetch('http://localhost:3000/api/intervencion/traertodos').then(response => {
      console.log(response)
      return response.json()
    }).then(data => {
      console.log(data.content)
      
      data.content.forEach(cadaUno => {
        this.intervencion.push({
          nombre_inter: cadaUno.nombre_inter,
          intervencion_id: cadaUno.intervencion_id,
          registro_id: cadaUno.registro_id
          
        })      

        console.log(this.intervencion);        

      });

      this.load=true;
      
    })


   }

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  foods=[
    {id:1, nombre:'dos'},
    {id:2, nombre:'tres'}
    
  ]

  ngOnInit() {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
