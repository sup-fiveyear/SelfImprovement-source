// 1. 数字 字符串 布尔类型 (所有的类型 : 后面的都是类型 = 后面的都是值)
let num: number = 10;
let str: string = "zf";
let bool: boolean = true;

// 3. 元组  表示长度和个数都 （内容存放类型）都限制好了
let tuple: [string, number, boolean] = ["zf", 11, true];

// 可以向元组中添加内容 ，不能通过索引添加属性
// 只能放入元组中已经声明过的类型
tuple.push(true);

// ！！数组和元组的区别 -> 一个可以保存多种类型的数据，一个只能保存一类类型

// 5. 数组(存放"一类"类型的集合)
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["1", "2"];
let arr3: (number | string)[] = [1, 2, 3, "4"]; // “联合类型”  -> 并集，能够拥有两种类型
let arr4: Array<number | string> = [1, 2, 3, "5"]; // 可以通过泛型来定义，等同如上代码

// 2a.同构枚举（枚举内保存的元素都是数字类型） 默认可以正向取出也可以反举
enum SPY_USER_ROLE {
  USER, // 默认下标是从0开始
  ADMIN,
  MANAGER,
}
SPY_USER_ROLE.USER; // 正举
SPY_USER_ROLE[0]; // 反举

// 2b.异构枚举（可以在枚举中放不同的类型, 只不过会失去自动向下推断能力）,非数字的枚举值失去反举能力
// 默认的数字或者赋值的数字可以自动向下推断

enum DIFF_USER_ROLE {
  USER = "a",
  ADMIN = 1,
  MANAGER,
}
DIFF_USER_ROLE["a"]; // 会报错,不能反向获取非字符串的枚举值
DIFF_USER_ROLE[1];

// 3？？？.常量枚举 只是提供了 一个类型
const enum USER_ROLE { // 语义化
  USER,
  ADMIN,
}
console.log(USER_ROLE.USER);

// 枚举应用场景有哪些？

// any 类型 不进行类型检测的类型 相当于没有写类型

let arr: any = ["zf", 11, true, {}]; // 能不写any 尽量不写any

// null 和 undefined
// 任何类型的子类型  ,在严格模式下 只能将null 和 undefined 赋予给 null 和 undefined （一一对应的）

let str2: number | string | undefined;
str2 = undefined;

// void 空类型 只能接受 null 和undefined 。 一般用于函数的返回值
// 函数默认的返回值是undefined, 需要注意默认在严格模式下不能将null 赋给void
// let v:void;
// v = null;

// 字符串 数字 布尔类型 元组 数组 枚举 any null 和 undefiend

// never类型 永远不 是任何类型的子类型 可以把never赋予给任何类型
// 永远达不到的情况有三种 1） 错误  2） 死循环  3） 类型判断时会出现never 4) 完整性保护

function MyError(): never {
  throw new Error("");
}
function whileTrue(): never {
  while (true) {}
}
function byType(val: string | number) {
  if (typeof val == "string") {
    val;
  } else if (typeof val == "number") {
    val;
  } else {
    val; // never
  }
}
// let n:never = MyError();

// Symbol BigInt   symbol 表示独一无二 元编程会用到 stringToFlag iterator ....
let s1: symbol = Symbol("123");
let s2 = Symbol("123");
console.log(s1 == s2);

// BigInt
export let num1: bigint = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
let num2 = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(2);

console.log(Number);

// 对象类型 非原始数据类型 object

const create = (obj: object) => {};
// create(1); // 基本类型
// create(null);
create({});
create([]);
create(function () {});

// 默认全局下本来就有name

// string | number | boolean | 数组 | 元组 | never | null | undefined | void
// symbol bigint
// object

export {}; // 防止模块间的干扰
