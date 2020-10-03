import { getMongoRepository, MongoRepository } from 'typeorm';

import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';

import { ObjectID } from 'mongodb';
import Notification from '../../infra/typeorm/schemas/Notifications';

// Data Transfer Object
class NotificationsRepository implements INotificationsRepository {
  public notifications: Notification[] = [];

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongo');
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, { id: new ObjectID(), content, recipient_id });

    this.notifications.push(notification);

    return notification;
  }
}

export default NotificationsRepository;
