import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  const imgSrc = src.startsWith("http") ? src : `/img/svg/${src}`;
  return <img src={imgSrc} alt={src} width={width} height={height} />;
};
