declare global {
  type $DeepPartial<T> = { [P in keyof T]?: $DeepPartial<T[P]> }
  type $NullType<T> = T | null
  type $NullUndefinedType<T> = T | null | undefined
  type $VoidFunc = (() => void) | undefined
  type $MapType<T> = Record<number | string, T>
}
