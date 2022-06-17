import { ReactEventHandler } from 'react';

export interface IIconProps {
  className?: string;
  size?: number;
  color?: string;
  onClick?: ReactEventHandler;
}

export const ICON_DEFAULT_COLORS: {[key: string]: any} = {
  white: '#FFF',
  black: '#000',
  primary: '#1D2B4C',
  secondary: '#BFC5D5',
  warning: '#F2C94C',
  blue: '#045FDB',
  purple: '#BB6BD9',
  gray: '#7A849F',
};
