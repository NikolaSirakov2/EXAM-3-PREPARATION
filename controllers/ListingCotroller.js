class ListingController {
  constructor(partiesManager, detailsManager, detailsController, userManager) {
    this.partiesManager = partiesManager;
    this.detailsManager = detailsManager;
    this.detailsController = detailsController;
    this.userManager = userManager;
  }

  render = () => {
    
    let inputSearch = getEl("searchPartiesInput");
    let partiesContainer = getEl("partiesContainer");
    partiesContainer.innerHTML = "";

    inputSearch.oninput = debounce((e) => {
      const keyword = e.target.value;

      this.partiesManager.search(keyword).then((result) => {
        partiesContainer.innerHTML = "";
        this.renderPartiesContainer(result, partiesContainer);
      });
    }, 500);

    this.partiesManager.getAll().then((data) => {
    
      this.renderPartiesContainer(data, partiesContainer);
    });
  };

  renderPartiesContainer = (list, container) => {
    

    list.forEach((parties) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "200px";
      card.style.background = "coral";

      card.innerHTML = `<img src="${parties.picture}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${parties.name}</h5>
            <p class="card-text">${parties.slogan}</p>
          </div>`

      let vote = createElement("a");
      vote.classList.add("btn", "btn-primary");
      vote.innerText = "vote";

      let detailsBtn = document.createElement("a");
      detailsBtn.classList.add("btn", "btn-primary");
      detailsBtn.innerText = "Details";

      

      vote.addEventListener("click", (e) => {
        let voteLog = JSON.parse(localStorage.loggedUser);

        if (voteLog.hasVoted === true) {
          alert("You already voted!");
        } else {
          voteLog.hasVoted = true;
          localStorage.setItem("loggedUser", JSON.stringify(voteLog));
              this.userManager.vote(parties.id)
                        .then(result => {
                            this.render(result);
                        })
                        .catch(err =>{
                          alert(err)
                        })
        }
      });

      detailsBtn.onclick = (e) => {
        e.preventDefault();
        this.detailsManager.getDetails(parties.id)
            .then(result => {
              console.log(result);
                this.detailsController.render(result);
            })
            location.hash = 'details';
    }

      card.append(detailsBtn, vote);

      container.appendChild(card);
    });
  };
}
