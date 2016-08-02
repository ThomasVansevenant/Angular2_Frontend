import { Injectable } from '@angular/core';

import {
    Notification } from '../../shared';

@Injectable()
export class NotificationService {

    private notification: Notification;
    errorMessage: string;

    constructor() {
    }

    notify(message: string, isSaved: boolean) {
        this.notification = new Notification();
        this.notification.message = message;
        this.notification.isSaved = isSaved;
    }

    notifyDelete(message: string) {
        this.notification = new Notification();
        return confirm(message);

    }
    getNotification() {
        return this.notification;
    }
}
