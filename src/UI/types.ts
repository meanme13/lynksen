import { ReactNode } from 'react';

export type ButtonType = {
  children: ReactNode,
  width?: string,
  height?: string,
  onClick: () => void
}