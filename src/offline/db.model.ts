import Dexie, { Table } from 'dexie';

// table interface
export interface Link {
  id: string; // database id
  name: string;
  isExpired: boolean;
  downloadURL: string;
  previewURL: string;
  expiryDate: Date;
  s3Id: string;
  shortURL: string,
  file_type: string,
}

// Extend Dexie to create a typed database
class TransferXDatabase extends Dexie {
  links!: Table<Link>; // Declare your table

  constructor() {
    super('transferx');
    this.version(1).stores({
      links: 'id, name, isExpired, downloadURL, previewURL, expiryDate, s3Id, file_type'
    });
  }
}

// Instantiate the database
export const db = new TransferXDatabase();