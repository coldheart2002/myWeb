const adminBtn = document.getElementById("adminBtn"),
  adminLoginContainer = document.getElementById("adminLogin"),
  previewBtn = document.getElementById("previewBtn"),
  account = document.getElementById("account"),
  accountInfo = document.getElementById("accountInfo"),
  login = document.getElementById("login"),
  signup = document.getElementById("signup"),
  contentContainerAll = document.getElementById("contentContainerAll"),
  home = document.getElementById("home"),
  homeContainer = document.getElementById("homeContainer"),
  box = document.getElementById("box"),
  signUpContainer = document.getElementById("signUpContainer"),
  allContainer = document.getElementById("allContainer"),
  fullNameLabel = document.getElementById("fullName"),
  previewContainer = document.getElementById("previewContainer"),
  closeBtn = document.getElementById("closeBtn");

function adminLogin() {
  let adminUserName = document.getElementById("adminUserName").value;
  let adminPassword = document.getElementById("adminPassword").value;

  if (adminUserName === "ADMIN" && adminPassword === "ADMIN") {
    allContainer.style.display = "block";
    adminLoginContainer.style.display = "none";
  } else {
    console.log(adminUserName);
    console.log(adminPassword);
  }
}

function dataPreview() {
  let fName = document.getElementById("firstName").value;
  let mInit = document.getElementById("middleInitial").value;
  let nickName = document.getElementById("nickName").value;
  let lName = document.getElementById("lastName").value;

  if (
    fName === undefined ||
    fName === "" ||
    lName === undefined ||
    lName === ""
  ) {
    alert("Fill up your Name!");
  } else {
    previewContainer.style.display = "Flex";
    box.style.opacity = "0.5";
    fullNameLabel.innerHTML = ` ${lName}, ${fName} ${mInit} "${nickName}"`;
  }

  closeBtn.onclick = function () {
    previewContainer.style.display = "none";
    box.style.opacity = "1";
  };
}
adminBtn.addEventListener("click", adminLogin);
previewBtn.addEventListener("click", dataPreview);

home.addEventListener("click", () => {
  box.style.display = "none";
  accountInfo.style.display = "none";
  homeContainer.style.display = "flex";
});

account.addEventListener("click", () => {
  console.log("account clicked");
  accountInfo.style.display = "block";
});

signup.addEventListener("click", () => {
  console.log("signup clicked");
  signUpContainer.style.display = "flex";
  accountInfo.style.display = "none";
  homeContainer.style.display = "none";
});

login.addEventListener("click", () => {
  console.log("login clicked");
  alert("not yet available!");
});
