import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogInterface } from '../_models/dialog';
import { ErrorDialogComponent } from '../_shared/dialogs/error-dialog/error-dialog.component';
import { NotificationDialogComponent } from '../_shared/dialogs/notification-dialog/notification-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  errorDialog(data: DialogInterface): Observable<boolean> {
    return this.dialog
      .open(ErrorDialogComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }

  notificationDialog(data: DialogInterface): Observable<boolean> {
    return this.dialog
      .open(NotificationDialogComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }
}
