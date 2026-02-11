declare module 'multer-storage-cloudinary' {
  import { v2 as cloudinary } from 'cloudinary';
  import { StorageEngine } from 'multer';

  interface Options {
    cloudinary: typeof cloudinary;
    params?: (req: any, file: any) => Promise<{
      folder?: string;
      format?: string;
      public_id?: string;
      resource_type?: string;
      [key: string]: any; // Allow other properties
    }> | { [key: string]: any };
  }

  export class CloudinaryStorage implements StorageEngine {
    constructor(options: Options);
    _handleFile(req: any, file: any, cb: any): void;
    _removeFile(req: any, file: any, cb: any): void;
  }
}