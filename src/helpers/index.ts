import { Model } from "../types";

const lowercase = (s: string) => s.toLowerCase();

export const mapApiToModel = (arr: any): Model => {
  // this should be a tuple
  const newArrayLowercase: Model[][] = arr.map(([key, value]) => [
    lowercase(key),
    value,
  ]);

  const toObjects = Object.fromEntries(newArrayLowercase);
  return toObjects;
};
