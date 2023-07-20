

function receivesAFunction(callback) {
    callback();

} 

function returnsANamedFunction () {
   return function thisIsMyFunction () {
        console.log ('Hi');
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log ('bye');
    }
}