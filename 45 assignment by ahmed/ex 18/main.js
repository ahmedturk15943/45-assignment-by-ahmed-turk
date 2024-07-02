var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesTovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orignal Order:", countriesTovisit);
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
console.log("Still in Orignal Order:", countriesTovisit);
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
console.log("Still in Orignal Order:", countriesTovisit);
console.log("Orignal Array Reversed:", countriesTovisit.reverse());
console.log("Back to Orignal Order:", countriesTovisit.reverse());
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());
console.log("Orignal Array Reversed Again:", countriesTovisit.reverse());
