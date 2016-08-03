/**
 * Handles the Notifications
 * eg. on delete pops a confirmation box
 */
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
/**
 * Pops an confirmation box on deleting an item
 * @param  {string} message confirmation message
 * @return {confirmationbox} 
 */
    notifyDelete(message: string) {
        this.notification = new Notification();
        return confirm(message);

    }
    getNotification() {
        return this.notification;
    }
}
