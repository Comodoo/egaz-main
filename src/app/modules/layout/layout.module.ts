import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { CommentListComponent } from './pages/comment-list/comment-list.component';
import { ViewProjectComponent } from './pages/view-project/view-project.component';
import { DocViewerComponent } from './pages/doc-viewer/doc-viewer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    CommentListComponent,
    ViewProjectComponent,
    DocViewerComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [],
})
export class LayoutModule {}
