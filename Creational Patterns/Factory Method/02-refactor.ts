abstract class PizzaStore {
  public orderPizza(type: string): Pizza {
    const pizza: Pizza = this.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
    return pizza
  }

  abstract createPizza(type: string): Pizza
}

class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new NYStyleCheesePizza()
    } else if (type === 'veggie') {
      return new NYStyleVeggiePizza()
    } else {
      return new NYStyleCheesePizza()
    }
  }
}

class NYStyleCheesePizza implements Pizza {
  prepare() {
    return 'NYStyleCheesePizza prepare'
  }
  bake() {
    return 'NYStyleCheesePizza bake'
  }
  cut() {
    return 'NYStyleCheesePizza cut'
  }
  box() {
    return 'NYStyleCheesePizza box'
  }
}

class NYStyleVeggiePizza implements Pizza {
  prepare() {
    return 'NYStyleVeggiePizza prepare'
  }
  bake() {
    return 'NYStyleVeggiePizza bake'
  }
  cut() {
    return 'NYStyleVeggiePizza cut'
  }
  box() {
    return 'NYStyleVeggiePizza box'
  }
}

// example
const nyPizzaStore = new NYPizzaStore()
nyPizzaStore.orderPizza('cheese') // in order Pizza: const pizza = createPizza('cheese')
