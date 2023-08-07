import { NotificationTypes } from './notification.enums';

export interface ToasterNotification {
  type: NotificationTypes;
  message: string;
  timeout?: number;
  id?: string;
}
