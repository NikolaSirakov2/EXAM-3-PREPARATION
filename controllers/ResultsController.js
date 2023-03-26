class ResultsController {

    constructor(ResultsManager){
        this.resultsManager = ResultsManager;
    }

    render = () => {
        
        
        let array = this.resultsManager.getResults();
        console.log(array);

        let body = getEl('resultsTable');
        body.innerHTML = "";

        array.then(party => {

            party.forEach(element => {
                
                let tr = document.createElement('tr');
                let partyTd = document.createElement('td');
                partyTd.innerText = element.partyId;
                let resultTd = document.createElement('td');
                resultTd.innerText = element.voters;

                tr.append(partyTd,resultTd);
                body.append(tr);
                
                
            });
        })

    }
}
