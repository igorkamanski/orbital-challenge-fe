import React, { FC, ReactElement, useMemo } from "react";
import { ICON_DEFAULT_COLORS, IIconProps } from "./types";
import classnames from "classnames";

export interface IAbstractIconProps extends IIconProps {
  baseWidth: number;
  baseHeight: number;
  children(width: string, height: string, color: string): ReactElement;
}

export const Icon: FC<IAbstractIconProps> = ({
  className = '',
  size,
  color = 'currentColor',
  baseWidth,
  baseHeight,
  children,
  ...props
}) => {
  const width = useMemo(() => size || baseWidth, [size, baseWidth]);
  const height = useMemo(() => width / baseWidth * baseHeight, [width, baseWidth, baseHeight]);
  const svgColor = useMemo(() => ICON_DEFAULT_COLORS[color] || color, [color]);

  return (
    <div className={classnames('inline-flex', className)} {...props}>
      {children(`${width / 20}rem`, `${height / 20}rem`, svgColor)}
    </div>
  );
}
