import {
    AbstractControl,
    ValidatorFn,
    FormControl,
    FormGroup
  } from '@angular/forms';
  
  export class CustomValidators {
    constructor() {}
  
    static passwordPattern(): ValidatorFn {
      return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value == '') return null;
  
        //for dev
        let re = new RegExp('^[a-zA-Z ]*$');

        //Minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character
        let passFormat = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$');
        if (re.test(control.value)) {
          return null;
        } else {
          return { passwordPattern: true };
        }
      };
    }

    static mustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
  
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
        }
  
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
        } else {
          matchingControl.setErrors(null);
        }
        return null;
      };
    }
  }