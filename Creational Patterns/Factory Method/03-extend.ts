// pizza store 中沒有 new 實體的 pizza class (否則就會依賴具體的 class)
abstract class PizzaStore3 {
  public orderPizza(type: string): basePizza {
    const pizza: basePizza = this.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
    return pizza
  }

  abstract createPizza(type: string): basePizza
}

class NYPizzaStore3 extends PizzaStore3 {
  createPizza(type: string): basePizza {
    if (type === 'cheese') {
      return new NYStyleCheesePizza3()
    } else {
      return new NYStyleCheesePizza3()
    }
  }
}

abstract class basePizza {
  name: string
  dough: string
  sauce: string
  toppings: string[] = []

  prepare() {
    console.log('Preparing ' + this.name)
    console.log('Tossing dough...')
    console.log('Adding sauce')
    console.log('Adding toppings')
    for (let i = 0; i < this.toppings.length; i++) {
      console.log(' - ' + this.toppings[i] + '\n')
    }
  }

  bake() {
    console.log('Bake for 25 mins at 350 celsius degree')
  }

  cut() {
    console.log('Cutting the pizza')
  }

  box() {
    console.log('Place pizza in box')
  }

  getName() {
    return this.name
  }
}

class NYStyleCheesePizza3 extends basePizza {
  constructor() {
    super()
    this.name = 'NY style sauce and cheese pizza'
    this.dough = 'thin crust dough'
    this.sauce = 'marinara sauce'
    this.toppings.push('Reggiano cheese')
  }
}

function testPizza() {
  const nyStore: PizzaStore3 = new NYPizzaStore3()
  const pizza = nyStore.orderPizza('cheese')
  console.log(`Got ${pizza.getName()}!`)
}

testPizza()
// Preparing NY style sauce and cheese pizza
// Tossing dough...
// Adding sauce
// Adding toppings
//  Reggiano cheese
// Bake for 25 mins at 350 celsius degree
// Cutting the pizza
// Place pizza in box
// Got NY style sauce and cheese pizza!
