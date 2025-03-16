// iife : immediately invoked function expression
// IIFE is used to avoid polluting the global scope.

(function foo() {
  console.log('foo');
})();

(  (name) => {
  console.log(`${name} bar`);
})('space');