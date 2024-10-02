/*
  Unknown
  unknown is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.
*/

let value: unknown;
value = 5;  // OK
value = "Hello";  // OK

if (typeof value === "string") {
  console.log(value.toUpperCase());  // Safe to use as string
}