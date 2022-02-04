import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginModel } from 'src/app/_models/login';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  form!: FormGroup;
  formFieldName = FormFieldName;
  
  constructor(public accountService: AccountService, private router: Router) { 
    this.form = this.initForm();
  }

  ngOnInit(): void {
  }

  // Here is how you can set reactive forms up for better form typings in your Angular form.
  // https://javascript.plainenglish.io/angular-form-typings-support-that-every-dev-needs-e198d4c1b63d
  private initForm(): FormGroup {
    return new FormGroup({
      [FormFieldName.username]: new FormControl(null),
      [FormFieldName.password]: new FormControl(null)
    }) as myFormGroup;
  }

  login() {
    console.log('form control', this.form.controls.password);

    const loginDto = {
      username: this.form.controls.username.value,
      password: this.form.controls.password.value
    }

    console.log('dto', loginDto);
    
    
    this.accountService.login(loginDto).subscribe(response => {
      console.log(response);
      this.router.navigate(['/home'])
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
  }

}

enum FormFieldName {
  username = 'username',
  password = 'password'
}

type MyFormControls = Record<keyof loginModel, AbstractControl>;

type myFormGroup = FormGroup & {
  value: loginModel;
  controls: MyFormControls
}