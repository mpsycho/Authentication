import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInterface } from 'src/app/_models/dialog';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogInterface) { }

  ngOnInit(): void {
  }

}
