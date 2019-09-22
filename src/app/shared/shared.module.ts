import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({

  declarations: [NavbarComponent, FooterComponent],

  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedModule { }
