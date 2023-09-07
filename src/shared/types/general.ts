export interface Alert {
  icon: 'danger' | 'success' | 'warning';
  message: string;
  canBeClosed?: boolean;
  identifier: number;
}

export type SafePrimitives = string | number | boolean | string[] | number[] | boolean[] | { [key: string]: SafePrimitives };
