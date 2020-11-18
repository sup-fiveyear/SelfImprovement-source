// 函数想要表示类型  function函数关键字来声明  表达式方式来声明

// 函数增加类型需要考虑入参和函数的返回值（ 如果变量声明后不赋值也不定义类型，那么就是any类型）

// 1)
// function sum1(a:string, b:string):string {
//     return a+b;
// }

// 2） 如果使用的是表达式 你给他定义了类型，你可以把一个可以兼容的函数赋予给他
type Sum = (a1: string, b1: string) => string;
let sum: Sum = (a, b) => {
  return a + b;
};
// sum('1','2');

// 3) 函数入参：可选参数、默认值和剩余参数

// let sum = (a:string,b?:string) =>{
// }

// let sum = (a:string,b:string='b') =>{
//     console.log(b);
// }

// let sum = (...args: any[]) => {
// }

// 4） 函数的重载
/**
 * 注意函数重载需要为另外的类型进行一一具体实现，否则会报错
 * @param value
 */

// 123 => [1,2,3];
//'123'=>['1','2','3']
function toArray(value: number): number[];
function toArray(value: string): string[];
function toArray(value: number | string): number[] | string[] {
  if (typeof value == "string") {
    return value.split("");
  } else {
    return value
      .toString()
      .split("")
      .map((item) => parseInt(item));
  }
}
toArray(123);
export {};
