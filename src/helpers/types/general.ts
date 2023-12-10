export interface AlertElement {
  icon: 'danger' | 'success' | 'warning';
  message: string;
  canBeClosed?: boolean;
  identifier: number;
}

export interface APIError {
  error: string;
}

export type SafePrimitives = string | number | boolean | string[] | number[] | boolean[] | { [key: string]: SafePrimitives };
