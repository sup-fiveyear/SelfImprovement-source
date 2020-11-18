// 类 es6  类来调用的静态属性  私有的实例属性   共享的原型属性

// as 断言成xxx类型
// ! 非空断言
// ?  链判断运算符 有值取值 没值返回undefined

class Pointer {
  public x!: number; // 表示实例上有这个属性，非空断言
  public y!: number;
  constructor(x: number, y?: number, ...args: number[]) {
    // 这些参数 函数中的使用方式 这里都可以使用
    this.x = x;
    this.y = y as number; // 因为 y可以不存在，这里就可以使用断言
  }
  static a = 1;
}
let pointer = new Pointer(1, 2, 3, 4, 5, 6);

// （public private protected） readonly 类的修饰符 三个状态的修饰符主要针对的是继承这种场景
// public 表示 父类本身 子类 外面 都可以获取这个属性 默认不写就是public
// protected 受保护的  父类本身 子类 能访问到这个属性
// private 只有自己能访问到

// 如果constructor 被标识成了 private 或者 proteced 则此类不能被 new，被标识成了private 不能被子类继承
class Animal {
  private name!: string; // 主要是为了初始化时偷懒不设置初始值

  public readonly age!: number;
  protected constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  static type = "动物";
  static getName() {
    //  静态属性 和 静态方法 通过类来调用的就是静态的 (是可以被继承的)
    return "动物类";
  }
  say() {
    console.log("say");
  }
}
class Cat extends Animal {
  readonly address: any = { a: 1 };
  constructor(name: string, age: number, address: any) {
    // 构造函数中调用 -> 父类构造函数,并将其this指向当前实例（cat）
    super(name, age);
    // this.address = address;
    // readonly 表示初始化后不能在被修改了
  }
  static getName() {
    // 子类重写父类的方法
    console.log(super.getName()); // 静态方法中的super指代的是父类ben本身
    return "猫";
  }
  say() {
    super.say(); // Aniaml.prototype 原型中的super指代的是 父类的原型
    console.log("cat say");
  }
  // 属性访问器 , 来访问私有属性
  private _eat: string = ""; // vue defineProperty
  get eat() {
    return this._eat; // this指向使用eat属性的那个实例
  }
  set eat(newVal) {
    console.log(newVal, "-----");
    this._eat = newVal;
  }
}
let tom1 = new Cat("Tom1", 10, "美国");
let tom2 = new Cat("Tom2", 10, "美国");

console.log(Cat.getName());

tom2.eat = "hello";
console.log(tom2.eat);

export {};
