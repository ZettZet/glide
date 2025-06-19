export const isDefined = <T>(value: T): value is NonNullable<T> =>
  value != null;

export function assert(
  condition: boolean,
  message: Error | string = "condition was false"
): asserts condition {
  if (!condition) {
    const errorMessage =
      typeof message === "string" ? new Error(message) : message;
    throw new errorMessage
  }
}
