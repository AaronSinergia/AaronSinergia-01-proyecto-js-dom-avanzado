// NAVBAR
export const renderNavbar = () => {
  const divNavBar = document.createElement('div');
  const navHome = document.createElement('a');
  divNavBar.className = 'navbar';
  navHome.className = 'principal_links_bar';
  navHome.href = '/home';
  navHome.textContent = './Página_Principal';
  const navExperience = document.createElement('a');
  navExperience.className = 'principal_links_bar';
  navExperience.href = '/experience';
  navExperience.textContent = './Experiencia';
  const navProjects = document.createElement('a');
  navProjects.className = 'principal_links_bar';
  navProjects.href = '/projects';
  navProjects.textContent = './Proyectos_en_Producción';
  divNavBar.appendChild(navHome);
  divNavBar.appendChild(navExperience);
  divNavBar.appendChild(navProjects);
  document.body.appendChild(divNavBar);

  const clickListener = (ev) => {
    ev.preventDefault();
    const hrefSelect = ev.target.getAttribute('href');
    if (hrefSelect === '/projects') {
      renderProjects();
    } else if (hrefSelect === '/experience') {
      renderExperience();
    } else if (hrefSelect === '/home') {
      headHome();
    }
  };

  const bodySelector = document.querySelector('body');
  bodySelector.addEventListener('click', clickListener);
};
