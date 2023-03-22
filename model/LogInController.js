class LogInController {

    constructor(userManager) {
        this.userManager = userManager;
    }

    render = () => {

        let form = getElement("loginForm");

        form.onsubmit = (event) => {
                event.preventDefault();

                const {username: {value: username}, 
                    password: {value: password}, 
                    } = event.currentTarget;

                console.log(username, password);

                this.userManager.logIn(username, password)
                .then(data => {
                    location.hash = 'listings';
                })
                .catch(error => {
                    alert(error)
                })

                form.reset();
        }
    }
}