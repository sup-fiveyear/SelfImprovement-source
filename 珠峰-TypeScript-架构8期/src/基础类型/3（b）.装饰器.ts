// 装饰器 前端中使用 stage-3  可能后期会有变化

// 扩展属性和方法，满足开放-封闭原则

/**
 *
 * @param target 修饰的类
 */
function addSay(target: Function) {
  target.prototype.say = function () {
    console.log("say");
  };
}
/**
 *
 * @param target 当前实例本身
 * @param key 装饰的属性
 */
function toUppcaseCase(target: any, key: string) {
  let value = target[key];
  Object.defineProperty(target, key, {
    get() {
      return value.toUpperCase();
    },
    set(newValue) {
      value = newValue;
    },
  });
}
/**
 * 高阶函数，拓展装饰器能够接受的参数
 * @param num
 */
function double(num: number) {
  return function (target: any, key: string) {
    // 类
    let value = target[key];
    Object.defineProperty(target, key, {
      get() {
        return value * num;
      },
    });
  };
}
/**
 * 装饰方法
 * @param target 类的原型（实例本身）
 * @param key 装饰谁
 * @param descriptor 描述符
 */
function Enum(target: any, key: string, descriptor: PropertyDescriptor) {
  // descriptor => value configurable writable enumberable
  descriptor.enumerable = false;
}

/**
 * 装饰方法的参数
 */
function params() {
  // target: 类的原型， key 代表哪个参数， 参数第几位
  return function (target: any, key: string, index: number) {
    console.log(target, key, index);
  };
}
@addSay // 装饰器是有执行顺序的
class Person {
  say!: Function; // 是为了在使用装饰器时（本身不声明整个函数），防止ts编译器无法装饰器动态添加导致的报错。因此需要声明一下 | 抽象类来一个？
  @toUppcaseCase
  public name: string = "zhufeng";
  @double(3)
  static age: number = 10;
  @Enum
  getName(a: string, @params() xx: string) {}
}

let person = new Person();
console.log(person.name);

// 装饰器只能围绕类来使用 本质上就是一个函数 将类、类中的属性、类中的方法、类中函数的参数进行修饰

export {};
