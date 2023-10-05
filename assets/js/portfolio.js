  const tabs = document.querySelectorAll('[data-tab-target]');
  const tabContents = document.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach(tabContent => {
        tabContent.style.display="none";
        tabContent.style.transform = "translateY(30px)";
        tabContent.style.opacity = "0";
      })
      target.style.display="block";
      setTimeout(() => {
        target.style.opacity = "1";
        target.style.transform = "translateY(20px)";
      }, 100)
    })
  })