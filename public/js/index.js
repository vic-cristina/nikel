const myModal = new bootstrap.Modal("#registerModal");

//CREATE ACCOUNT

document
  .getElementById("create-acc-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("create-email-input").value;
    const password = document.getElementById("create-password-input").value;

    console.log(email, password);

    if (email.length < 5) {
      alert("Ooops! Is that really an e-mail?");
      return;
    }

    if (password.length < 4) {
      alert("Your password must have at least 4 characters");
      return;
    } else {
      saveAccount({
        login: email,
        password: password,
        transactions: [],
      });
      myModal.hide();
      alert("Account created succesfully");
    }
  });

function saveAccount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}

// Bootstrap Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
