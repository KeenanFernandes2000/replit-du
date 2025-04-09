import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const materialIcon = (name: string, className?: string) => {
  return (
    <span className={`material-icons ${className || ""}`}>{name}</span>
  );
};
