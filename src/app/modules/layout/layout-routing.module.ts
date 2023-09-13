import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { UsersComponent } from "./pages/users/users.component";
import { ViewProjectComponent } from "./pages/view-project/view-project.component";
import { CommentListComponent } from "./pages/comment-list/comment-list.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },

            {
                path: 'users',
                component:UsersComponent
            },

            {
                path: 'view-project',
                component:ViewProjectComponent
                
            },


        {
            path: 'comment-list',
            component:CommentListComponent
        }





        ]
        
    }
]
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})


export class LayoutRoutingModule { }