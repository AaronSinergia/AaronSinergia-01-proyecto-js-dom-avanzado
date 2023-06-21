// BODY HOME DATA BOX 1
const bodyHomeData = () => {
  const divDataBox = document.createElement('div');
  const h3 = document.createElement('h3');
  divDataBox.className = 'data_box_1';
  h3.className = 'datos_personales';
  h3.innerText =
    './RESIDENCIA/BCN.html ./EDAD/32_AÑOS.css ./ACTUALMENTE/DXC/HelpDeskIt.js';
  divDataBox.appendChild(h3);
  const h3Word = document.createElement('h3');
  h3Word.className = 'frase';
  h3Word.textContent =
    '"Los peces muertos son los únicos que siguen la corriente"';
  divDataBox.appendChild(h3Word);
  document.body.appendChild(divDataBox);
};
// BODY HOME CURLY BRACKETS AND PRINCIPAL PHOTO
const bodyHomeCurly = () => {
  const divCurly = document.createElement('div');
  const h2CurlyLeft = document.createElement('h2');
  divCurly.className = 'curly_and_aaronphoto';
  h2CurlyLeft.className = 'curlybracket';
  h2CurlyLeft.textContent = '{';
  divCurly.appendChild(h2CurlyLeft);
  const aaronImg = document.createElement('img');
  aaronImg.className = 'aaron_photo';
  aaronImg.src = '../src/img/aaron.png';
  aaronImg.alt = 'aaron_photo';
  divCurly.appendChild(aaronImg);
  const h2CurlyRigth = document.createElement('h2');
  h2CurlyRigth.className = 'curlybracket';
  h2CurlyRigth.textContent = '}';
  divCurly.appendChild(h2CurlyRigth);
  document.body.appendChild(divCurly);
};
// BODY HOME DATA BOX 2
const bodyHomeData2 = () => {
  const divDataBox = document.createElement('div');
  const h3 = document.createElement('h3');
  const h3Two = document.createElement('h3');
  divDataBox.className = 'data_box_2';
  h3.className = 'my_aspirations';
  h3.innerText =
    'Mis aspiraciones son entrar en el mundo de la programación como web developer y mejorar día a día como frontend dónde creo que tengo mucho que decir y aportar.';
  h3Two.className = 'my_work_valors';
  h3Two.textContent =
    'Actualmente trabajo para una empresa IT la cual ofrece servicios a un importante banco a nivel mundial. A demás, soy músico y trabajo en ocasiones como músico de sesión, y grabando música para otros artistas.';
  divDataBox.appendChild(h3);
  divDataBox.appendChild(h3Two);
  document.body.appendChild(divDataBox);
};
// EMAIL
const mailContact = () => {
  const h3Mail = document.createElement('h3');
  const linkMail = document.createElement('a');
  h3Mail.className = 'mail_contact';
  linkMail.className = 'mail_link';
  linkMail.href = 'mailto:a.carrasco9@me.com';
  linkMail.textContent = 'Abierto a nuevos proyectos';
  h3Mail.appendChild(linkMail);
  document.body.appendChild(h3Mail);
};

// RRSS ICONS
const renderRRSSIcons = () => {
  const articleRRSS = document.createElement('article');
  const githubLink = document.createElement('a');
  const githubIMG = document.createElement('img');
  articleRRSS.className = 'rrss';
  githubLink.className = 'github_link';
  githubLink.href = 'https://github.com/AaronSinergia?tab=repositories';
  githubIMG.className = 'github';
  githubIMG.src = '../src/img/GitHubLogo.png';
  githubIMG.alt = 'github_logo';
  githubLink.appendChild(githubIMG);
  articleRRSS.appendChild(githubLink);
  const linkedinLink = document.createElement('a');
  const linkedinIMG = document.createElement('img');
  linkedinLink.className = 'linkedin_link';
  linkedinLink.href = 'https://www.linkedin.com/in/aaron-carrasco-romero/';
  linkedinIMG.className = 'linkedin';
  linkedinIMG.src = '../src/img/1384014.png';
  linkedinIMG.alt = 'linkedin_logo';
  linkedinLink.appendChild(linkedinIMG);
  articleRRSS.appendChild(linkedinLink);
  const netlifyLink = document.createElement('a');
  const netlifyIMG = document.createElement('img');
  netlifyLink.className = 'netlify_link';
  netlifyLink.href = 'https://app.netlify.com/teams/aaronsinergia/sites';
  netlifyIMG.className = 'netlify';
  netlifyIMG.src = '../src/img/netlify_logo_icon_169924.png';
  netlifyIMG.alt = 'netlify_logo';
  netlifyLink.appendChild(netlifyIMG);
  articleRRSS.appendChild(netlifyLink);
  document.body.appendChild(articleRRSS);
};

// RENDER HOME
export const renderHome = () => {
  const bodyOfHtml = document.querySelector('body');
  const h1 = document.createElement('h1');
  h1.className = 'title_name';
  h1.textContent = '.../AARON_CARRASCO';
  bodyOfHtml.appendChild(h1);
  bodyHomeData();
  bodyHomeCurly();
  bodyHomeData2();
  mailContact();
  renderRRSSIcons();
  renderFooter();
};

renderHome();
