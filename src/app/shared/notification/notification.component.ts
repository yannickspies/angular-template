import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationTypes } from './notification.enums';
import { NotificationService } from './notification.service';
import { Notification } from './notification.types';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  public notifications$: BehaviorSubject<Notification[]> = this.notificationService.notifications$;

  public NotificationTypes = NotificationTypes;

  constructor(private notificationService: NotificationService) {}
}
