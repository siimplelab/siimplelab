(() => {
  async function init() {
    // Wait for the DOM to be fully loaded
    await new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', resolve);
    });

    setTimeout(() => {
      
      // document.querySelector('nav.bootsnav.brand-center').style.setProperty('visibility', 'visible');
      document.querySelector('nav.bootsnav.brand-center').style.setProperty('opacity', '1');
    }, 1000);
  }

  init();
})();
