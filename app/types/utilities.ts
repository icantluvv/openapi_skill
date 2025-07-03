export type DeepRequired<T> = T extends object
    ? {
          [P in keyof T]-?: DeepRequired<T[P]>;
      }
    : T;

export type DeepNonNullable<T> = T extends object
    ? { [P in keyof T]-?: DeepNonNullable<NonNullable<T[P]>> }
    : NonNullable<T>;
