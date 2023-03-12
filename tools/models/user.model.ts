import { AuditModel } from './audidt.model';
export class UserModel {
  id: string;
  name: string;
  surname: string;
  imaage: string;
  email: string;
  passsword: string;
  passswordHash: string;
  audit: AuditModel;
}
