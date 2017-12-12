class Request{

  constructor(amount){
    this.amount = amount;
  }

  get(bill){
    let count = Math.floor(this.amount/bill);
    this.amount -= count*bill;
    console.log("Dispense " + count + " $" + bill + " bills");
    return this;
  }

  message(){
    console.log('This is just to put a break in between');
    console.log('');
    return this;
  }
}

function calculate(value) {
    let request = new Request(value);
    request.get(200).message().get(50).message().get(20).message()
    .get(10).message().get(5).message().get(1);
}

calculate(358)

