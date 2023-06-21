// FOOTER
const renderFooter = () => {
  const createFooter = document.createElement('footer');
  createFooter.className = 'footer';
  createFooter.textContent = `© Todos los derechos reservados - 2023`;
  document.body.appendChild(createFooter);
};
