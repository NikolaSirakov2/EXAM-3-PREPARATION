class ResultsManager {

    constructor(detailsManager) {
        this.detailsManager = detailsManager;
    }

    getResults = () => {

        let sessionId = JSON.parse(localStorage.getItem('loggedUser')).sessionId;

        return makeAPICall(SERVER_URL + "/results", {
            headers: {
                "identity" : sessionId,
            }
        
        })
    }
}