export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay = 300
): (...args: Parameters<T>) => ReturnType<T> {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>): ReturnType<T> => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);

    return fn(...args);
  };
}
