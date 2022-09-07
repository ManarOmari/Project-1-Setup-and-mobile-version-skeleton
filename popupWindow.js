//const btn=document.querySelector('#seeProjectPopup');
const modal_container = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
//var span = document.getElementsByClassName("close")[0];
var multi_stories = document.querySelector(".multi-stories");
// array to store element
const projectList = {
  project1: {
    title: "Keeping track of hundreds of components",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: new Image().src='/assets/images/bg1.png',
    technologies: ["ruby and rails", "css", "javascript"],
    liveBtnImge: new Image(),
    SourceBtn: new Image(),
  },
};

document.querySelectorAll("#seeProjectPopup").forEach((n) =>
  n.addEventListener("click", () => {
    modal_container.style.display = "block";
    let div = document.createElement("div");
    div.classList.add('card');
    let closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "&times;";
    let image=document.createElement('img');
     image = projectList.project1.featured_image;
    let cardConatiner= document.createElement('div');
    cardConatiner.classList.add('cardContainer');
    let heder = document.createElement("h2");
    div.innerHTML = projectList.project1.title;
     
// When the user clicks on <span> (x), close the modal
    closeBtn.onclick=function(e) {
      modal.style.display = "none";
    };
    div.appendChild(closeBtn);
   // div.append(image);
    modal.appendChild(div);
    cardConatiner.appendChild(heder);
    modal.appendChild(cardConatiner);
    modal_container.appendChild(modal);
    document.body.appendChild(modal_container);
  })
);


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
