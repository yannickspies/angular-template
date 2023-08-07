import { NotificationTypes } from './notification.enums';

export interface Notification {
  type: NotificationTypes;
  message: string;
  timeout?: number;
  id?: string;
}
