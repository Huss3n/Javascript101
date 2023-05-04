// use strict mode for entire scripts
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";

// use strict mode for functional scopes
function myStrictFunction() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}
function myNotStrictFunction() {
  return "I'm not strict.";
}

// Strict mode for modules
function strictFunction() {
  // because this is a module, I'm strict by default
}
export default strictFunction;

// Strict mode for classes
class C1 {
  // All code here is evaluated in strict mode
  test() {
    delete Object.prototype;
  }
}
new C1().test(); // TypeError, because test() is in strict mode

const C2 = class {
  // All code here is evaluated in strict mode
};

// Code here may not be in strict mode
delete Object.prototype; // Will not throw error
