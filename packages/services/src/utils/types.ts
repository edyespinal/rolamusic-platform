export type RequiredFields<T> = {
  [K in keyof T as Exclude<T[K], undefined | null> extends never
    ? never
    : K]: T[K];
};

export type ValuesOf<T> = T[keyof T];

type PowOf2 = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024;
type SizeUnit = "B" | "KB" | "MB" | "GB";
export type FileSize = `${PowOf2}${SizeUnit}`;
