(function() {
  var module = {
    "mid": (function(module = { exports: {} }) {
      const name = 'xxx'
      module.exports = {
        name
      }
    })
  }

  !function() {
    var ccc = 'ccc'
    console.log(ccc)
  }()
  console.log(333)
})()