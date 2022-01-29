import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRegistroComponent } from './components/add-registro/add-registro.component';
import { ModalverComponent } from './components/modalver/modalver.component';
import { TablaRegComponent } from './components/tabla-reg/tabla-reg.component';

const routes: Routes = [
  {
    path:'',
    component: AddRegistroComponent
  },
  {
    path:'reg',
    component: TablaRegComponent
  },
  {
    path:'modver',
    component: ModalverComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
