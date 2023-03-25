class LogInController {

    constructor(userManager) {
        this.userManager = userManager;
    }

    render = () => {
        
        let ar = getElement("ar")
        let header = document.getElementById("headerText");
        let userManag = getElement("userManag");

        ar.innerText = "";
        header.innerText = "";
        userManag.innerText = "Register";
        userManag.href = "#register";
        
        let form = getElement("loginForm");

        form.onsubmit = (event) => {
                event.preventDefault();

                const {username: {value: username}, 
                    password: {value: password}, 
                    } = event.currentTarget;

                console.log(username, password);

                this.userManager.logIn(username, password)
                .then(data => {
                    ar.innerText = "Listings";
                    userManag.innerText = "LogOut";
                    location.hash = 'listings';
                    header.innerText = `Hi, ${username}! Welcome to E-lections!`
                })
                .catch(error => {
                    alert(error)
                })

                form.reset();
        }
    }
}