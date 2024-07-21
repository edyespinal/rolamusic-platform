export type RequiredFields<T> = {
  [K in keyof T as Exclude<T[K], undefined | null> extends never
    ? never
    : K]: T[K];
};
