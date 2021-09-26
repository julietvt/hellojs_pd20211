const aboutBtn = document.getElementById('about');
aboutBtn.onclick = function () {
  location.assign(
    `${location.origin}${location.pathname === '/' ? '/pages/about.html' : '/'}`
  );
};
