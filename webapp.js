/*
var self = this;
if (self.document) {
}
else {
}
*/
define(function() {
    return function(data) {
        document.querySelector('#x').innerHTML = JSON.stringify(data);
    };
});
