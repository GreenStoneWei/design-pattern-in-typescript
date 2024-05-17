interface Pizza {
  prepare(): string
  bake(): string
  cut(): string
  box(): string
}

class orderPizza {
  constructor(type: string) {}
  public getPizza(type: string): Pizza {
    let pizza: Pizza

    // here we have a lot of if statements, where may change in the future
    if (type === 'cheese') {
      pizza = new CheesePizza()
    } else if (type === 'greek') {
      pizza = new GreekPizza() // might need to remove this item
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza()
    } else {
      throw new Error('No such pizza')
    }

    // here doesn't change much
    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
    return pizza
  }
}

class CheesePizza implements Pizza {
  prepare() {
    return 'CheesePizza prepare'
  }
  bake() {
    return 'CheesePizza bake'
  }
  cut() {
    return 'CheesePizza cut'
  }
  box() {
    return 'CheesePizza box'
  }
}

class GreekPizza implements Pizza {
  prepare() {
    return 'GreekPizza prepare'
  }
  bake() {
    return 'GreekPizza bake'
  }
  cut() {
    return 'GreekPizza cut'
  }
  box() {
    return 'GreekPizza box'
  }
}

class PepperoniPizza implements Pizza {
  prepare() {
    return 'PepperoniPizza prepare'
  }
  bake() {
    return 'PepperoniPizza bake'
  }
  cut() {
    return 'PepperoniPizza cut'
  }
  box() {
    return 'PepperoniPizza box'
  }
}

class ClamPizza implements Pizza {
  prepare() {
    return 'ClamPizza prepare'
  }
  bake() {
    return 'ClamPizza bake'
  }
  cut() {
    return 'ClamPizza cut'
  }
  box() {
    return 'ClamPizza box'
  }
}
