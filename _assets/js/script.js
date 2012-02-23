window.slider = new Swipe(
  document.getElementById('wrapper'), {
  callback: function(e, pos) {
    setCurrentSlide();
  },
  });
