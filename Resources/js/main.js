// Sticky menu background
window.addEventListener('scroll', function(){
  if(this.window.scrollY > 150) {
    document.querySelector('#nav-bar').style.opacity = 0.8;
  } else {
    document.querySelector('#nav-bar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#nav-bar a, .btn').on('click', function(event) {
  if(this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -100
      },
      800
    );
  }
});

