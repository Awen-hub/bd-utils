import { trunc } from "./trunc";

/**
 * @memberof Number
 * @name isFloat
 * @description 判断一个数是否为浮点数
 * @param {number} num - 传入的数
 * @returns {boolean}
 */
const isFloat = (num: number | string): boolean => {
  if (typeof num === "string") return num.includes(".");
  return trunc(num) !== num;
};

export { isFloat };
