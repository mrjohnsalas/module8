import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi: true }]
})
export class PasswordValidationDirective implements Validator {
  
  passwordsProhibited = ['123456', 'querty', '123456789'];

  validate(control: AbstractControl): ValidationErrors {
    const password = control.value as string;
    
    if (!password) { return; }
    if (password.length < 4) { return; }

    if (this.passwordsProhibited.indexOf(password) !== -1){
      return {'passwordValidation': {'message': 'Escoge un mejor password'}};
    }

    if (password === password.toLowerCase()){
      return {'passwordValidation': {'message': 'Tu password debe de contener mayúsculas'}};
    }
 
    if (password === password.toUpperCase()){
      return {'passwordValidation': {'message': 'Tu password debe de contener minúsculas'}};
    }
 
    if (!/\d/.test(password)){
      return {'passwordValidation': {'message': 'Tu password debe de incluir un caracter numérico'}};
    }
    
    return null;

  }

  constructor() { }

}
