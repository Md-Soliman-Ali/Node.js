class product {
    constructor(vat) {
        this.vat = vat
    }
    buyProduct(price, discount) {
        return (price -= ((price * discount) / 100)) + ((price * this.vat) / 100);
    }
}

class shirt extends product {
    
}

let tShirt = new shirt(15);
let price = tShirt.buyProduct(100, 10);
console.log(price)