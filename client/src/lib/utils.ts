import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const materialIcon = (name: string, className?: string) => {
  return className ? `material-icons ${className}` : "material-icons";
};
