class ResultsManager {

    constructor(detailsManager) {
        this.detailsManager = detailsManager;
    }


    getResults = () => {

        let sessionId = JSON.parse(localStorage.getItem('loggedUser')).sessionId;

        let overallResults = null;

        return makeAPICall(SERVER_URL + "/results", {
            headers: {
                "identity" : sessionId,
            }
        })
        .then(results => {
                let allVoters = results.reduce((acc, parties) => {
                    return acc + parties.voters;
                }, 0)

                return results.map(party => {

                    party.voters = Number((party.voters / allVoters * 100).toFixed(2));
                    return party;

                }).sort((a, b) => {
                    return b.voters - a.voters;
                })
        })
        .then(overall => {
            
            overallResults = overall;

            let partyArr = [];

            overall.forEach(party => {

                partyArr.push(this.detailsManager.getDetails(party.partyId));

            });

            return Promise.all(partyArr)
        })
        .then(res => {

            console.log(res);

            for (let i = 0; i < res.length; i++) {

                overallResults[i].partyId = res[i].name
            }

            return overallResults;
        })
    }
}