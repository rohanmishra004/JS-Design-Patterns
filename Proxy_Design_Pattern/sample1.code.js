// Proxy Design Pattern

// Scenario - External API service

function CrytoCurrencyAPI() {
    this.getValue = function (coin) {
        console.log('External API called ...');
        switch (coin) {
            case 'Bitcoin':
                return '$8500';
            case 'LiteCoin':
                return '$50';
            case 'Ethereum':
                return '$175'
        }
    }
} 


const api = new CrytoCurrencyAPI()
console.log("----------Without Proxy----------")
console.log(api.getValue("Bitcoin"))
console.log(api.getValue("LiteCoin"))
console.log(api.getValue("Ethereum"))
console.log(api.getValue("Bitcoin"))
console.log(api.getValue("LiteCoin"))
console.log(api.getValue("Ethereum"))

// console.log(api.getValue('Bitcoin'));  

/**External API called ...
$8500 */


//Now the basic setup for api is done , and we are able to get the values but in scenarios where we need to make multiple requests to the same api and this will reduce the api speed

//It would be better if we donot have to make the network request call each time , we can create a proxy which has an additional property of cache so instead of calling the api we will call the proxy which will be much faster 

//For the first time , the api will call the external api for cryptocurrency , but at the same time it will store data in cache and then when the same request is made , instead of making an external call we can get data from cache




//Proxy function

function CrytoCurrencyAPIproxy() {
    //mapping instance
    this.api = new CrytoCurrencyAPI();
    this.cache = {};

    this.getValue = function (coin) {
        if (this.cache[coin] == null) {
            console.log('Data not in cache')
            this.cache[coin] = this.api.getValue(coin)
        }

        //if we already have cache in our coin we dont need to make an external api call , and we can extract data directly from cache itself
        return this.cache[coin]
    }
}


//create an instance of proxy obejct

console.log("----------With Proxy----------")
const proxy = new CrytoCurrencyAPIproxy()
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("LiteCoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("LiteCoin"))
console.log(proxy.getValue("Ethereum"))







