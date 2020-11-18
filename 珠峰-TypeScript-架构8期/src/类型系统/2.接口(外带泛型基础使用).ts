// 接口主要用于：描述对象的形状（辩型法？） 、 根据接口 提供一些新的类型，为别人使用（d.ts）。

// interface 可以描述 （属性 方法 类） 的 形状

// interface 和 type的区别：
// 接口可以被实现被继承 type不能；type可以写联合类型，接口不可以写联合类型。
// 能用接口用接口，不能用换成type

// 1) 描述对象
// interface IFullName {
//     firstName:'张'|'赵',
//     lastName:string
// }

// const fullName = (obj:IFullName):IFullName =>{
//     return obj
// }
// fullName({firstName:'张',lastName:'f'})

// 2) 描述函数
// interface IFullName {
//     (firstName: string, lastName: string): string;
// }

// const fullName2: IFullName = (firstName,lastName) => {
//   return firstName + lastName
// }

// 3） 混合类型,描述函数和属性 计数器  用的比较少，通常用于一个函数返回一个函数，返回的函数有属性
// interface ICount {
//     count:number,
//     ():number,
// }
// const fn:ICount = () => {
//     return ++fn.count
// }
// fn.count = 0
// console.log(fn())
// console.log(fn())

// <重点>接口特性

// interface IVegetables {
//     taste: string,
//     color: string,
// }

// ！！！ shape 比 接口中的字段多的时候，可以通过如下方式不改变原有接口实现：

// 1) 如果我定义的值比接口中的多可以采用 类型断言 直接断言成对应的接口
// const tomato:IVegetables = ({
//     size:10,
//     taste:'sour',
//     color:'red'
// } as IVegetables);

// 2) interface IVegetables { // 多个同名接口会进行合并操作
//     size:number
// }

// 3) 接口可以扩展,通过继承的形式
// interface Itomato extends IVegetables {
//     size:number
// }
// const tomato:Itomato = {
//     size:10,
//     taste:'sour',
//     color:'red'
// };
// console.log(tomato)
// -------------------------------------------

// 4) 可选属性 interface IVegetables {  // ? 可选属性 readonly 仅读属性
//     taste: string,
//     color: string | number, // 联合类型
//     readonly [xxx:string]:any  // 所有属性都能兼容 -> 可索引接口
//     // readonly size?:number,
//     // type?:string
// }
// const tomato: IVegetables = {
//     type:'fruit',
//     taste:'sour',
//     color: 'red',
//     [Symbol(1)]:1
// };

// interface IArr {  表示数组里可以放任意数据类型
//     [key:number]:any
// }
// let arr:IArr = [1,{},'a','v']

// -----------------------------
// ！！！ 接口可以被类来实现
interface Speakable {
  // 接口中的内容都是抽象，没有具体的实现
  name: string | string;
  speak(): void; // 描述类的原型方法 ,注意：此处的void和普通函数不一样，在类中的方法里表示不关心方法的返回值
}
interface ChineseSpeakable {
  speak(): number; // 一旦标识，就必须满足
}
class Speak implements Speakable, ChineseSpeakable {
  speakChinese(): void {
    throw new Error("Method not implemented.");
  }
  name!: string;
  speak(): number {
    return 1;
  }
}

// 抽象类和抽象接口有什么区别？    抽象类可以拥有实现

// 类 抽象类 不能被实例化,只能用来描述类的shape。 被标记abstract的属性或者方法，实现抽象类的子类里必须要实现
abstract class Animal {
  // 抽象类中可以包含抽象方法和抽象属性
  abstract name: string; // 可以没有实现
  eat() {
    console.log("eat");
  }
  abstract test(): string;
}
class Tom extends Animal {
  name!: string;
}
class S extends Animal {
  name!: string;
}
// --------------------------------------------
// 可以描述对象 函数 类  类的实例

class Person {
  // 给这个person增加了属性
  // 在constructor中直接public写属性，等同于 name:string ，能够减少代码量
  constructor(public name: string) {
    this.name = name;
  }
}
interface IClass<T> {
  // 表示是一个构造函数类型（通过new 来标识）
  new (name: string): T; // 这个T可以用类当成类型
}
// {(name:string):any}
// new (name:string)=>any
function createInstance<T>(clazz: IClass<T>, name: string) {
  return new clazz(name);
}
let r = createInstance<Person>(Person, "张三");

// 泛型 就是当调用时传入具体类型，在定义时用一个标识来占位，执行时传入具体类型即可。

// 1.接口可以被扩展 extends
// 2.接口可以描述形状 对象、函数、类 （？ readonly）
// 3.任意类型 可索引的
// 4.接口和抽象类的区别

// 描述形状的，没有具体的实现

export {};
