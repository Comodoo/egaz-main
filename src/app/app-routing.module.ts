import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('../app/modules/layout/layout.module').then((b) => b.LayoutModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../app/modules/auth/auth.module').then((b) => b.AuthModule)
  }



 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
