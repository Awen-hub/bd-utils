import { isFloat } from "./isFloat";
import { reverseString } from "../string/reverseString";

const formater = new Intl.NumberFormat("en-US");
/**
 * @memberof Number
 * @name splitWithThousands
 * @description 每3位数字用","切分
 * @param {number | string} num - 需要格式化的数字
 * @returns - {string} -返回格式化后的字符串
 */
const splitWithThousands = (num: number | string): string => {
  const numStr = isFloat(num) ? String(num) : String(num) + ".0";
  let [intPart, decimalPart] = numStr.split(".");
  intPart = formater.format(Number(intPart));
  decimalPart = formater.format(Number(reverseString(decimalPart)));
  return isFloat(num) ? intPart + "." + reverseString(decimalPart) : intPart;
};

export { splitWithThousands };
