import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/_services/account.service';
import { DialogService } from 'src/app/_services/dialog.service';
import { SnackbarServiceService } from 'src/app/_services/snackbar-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private accountService: AccountService, private dialogService: DialogService, private snackbarServiceService: SnackbarServiceService, private el: ElementRef) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log('response', response);
    }, error => {
      console.log(error);
    })
  }

  onSubmit(form: NgForm) {
    console.log('form', form.controls);
    
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

  }
    
  }

}
