myApp.service("mathService", function() {
    this.add = function(x, y) {
        return parseInt(x) + parseInt(y);
    }
    this.sub = function(x, y) {
        return parseInt(x) - parseInt(y);
    }
    this.mul = function(x, y) {
        return parseInt(x) * parseInt(y);
    }
    this.div = function(x, y) {
        return parseInt(x) / parseInt(y);
    }
})