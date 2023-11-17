import { AUTH_STATUS } from '../../enums/auth';

export interface AuthGuardProps {
  children?: React.ReactElement;
  redirectPath?: string;
  guardType?: AUTH_STATUS;
};