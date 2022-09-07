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
    featured_image: new Image(),
    technologies: ["ruby and rails", "css", "javascript"],
    liveBtnImge: new Image(),
    SourceBtn: new Image(),
  },
};

document.querySelectorAll("#seeProjectPopup").forEach((n) =>
  n.addEventListener("click", () => {
    modal_container.style.display = "block";
    modal_container.classList.add('multi-stories');
    let div = document.createElement("div");
    div.classList.add('card');
    //let closeBtn = document.createElement("span");
    //closeBtn.classList.add("close");
   // closeBtn.innerHTML = "&times;";
    let image=document.createElement('img');
     image.innerHTML = projectList.project1.featured_image;
     image.src='/assets/images/bg1.png';
    let cardConatiner= document.createElement('div');
    cardConatiner.classList.add('cardContainer');
    let heder = document.createElement("h2");
    heder.innerHTML = projectList.project1.title;

    let listOfBtns = document.createElement("ul");
    listOfBtns.classList.add('projectBTNs');
    let listItem= document.createElement('li');
    
    for(let i=0;i<projectList.project1.technologies.length;i+=1){
      let btns=document.createElement('button');
      btns.className= '.projectBTNs li button';
      btns.innerHTML=projectList.project1.technologies[i];
      listItem.append(btns);
      listOfBtns.appendChild(listItem);
    }
   let text= document.createElement('p');
   //text.classList.add('text');
   text.innerHTML=projectList.project1.description;
     
// When the user clicks on image x, close the modal
   image.onclick=function(e) {
      modal.style.display = "none";
    };
    //div.appendChild(closeBtn);
    div.appendChild(image);
    modal.appendChild(div);
    cardConatiner.appendChild(heder);
   
    cardConatiner.appendChild(listOfBtns);
    cardConatiner.appendChild(text);
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
