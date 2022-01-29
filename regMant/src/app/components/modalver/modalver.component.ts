import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modalver',
  templateUrl: './modalver.component.html',
  styleUrls: ['./modalver.component.sass']
})
export class ModalverComponent implements OnInit {

  suscriptor:Subscription;
  p_cadauno = [];
  
  regInfo = [];
  user: any;
  usuId: any;
  prod: any;
  regId: any;
  srcResult: any;
  nprod: void;

  
  idId=0;


  load = false;
  equipo: string = '';
  intervencion: string = '';
  comentReg: '';
  fecha: string = '';
  idEquipo: '';
  idInter: '';
  idRecur: '';
  nomRecur:'';



  constructor() { 
    fetch('http://localhost:3000/api/registro/traertodos').then(response => {
      console.log(response)
      return response.json()
    }).then(data => {
      console.log(data.content)
      this.fecha = data.content[0].fecha_reg;
      this.comentReg = data.content[0].coment_reg;

      
      data.content.forEach(cadaUno => {
        this.p_cadauno.push({
          id: ++this.idId,
          fecha_reg: cadaUno.fecha_reg,
          coment_reg: cadaUno.coment_reg,
          registro_id: cadaUno.registro_id,
          intervencion_id: cadaUno.t_intervencions[0].intervencion_id,
          nombre_inter: cadaUno.t_intervencions[0].nombre_inter,
          equipo_id: cadaUno.t_intervencions[0].t_equipos[0].equipo_id,
          nombre_eq: cadaUno.t_intervencions[0].t_equipos[0].nombre_eq,
          recurso_id: cadaUno.t_intervencions[0].t_recursos[0].recurso_id,
          descripcion_recur: cadaUno.t_intervencions[0].t_recursos[0].descripcion_recur,
          

        })


      

        console.log(this.p_cadauno);
        

      });

      this.load=true;
      
    })
   }

  ngOnInit() {
  }

}
