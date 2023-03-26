class ViewController {
  constructor() {
    window.addEventListener("load", this.handleHashChange);
    window.addEventListener("hashchange", this.handleHashChange);
    this.userManager = new UserManager();
    this.partiesManager = new PartiesManager();
    this.detailsManager = new DetailsManager();
    this.resultsManager = new ResultsManager(this.detailsManager);

    this.resultsController = new ResultsController(this.resultsManager);
    this.registerController = new RegisterController(this.userManager);
    this.logInController = new LogInController(this.userManager);
    this.detailsController = new DetailsController(this.userManager, this.resultsManager, this.resultsController);
    this.listingController = new ListingController(this.partiesManager, this.detailsManager, this.detailsController, this.userManager);
  }

  handleHashChange = (e) => {
    const hash = location.hash.slice(1) || PAGE_IDS[1];

    if (!PAGE_IDS.includes(hash)) {
      location.hash = "error";
      return;
    }

    PAGE_IDS.forEach((pageId) => {
      let element = getEl(pageId);
      if (hash === pageId) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });

    switch (hash) {
      case "register":
        this.registerController.render();
        break;
      case "login":
        localStorage.loggedUser = [];
        this.logInController.render();
        break;
      case "listings":
        this.listingController.render();
      case "details":
        this.detailsController.render();
      case "results":
        this.resultsController.render();
    }
  };
}

let viewController = new ViewController();
