const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 600,
  interval: 3000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const materialboxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialboxed);

const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy,{
    scrollOffset: 50
});