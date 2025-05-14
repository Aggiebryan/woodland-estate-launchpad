
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Date mask function to format input as MM/DD/YYYY
export function applyDateMask(value: string): string {
  // Remove all non-numeric characters first
  const digitsOnly = value.replace(/\D/g, '');

  // Format the string based on length
  if (digitsOnly.length <= 2) {
    return digitsOnly;
  } else if (digitsOnly.length <= 4) {
    return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2)}`;
  } else {
    return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2, 4)}/${digitsOnly.slice(4, 8)}`;
  }
}

