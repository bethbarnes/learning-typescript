function barista(name) {
    console.log("Here is a drink for " + name);
}
var customer = {
    name: "Beth"
};
barista(customer.name);
var Barista = /** @class */ (function () {
    function Barista() {
    }
    Barista.callOrder = function (name) {
        console.log("hello, " + name);
    };
    return Barista;
}());
Barista.callOrder("Working");
