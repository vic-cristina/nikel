const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
// let cashIn = [];
// let cashOut = [];

let data = {
  transactions: [],
};

document.getElementById("button-logout").addEventListener("click", logout);
document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    window.location.href = "transactions.html";
  });

//CHALLENGE -  REMOVE ENTRY
//document.querySelector("delete-button").addEventListener("click", removeEntry);

//ADD MONETARY ENTRY
document
  .getElementById("transaction-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector(
      'input[name="type-input"]:checked'
    ).value;

    data.transactions.unshift({
      value: value,
      type: type,
      description: description,
      date: date,
    });

    saveData(data);
    e.target.reset();
    myModal.hide();
    getCashIn();
    getCashOut();
    getTotal();

    alert("Success! May the Goddess be with you");
  });

checkLogged();

function checkLogged() {
  if (session) {
    sessionStorage.setItem("logged", session);
    logged = session;
  }
  if (!logged) {
    window.location.href = "index.html";
    return;
  }

  const dataUser = localStorage.getItem(logged);
  if (dataUser) {
    data = JSON.parse(dataUser);
  }

  getCashIn();
  getCashOut();
  getTotal();

  console.log("Check logged data", data);
}

function logout() {
  sessionStorage.removeItem("logged");
  localStorage.removeItem("session");

  window.location.href = "index.html";
}

function getCashIn() {
  const transactions = data.transactions;

  const cashIn = transactions.filter((item) => item.type == "1");
  console.log(transactions);
  console.log("cash_in", cashIn);
  if (cashIn.length) {
    let cashInHtml = ``;
    let limit = 0;

    if (cashIn.length > 5) {
      limit = 5;
    } else {
      limit = cashIn.length;
    }

    for (let index = 0; index < limit; index++) {
      const arr = cashIn;
      console.log("cashin LAST RESORT", cashIn);
      cashInHtml += `                    

      <div class="row mb-4">
      <div class="col-12">
        <div class="container p-0">
          <div class="row">
            <div
              class="col-12 d-flex justify-content-between align-items-center"
            >
              <h3 class="mr-2 fs-2">R$${cashIn[index].value.toFixed(2)}</h3>
              <button class="delete-button py-0" onclick="removeEntry(${index})">
              <i class="bi bi-trash-fill fs-3"></i>
            </button>                            
            </div>
          </div>
        </div>

        <div class="container p-0">
          <div class="row">
            <div class="col-12 d-flex justify-content-between">
              <p class="align-self-end my-0">${cashIn[index].description}</p>
              <p class="align-self-end my-0">${cashIn[index].date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
    }
    document.getElementById("cash-in-list").innerHTML = cashInHtml;
  }
}

function getCashOut() {
  const transactions = data.transactions;

  const cashOut = transactions.filter((item) => item.type == "2");
  console.log("cash_out", cashOut);
  if (cashOut.length) {
    let cashOutHtml = ``;
    let limit = 0;

    if (cashOut.length > 5) {
      limit = 5;
    } else {
      limit = cashOut.length;
    }

    for (let index = 0; index < limit; index++) {
      cashOutHtml += `                    
      <div class="row mb-4">
      <div class="col-12">
        <div class="container p-0">
          <div class="row">
            <div
              class="col-12 d-flex justify-content-between align-items-center"
            >
              <h3 class="mr-2 fs-2">R$${cashOut[index].value.toFixed(2)}</h3>
              <button class="delete-button py-0" id="delete-button">
                <i class="bi bi-trash-fill fs-3"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="container p-0">
          <div class="row">
            <div class="col-12 d-flex justify-content-between">
              <p class="align-self-end my-0">${cashOut[index].description}</p>
              <p class="align-self-end my-0">${cashOut[index].date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>      
      `;
    }
    document.getElementById("cash-out-list").innerHTML = cashOutHtml;
  }
}

/* function getCashOut() {
  const transactions = data.transactions;
  const cashOut = transactions.filter((item) => item.type == "2");
  console.log("cash_out", cashOut);
}
 */

function getTotal() {
  const transactions = data.transactions;
  let total = 0;
  transactions.forEach((item) => {
    if (item.type == "1") {
      total += item.value;
    } else {
      total -= item.value;
    }
  });
  document.getElementById("total").innerHTML = `R$ ${total.toFixed(2)}`;
}

function removeEntry(entry) {
  const localStorage = localStorage.getItem(logged);
  console.log("entry", entry);
  console.log(localStorage);
}

function saveData(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}
