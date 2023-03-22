class ListingController {
  constructor(partiesManager) {
    this.partiesManager = partiesManager;
  }

  render = () => {
    let inputSearch = getElement("searchPartiesInput");
    let partiesContainer = getElement("partiesContainer");
    partiesContainer.innerHTML = "";

    inputSearch.oninput = debounce((e) => {

        const keyword = e.target.value;

        this.partiesManager.search(keyword).then(result => {
            partiesContainer.innerHTML = '';
            this.renderPartiesContainer(result, partiesContainer)
        })
    }, 500);




    this.partiesManager.getAll().then((data) => {
      this.renderPartiesContainer(data, partiesContainer);
    });
  };


  renderPartiesContainer = (list, container) => {
    list.forEach((parties) => {
      let card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `<img src="${parties.picture}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${parties.name}</h5>
            <p class="card-text">${parties.slogan}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>`;
  
      container.appendChild(card);
    });
  };
}


