import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
      MatFormFieldModule, 
      MatInputModule, 
      MatButtonModule, 
      MatToolbarModule, 
      MatSidenavModule,
      MatIconModule,
      MatListModule
    ],
  exports: [
      MatFormFieldModule, 
      MatInputModule, 
      MatButtonModule, 
      MatToolbarModule, 
      MatSidenavModule,
      MatIconModule,
      MatListModule
    ]
})
export class MaterialModule { }
