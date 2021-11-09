import { SvgIconProps } from '../interfaces';

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);
