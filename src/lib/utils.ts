import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Позволяет правильно соединять классы, с учетом последовательности
 * классов tailwind
 * @example
 * <p className={cn({ 'text-neutral-700 line-through': task.isDone })}>
 *   {task.task}
 * </p>
 * 
 * <div
 * ref={ref}
 * className={cn(
 *   'rounded-lg border bg-card text-card-foreground shadow-sm',
 *   className
 * )}
 * {...props}
 * />
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
