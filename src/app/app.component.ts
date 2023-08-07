import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotificationService } from './shared/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-template';

  public checkboxValue: FormControl = new FormControl<boolean>(false);

  constructor(private notificationService: NotificationService) {
    this.notificationService.sendWarning('This is a warning message');
    this.notificationService.sendSuccess('This is a success message');
    this.notificationService.sendInfo('This is an info message');
  }
}
