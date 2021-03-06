import React, {FC} from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const CurrencyETHIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={20} baseHeight={20} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5Z" fill="#1C4D73"/>
        <path d="M7.33926 6.24768L4.79462 7.77447L7.33926 9.31465V6.24768Z" fill="white"/>
        <path d="M7.33924 3.16736L4.83478 7.37272L7.33924 5.85932V3.16736Z" fill="white"/>
        <path d="M7.33927 9.89057L5.00891 8.51111L7.33927 11.8325V9.89057Z" fill="white"/>
        <path d="M7.64728 6.24768L10.2053 7.77447L7.64728 9.31465V6.24768Z" fill="white"/>
        <path d="M7.64728 3.16736L10.1651 7.37272L7.64728 5.85932V3.16736Z" fill="white"/>
        <path d="M7.64728 9.89057L9.97764 8.51111L7.64728 11.8325V9.89057Z" fill="white"/>
      </svg>
    )}
  </Icon>
);
