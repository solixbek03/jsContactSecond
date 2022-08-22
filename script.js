let elForm = document.querySelector(".js-hero__form");
let elInputName = elForm.querySelector(".js-hero__input-firstname");
let elInputSurname = elForm.querySelector(".js-hero__input-surname");
let elInputEmail = elForm.querySelector(".js-hero__input-email");
let elInputTel = elForm.querySelector(".js-hero__input-tel");
let elInputDate = elForm.querySelector(".js-hero__input-date");

let elResults =document.querySelector(".js-results")

let contacts = []

let renderContacts = function() {
  elResults.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    let elResultsLi =document.createElement("li");
    elResultsLi.classList.add("my-3", "bg-danger", "rounded-4", "ps-3");

    // ==============================================Full name =======================
    let elFullname = document.createElement("p");
    elFullname.classList.add("mb-1");
    elFullname.textContent = `Fullname: ${contacts[i].name} ${contacts[i].surName}`

    // ================================================= email ===============================
    let elEmail = document.createElement("a");
    let elEmailp = document.createElement("p");
    elEmailp.textContent = "email: "
    elEmailp.classList.add("mb-1");

    elEmailp.appendChild(elEmail)
    elEmail.href = `email:${elInputEmail.value}`;
    elEmail.textContent = `${contacts[i].email}`

    // ================================================ telephone number ========================
    let elTel = document.createElement("a");
    let elTelp = document.createElement("p");
    elTelp.textContent = "Tel:+998 "
    elTelp.classList.add("mb-1");

    elTelp.appendChild(elTel)
    elTel.href = `tel:${elInputTel.value}`;
    elTel.textContent = `${contacts[i].tel}`

    // ===================================================== age =============================
    let elDate = document.createElement("p");
    elDate.classList.add("mb-1");
    elDate.textContent = `Birthday: ${contacts[i].date}`
    
    elResultsLi.append(elFullname, elEmailp, elTelp, elDate)
    elResults.appendChild(elResultsLi);
  }
}


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let InputNameVall = elInputName.value.trim().toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  let InputSurameVall = elInputSurname.value.trim().toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  let InputEmailVall = elInputEmail.value.trim();
  let InputTelVall = elInputTel.value.trim();
  let InputDateVall = elInputDate.value.trim();

  elInputName.value = "";
  elInputSurname.value = "";
  elInputEmail.value = "";
  elInputTel.value = "";
  elInputDate.value = "";

  let contact = {
    name: InputNameVall,
    surName: InputSurameVall,
    email: InputEmailVall,
    tel: InputTelVall,
    date: InputDateVall
  }

  contacts.push(contact)

  console.log(contacts)
  renderContacts();
})