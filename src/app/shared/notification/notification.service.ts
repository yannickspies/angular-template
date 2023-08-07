import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { NotificationTypes } from './notification.enums';
import { Notification } from './notification.types';
import { UUID } from 'angular2-uuid';

const NOTIFICATION_DELAY_INFO = 3000;
const NOTIFICATION_DELAY_WARNING = 5000;
const NOTIFICATION_DELAY_SUCCESS = 3000;
const NOTIFICATION_DELAY_DANGER = 5000;

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notifications$: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>([]);

  constructor(private readonly sanitizer: DomSanitizer) {}

  public addNotification(notification: Notification): void {
    notification = { ...notification, id: UUID.UUID() };

    if (this.checkIfNotificationExists(notification)) {
      return;
    }

    this.notifications$.next([...this.notifications$.value, notification]);

    setTimeout(() => {
      this.removeNotification(notification);
    }, notification.timeout);
  }

  public sendInfo(message: string): void {
    const notification: Notification = {
      type: NotificationTypes.INFO,
      message: this.formatMessage(message),
      timeout: NOTIFICATION_DELAY_INFO,
    };

    this.addNotification(notification);
  }

  public sendWarning(message: string): void {
    const notification: Notification = {
      type: NotificationTypes.WARNING,
      message: this.formatMessage(message),
      timeout: NOTIFICATION_DELAY_WARNING,
    };

    this.addNotification(notification);
  }

  public sendSuccess(message: string): void {
    const notification: Notification = {
      type: NotificationTypes.SUCCESS,
      message: this.formatMessage(message),
      timeout: NOTIFICATION_DELAY_SUCCESS,
    };

    this.addNotification(notification);
  }

  public sendDanger(message: string): void {
    const notification: Notification = {
      type: NotificationTypes.DANGER,
      message: this.formatMessage(message),
      timeout: NOTIFICATION_DELAY_DANGER,
    };

    this.addNotification(notification);
  }

  private formatMessage(message: string): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, message) as string;
  }

  private checkIfNotificationExists(notification: Notification): boolean {
    return this.notifications$.value.some((n) => n.message === notification.message);
  }

  private removeNotification(notification: Notification): void {
    const notifications = this.notifications$.value.filter((n) => n.id !== notification.id);
    this.notifications$.next(notifications);
  }
}
