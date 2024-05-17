class SimplePizzaFactory {
  public createPizza(type: string): Pizza {
    let pizza: Pizza
    if (type === 'cheese') {
      pizza = new CheesePizza()
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza()
    } else if (type === 'clam') {
      pizza = new ClamPizza()
    } else {
      throw new Error('No such pizza')
    }
    return pizza
  }
}
