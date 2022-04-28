var get = (element) => {
    return document.querySelector(element)
}

const data = () => {
    let name = get("#name").value;
    let email = get("#email").value;
    let password = get("#password").value;
    console.log(name, email, password);
}

let btn = document.querySelector("#submit");
btn.addEventListener('click', data);