var myApp = {
  bootstrap: function () {
    return Promise.resolve()
  },
  mount: function () {
    console.log("Mounted Angular 1");
    console.log(window);
    return Promise.resolve().then(function () {
      document.getElementById('here').innerHTML = "Hello1";
    })
  },
  unmount: function () {
    console.log("unmounted Angular 1");
    return Promise.resolve()
  },
}

window.singleSpa.registerApplication('myApp', myApp, function activityFunction(location) {
  return location.hash.startsWith('#/view1');
})

window.singleSpa.start()