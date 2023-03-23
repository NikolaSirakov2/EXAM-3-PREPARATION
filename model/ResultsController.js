class ResultsController {

    constructor(party, results){
        this.party = party
        this.results = results
    }

    render = () => {

        let name = getElement("partieName")
        let resultsPercetage = getElement("partieResults")

        name.innerText = "300";
        resultsPercetage.innerText = "12%"
    }
}