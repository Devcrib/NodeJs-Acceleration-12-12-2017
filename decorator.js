class Phone{
  constructor(name,model){
    this.name = name;
    this.model = model;
    this.price = 100000;
  }

  buy(){
    cart.add("Added "+ this.name + " "+ this.model+ " ==> "+this.price);
  }
}

class PhoneWithScreenGuard{
  constructor(phone){
    this.phone = phone;
    this.price = phone.price + 2000;
    this.name = phone.name;
    this.model = phone.model;
  }

  buy(){
    cart.add("Added Screenguard (+"+2000+") ===> "+this.price );
  }

}

class PhoneWithCase{
  constructor(phone){
    this.phone = phone;
    this.price = phone.price + 1000;
    this.name = phone.name;
    this.model = phone.model;
  }

  buy(){
    cart.add("Added Case (+"+1000+") ===> "+this.price );
  }

}

var cart = (function(){
  var teller = "";

  return{
    add : function(msg){ teller += msg + "\n";},
    checkout : function(){ console.log(teller)},
  }
})();

var phone = new Phone("Iphone","6");
phone.buy();

new PhoneWithScreenGuard(phone).buy();
new PhoneWithCase(phone).buy();

cart.checkout()
