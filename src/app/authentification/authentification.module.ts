import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionPageComponent } from './containers/connexion-page/connexion-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConnexionPageComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthentificationModule {}
