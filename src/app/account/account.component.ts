import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService],
})
  // The 'providers' array was previously like this ---->  providers: [LoggingService, AccountsService]
  // 'AccountsService' was removed so as to not create another instance of the service.
  
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChanged(status);
  }
}
