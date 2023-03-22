class RegisterController {

    constructor(userManager) {
        this.userManager = userManager;
    }

    render = () => {

        let form = getElement("regForm");

        form.onsubmit = (event) => {
                event.preventDefault();

                const {username: {value: username}, 
                    password: {value: password}, 
                    confirmPass: {value: confirmPass}} = event.currentTarget;

                console.log(username, password, confirmPass);

                this.userManager.register(username, password)
                .then(data => {
                    location.hash = 'login';
                })
                .catch(error => {
                    alert(error)
                })

                form.reset();
        }
    }
}