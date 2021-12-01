import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onClose() {
    this.accountService.logout();
    this.closeSidenav.emit();
  }

}
