import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, DeleteDialogComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    HttpClientModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
