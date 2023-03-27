class DetailsController {

  constructor(userManager, resultsManager, resultsController) {
    this.userManager = userManager;
    this.resultsManager = resultsManager;
    this.resultsController = resultsController;
  }

  render = (partie) => {
    
    
    try{

    let id = partie._id;

    let cardLeft = getEl("detailsContainerLeft");
    cardLeft.innerHTML = "";

    let img = document.createElement("img");
    img.src = partie.picture;

    let slogan = document.createElement("span");
    slogan.innerText = partie.slogan;

    cardLeft.append(img, slogan);

    let cardRight = getEl("detailsContainerRight");
    cardRight.innerHTML = "";

    let leaderName = document.createElement("h3");
    leaderName.innerText = partie.leader;

    let agitation = document.createElement("p");
    agitation.innerText = partie.agitation;

    

    let voteForUs = document.createElement("a");
    voteForUs.innerText = "Vote for Us";
    voteForUs.classList.add("btn", "btn-primary");

    voteForUs.addEventListener("click", (e) => {
      let voteLog = JSON.parse(localStorage.loggedUser);
      

      if (voteLog.hasVoted === true) {
        alert("You already voted!");
      } else {
        voteLog.hasVoted = true;
        localStorage.setItem("loggedUser", JSON.stringify(voteLog));
        console.log(id);
            this.userManager.vote(id)
                      .then(result => {
                          this.render(result);
                      })
                      .catch(err =>{
                        alert(err)
                      })
      }
    });

    let viewResultsBtn = document.createElement("a");
    viewResultsBtn.innerText = "Results";
    viewResultsBtn.classList.add("btn", "btn-primary");

    viewResultsBtn.onclick = (event) => {
      event.preventDefault();

      location.hash = "results";
      
    };

    cardRight.append(leaderName, agitation, voteForUs, viewResultsBtn);

  }  catch {
      console.log("Parties is still undefined, but when we load next page everything will work fine!");
    }
  };
}

