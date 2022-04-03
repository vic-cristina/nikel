const myModal = new bootstrap.Modal("#registerModal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//LOG-IN
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const checkSession = document.getElementById("session-check").checked;

  const account = getAccount(email);

  if (!account) {
    alert("Oops, we weren't able to verify your info");
    return;
  }

  if (account) {
    if (account.password !== password) {
      alert("Oops, we weren't able to verify your info");
      return;
    }
    saveSession(email, checkSession);
    window.location.href = "home.html";
  }
});

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

function checkLogged() {
  if (session) {
    sessionStorage.setItem("logged", session);
    logged = session;
  }
  if (logged) {
    saveSession(logged, session);
    window.location.href = "home.html";
  }
}

function saveAccount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
  if (saveSession) {
    localStorage.setItem("session", data);
  }

  sessionStorage.setItem("logged", data);
}

function getAccount(key) {
  const account = localStorage.getItem(key);
  if (account) {
    return JSON.parse(account);
  } else {
    return "";
  }
}

// Bootstrap Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
