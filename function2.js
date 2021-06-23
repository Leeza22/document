var name = 'ccc';

(function() {
  if (name === undefined) {
    var name = 'nnn'
    console.log('hhhhh', name)
  } else {
    console.log('hello', name)
  }
})();