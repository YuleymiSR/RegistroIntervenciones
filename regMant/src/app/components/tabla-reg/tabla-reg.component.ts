import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RegService } from 'src/app/services/reg.service';
import { Subscription } from 'rxjs';
import { ModaleditComponent } from '../modaledit/modaledit.component';
import { ModalverComponent } from '../modalver/modalver.component';
import { log } from 'console';

@Component({
  selector: 'app-tabla-reg',
  templateUrl: './tabla-reg.component.html',
  styleUrls: ['./tabla-reg.component.sass']
})
export class TablaRegComponent implements OnInit {

  

  suscriptor:Subscription;


  p_cadauno = [];
  dataSource;



  displayedColumns: string[] = ['Id', 'Equipo', 'Intervención', 'Fecha', 'Ver', 'Editar'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  regInfo = [];
  user: any;
  usuId: any;
  prod: any;
  regId: any;
  srcResult: any;
  nprod: void;



  // INICIO NUEVO


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

  


  constructor(public dialog: MatDialog,
    private _sRest: RegService
  ) {

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

    this.dataSource = new MatTableDataSource(this.p_cadauno);


  }






  ngOnInit() {

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue:string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  viewReg(registro_id) {
    // console.log(prod_id);
    this.nprod = this._sRest.setIdProd(registro_id);
    this.openDialogVer();
    // console.log(this.nprod);
    return this.nprod
  }

  openDialogVer(): void {
    const dialogRef = this.dialog.open(ModaleditComponent, {
      width: '350px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }
 

  editReg(registro_id) {
    // console.log(prod_id);
    this.nprod = this._sRest.setIdProd(registro_id);
    this.openDialogEditar();
    // console.log(this.nprod);
    return this.nprod
  }

  openDialogEditar(): void {
    const dialogRef = this.dialog.open(ModaleditComponent, {
      width: '350px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

}
