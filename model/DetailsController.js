class DetailsController {
    constructor(partiesManager) {
      this.partiesManager = partiesManager;
    }
  
    render = () => {
      
      let detailsContainer = getElement("detailsContainer");
      detailsContainer.innerHTML = "";
  
       

        this.partiesManager.getAll()
        .then((data) => {
        this.renderDetailsContainer(data[1].picture, data[1].slogan , detailsContainer);
      });
    };
  
  
    renderDetailsContainer = (picture, slogan, container) => {
       
        let card = document.createElement("div");
        card.classList.add("detailsCard");
        
        card.innerHTML = `  <span>
                            <img src="${picture}" class="card-img-top" alt="...">
                            <h1 class="card-text">${slogan}</h1>
                            </span>
            <div class="card-body">
              <h1 class="card-title">Leader names</h1>
              <h5>Всички знайни и незнайни воини загинали в борбата за свобода и справедливост</h5>
              <a href="#results" class="btn btn-primary">view results</a>
            </div>`;

            let  vote = createElement("button");
            vote.id = "voteForUs"
            vote.innerText = "vote for us";
            
            
            vote.addEventListener("click", (e) => {
              let vote = JSON.parse(localStorage.loggedUser);
              if(vote.hasVoted === true){
                  alert("You already voted!")
              } else {
              vote.hasVoted = true;
              localStorage.setItem('loggedUser', JSON.stringify(vote))
            }})
        
            card.append(vote)
    
        container.appendChild(card);
      
    };
  }