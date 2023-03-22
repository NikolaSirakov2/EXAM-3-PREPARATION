class DetailsController {
    constructor(partiesManager) {
      this.partiesManager = partiesManager;
    }
  
    render = () => {
      
      let detailsContainer = getElement("detailsContainer");
      detailsContainer.innerHTML = "";
  
        this.partiesManager.getAll().then((data) => {
        this.renderDetailsContainer(data, detailsContainer);
      });
    };
  
  
    renderDetailsContainer = (list, container) => {
       
        let card = document.createElement("div");
        card.classList.add("detailsCard");
        
        card.innerHTML = `
                            <img src="${list[0].picture}" class="card-img-top" alt="...">
                            <p class="card-text">${list[0].slogan}</p>
                            
            <div class="card-body">
              <h1 class="card-title">Leader names</h1>
              <h5>Всички знайни и незнайни войни загинали в борбата за свобода и справедливост</h5>
              <a href="#voteForUs" class="btn btn-primary">vote for us</a>
              <a href="#results" class="btn btn-primary">view results</a>
            </div>`;
    
        container.appendChild(card);
      
    };
  }