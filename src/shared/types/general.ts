export interface Alert {
  icon: 'danger' | 'success' | 'warning';
  message: string;
  canBeClosed?: boolean;
  identifier: number;
}
