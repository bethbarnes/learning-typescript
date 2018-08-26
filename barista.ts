function barista (name){
  console.log("Here is a drink for " + name)
}

let customer = {
  name: "Beth"
}

barista(customer.name)



class Barista{
  static callOrder(name: string){
    console.log("hello, " + name)
  }
}

Barista.callOrder("Working")
