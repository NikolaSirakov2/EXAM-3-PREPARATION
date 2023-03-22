class PartiesManager {


    getAll = () => {

        let sessionId = JSON.parse(localStorage.getItem('loggedUser')).sessionId;

        return makeAPICall(SERVER_URL + "/parties", {
            headers: {
                "identity" : sessionId,
            }
        })
    }

    search = (keyword) => {

        let sessionId = JSON.parse(localStorage.getItem('loggedUser')).sessionId;

        return makeAPICall(SERVER_URL + "/parties-search", {
            headers: {
                "identity" : sessionId,
                "partyName" : keyword
            }
        
        })
    }
}