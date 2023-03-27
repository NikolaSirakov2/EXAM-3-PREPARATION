class RegisterController {

    constructor(userManager) {
        this.userManager = userManager;
    }

    render = () => {
        let link = getEl("link")
        let headerText = getEl("headerText")
        link.innerText = "";
        headerText.innerText = "";
        let form = getEl("regForm");
        let userManag = getEl("userManag");

    
        userManag.innerText = "LogIn";
        userManag.href = "#login";

        form.onsubmit = (event) => {
                event.preventDefault();

                const {username: {value: username}, 
                    password: {value: password}, 
                    confirmPass: {value: confirmPass}} = event.currentTarget;

                console.log(username, password, confirmPass);

                if(password === confirmPass){
                this.userManager.register(username, password)
                .then(data => {
                    location.hash = 'login';
                })
                .catch(error => {
                    alert(error)
                })
                } else {
                    alert("Confirm your password!!!")
                }

                form.reset();
        }
    }
}