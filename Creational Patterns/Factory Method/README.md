```
abstract class Creator {
  public abstract factoryMethod(type: string): Product

  public someOperation(): string {
    const product = this.factoryMethod()
    return `Creator: The same creator's code has just worked with ${product.operation()}`
  }
}
```

工廠模式定義了 creator 的 interface，但由子類決定要實例化哪一個 child class，讓 class 的 initialization 推遲到子類中。
也讓在寫 creator 部分的 code 時，不需要知道實際創建的 product (child class) 是什麼。