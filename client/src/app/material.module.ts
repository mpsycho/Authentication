import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  imports: [
      MatFormFieldModule, 
      MatInputModule, 
      MatButtonModule, 
      MatToolbarModule, 
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatTableModule,
      MatPaginatorModule,
      MatDialogModule,
      MatSnackBarModule,
      MatDatepickerModule,
      MatNativeDateModule
    ],
  exports: [
      MatFormFieldModule, 
      MatInputModule, 
      MatButtonModule, 
      MatToolbarModule, 
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatTableModule,
      MatPaginatorModule,
      MatDialogModule,
      MatSnackBarModule,
      MatDatepickerModule,
      MatNativeDateModule
    ]
})
export class MaterialModule { }
