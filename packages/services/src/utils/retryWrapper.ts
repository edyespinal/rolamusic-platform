export function retryWrapper<
  T extends { [key: string]: (...args: any[]) => Promise<any> },
>(methods: T): T {
  const retry = (fn: (...args: any[]) => Promise<any>) => {
    const maxRetries = 3;
    const retryDelay = 1000;

    return async (...args: any[]) => {
      let lastError: unknown;
      for (let i = 0; i < maxRetries; i++) {
        try {
          return await fn(...args);
        } catch (error) {
          lastError = error;
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
      }
      throw lastError;
    };
  };

  return Object.fromEntries(
    Object.entries(methods).map(([key, value]) => [key, retry(value)])
  ) as T;
}
