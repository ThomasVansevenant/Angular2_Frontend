export class Item {
  id: number;
  title: string;
  description: string;
  body: string;
  embargo_date: string;
  publish_date: string;
  last_modified: string;
}

export class Notification {
  message: string;
  isSaved: boolean;
}
