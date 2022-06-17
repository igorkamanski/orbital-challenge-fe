import React, {ComponentProps, FC, ReactNode, useMemo} from "react";
import classnames from "classnames";

import './style.css';

export type ButtonProps = {
  variant?: 'standard' | 'filled' | 'outlined',
  color?: 'primary' | 'secondary' | 'red',
  rounded?: 'sm' | 'normal' | 'large' | 'full'
  icon?: ReactNode,
  iconPosition?: 'start' | 'end'
} & ComponentProps<'div'>;

export const Button: FC<ButtonProps> = ({
  variant= 'standard',
  color= 'primary',
  icon,
  iconPosition= 'start',
  rounded= 'sm',
  className,
  children,
  ...rest
}) => {

  const buttonTheme = useMemo(() => {
    const classes: string[] = [];
    if (variant === 'outlined') classes.push('button--outlined');

    switch (color) {
      case 'primary':
        if (variant === 'filled') {
          classes.push('button--primary');
        } else {
          classes.push('button--outline-primary');
        }
        break;
      case 'secondary':
        if (variant === 'filled') {
          classes.push('button--secondary');
        } else {
          classes.push('button--outline-secondary');
        }
        break;
      case 'red':
        if (variant === 'filled') {
          classes.push('button--red');
        } else {
          classes.push('button--outline-red');
        }
        break;
    }
    classes.push(`rounded-${rounded}`);
    return classes;
  } ,[color, variant, rounded])

  return (
    <div
      className={classnames('button',
        buttonTheme,
        className
      )}
      {...rest}
    >
      {iconPosition === 'start' && <i className='button__icon--start'>{icon}</i>}
      <span className='button__text'>
        {children}
      </span>
      {iconPosition === 'end' && <i className='button__icon--end'>{icon}</i>}
    </div>
  )
}