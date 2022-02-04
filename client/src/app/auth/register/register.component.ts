import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { DialogService } from 'src/app/_services/dialog.service';
import { SnackbarServiceService } from 'src/app/_services/snackbar-service.service';
import { CustomValidators } from 'src/app/_shared/validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  minDate: Date;
  maxDate: Date;

  form: FormGroup;

  constructor(private accountService: AccountService, 
              private dialogService: DialogService, 
              private snackbarServiceService: SnackbarServiceService, 
              private router: Router,
              private el: ElementRef,
              private formBuilder: FormBuilder
              )
  {
    this.form = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthdate: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, CustomValidators.passwordPattern()]),
      passwordConfirm: new FormControl('', [Validators.required])
    },
    {
      validator: CustomValidators.mustMatch('password', 'passwordConfirm')
    }
    );
    
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 99, 0, 0);
    this.maxDate = new Date(currentYear - 18, 0, 0);
  }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log('response', response);
    }, error => {
      console.log(error);
    })
  }

  onSubmit(form: FormGroup) {
    console.log('form', form);

    console.log('model', this.model);
    console.log('valid', form.valid);
    
    
    //if valid form call api service and then depends on response open new dialog
    if (form.invalid) {
      this.dialogService.errorDialog({
      title: 'Title',
      inputs: this.el.nativeElement.querySelector('form mat-form-field .ng-invalid'),
      confirmText: 'Close',
      cancelText: '',
    });
  } else {
    //   this.dialogService.notificationDialog({
    //   title: 'Success Registration',
    //   inputs: '',
    //   confirmText: 'Ok',
    //   cancelText: '',
    // });

    this.snackbarServiceService.openSnackBar('Success Registration', '', '', '', 'green-snackbar');
    this.router.navigate(['/home'])


  }
    
  }

}
