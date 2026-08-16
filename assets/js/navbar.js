(function () {
  var navbar = document.querySelector('.page-navbar');

  if (!navbar) return;

  var links = Array.prototype.slice.call(navbar.querySelectorAll('[data-section]'));
  var sectionLinks = links.filter(function (link) {
    return link.dataset.section !== 'top';
  });
  var ticking = false;

  function setActiveSection() {
    var activeSection = 'top';
    var activationLine = navbar.offsetHeight + 24;

    sectionLinks.forEach(function (link) {
      var section = document.getElementById(link.dataset.section);

      if (section && section.getBoundingClientRect().top <= activationLine) {
        activeSection = link.dataset.section;
      }
    });

    links.forEach(function (link) {
      var isActive = link.dataset.section === activeSection;
      link.classList.toggle('is-active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(setActiveSection);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('load', setActiveSection);
  setActiveSection();
})();
