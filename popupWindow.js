const modalContainer = document.querySelector('.modal-container');
// const closeBtn = document.querySelector('.closeBtn');
const seeProject = document.querySelector('.seeProject');
const modal = document.querySelector('.modal');
// array to store element
const projectList = {
  project1: {
    name: 'Tonic',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: new Image(),
    technologies: ['html', 'css', 'javascript'],
    link_live_version: new URL('https://www.google.com'),
    link_to_source: new URL('https://www.google.com'),
    description: ['Canpoy', 'Backend dev', 2015],
  },
};

seeProject.addEventListener('click', () => {
  modalContainer.classList.add('show');

  // add header
  const header = document.createElement('h2');
  header.innerHTML = projectList.project1.name;
  header.className = 'work-txt-js';
  modal.appendChild(header);
  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);

  // add the second line
  const subtitle = document.createElement('h6');
  // subtitle.innerHTML = projectList.project1.description[0];
  subtitle.classList.add('first-element-ul-js');
  modal.appendChild(subtitle);
  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);

  // the ul contains dev and year
  const ulist = document.createElement('ul');
  let li = document.createElement('li');
  // li.innerHTML = projectList.project1.description[1];
  li.classList.add('ul-li-js');
  const li1 = document.createElement('li');
  // li1.innerHTML = projectList.project1.description[2];
  ulist.classList.add('list-project-js');
  ulist.appendChild(li);
  ulist.appendChild(li1);
  modal.appendChild(ulist);
  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);

  // add img
  const img = document.createElement('img');
  img.innerHTML = projectList.project1.featured_image;
  img.src = '/assets/images/Snapshoot-Portfolio.png';
  img.classList.add('snapshoot-potofolio-js');
  modal.appendChild(img);
  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);

  // add paragraph
  const p = document.createElement('p');
  p.innerHTML = projectList.project1.text;
  p.classList.add('work-paragraph-js');
  modal.appendChild(p);
  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);
  // add technologies
  const technology = document.createElement('ul');
  technology.className = 'work-buttons-js ';
  // work buttons
  for (let i = 0; i < 3; i += 1) {
    li = document.createElement('li');
    li.classList.add('list-btn-js');
    li.innerHTML = projectList.project1.technologies[i];
    // add style
    // li.classList.add('work-buttons');
    technology.appendChild(li);
  }
  modal.appendChild(technology);
  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);
});