import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICredentials } from '../../models/i-credentials.interface';

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.scss'],
})
export class ConnexionFormComponent {
  @Output() public submitted: EventEmitter<ICredentials> = new EventEmitter();

  public connexionForm = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    motDePasse: new FormControl(null, [Validators.required]),
  });

  public onSubmit(): void {
    const credentials: ICredentials = this.connexionForm.getRawValue();
    this.submitted.emit(credentials);
  }
}
