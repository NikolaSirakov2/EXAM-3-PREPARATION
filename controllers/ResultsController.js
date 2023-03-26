class ResultsController {

    constructor(ResultsManager){
        this.resultsManager = ResultsManager;
    }

    render = () => {
        
        let name = getEl("partieName")
        let resultsPercetage = getEl("partieResults");

        name.innerText = "300";
        resultsPercetage.innerText = "12%"
    }
}