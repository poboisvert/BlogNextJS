import * as React from 'react';

export interface ContainerProps {
  padding?: string;
  border?: boolean;
  children?: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  width?: boolean;
  name?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}
