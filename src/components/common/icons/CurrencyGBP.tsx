import React, {FC} from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const CurrencyGBPIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={20} baseHeight={20} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5Z" fill="#1C4D73"/>
        <path d="M6.6127 10.5317C6.20601 10.5317 5.89791 10.7289 5.57749 10.963L4.78876 9.75528C5.33101 9.39789 5.72538 8.95423 5.72538 8.4243C5.72538 8.28873 5.70073 8.15317 5.67608 8.02993H4.83805V7.11796H5.23242C5.07221 6.83451 4.96129 6.51408 4.96129 6.09507C4.96129 4.9243 5.84862 4 7.56165 4C8.32573 4 8.9296 4.17254 9.39791 4.55458C9.90319 4.96127 10.1743 5.51585 10.1866 6.45247H8.59685C8.59685 5.63908 8.19016 5.29401 7.58629 5.29401C6.98242 5.29401 6.69897 5.63908 6.69897 6.13204C6.69897 6.48944 6.85918 6.78521 7.00707 7.10563H8.32573V8.01761H7.29052C7.29052 8.01761 7.29052 8.14084 7.29052 8.17782C7.29052 8.64613 7.03171 9.05282 6.55108 9.38556L6.57573 9.41021C6.77291 9.33627 6.99474 9.26232 7.27819 9.26232C7.98066 9.26232 8.11622 9.5088 8.63383 9.5088C9.00355 9.5088 9.33629 9.2993 9.53347 9.11444L10.2113 10.3961C9.82925 10.7289 9.25002 11 8.65848 11C7.67256 11 7.36446 10.5194 6.60038 10.5194L6.6127 10.5317Z" fill="white"/>
      </svg>
    )}
  </Icon>
);
