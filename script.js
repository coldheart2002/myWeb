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
  fullNameLabel = document.getElementById("fullNameLabel"),
  previewContainer = document.getElementById("previewContainer"),
  closeBtn = document.getElementById("closeBtn"),
  adminStatus = document.getElementById("adminStatus"),
  courseLabel = document.getElementById("courseLabel"),
  bloodTypeLabel = document.getElementById("bloodTypeLabel"),
  guardianLabel = document.getElementById("guardianLabel");

function adminLogin() {
  let adminUserName = document.getElementById("adminUserName").value;
  let adminPassword = document.getElementById("adminPassword").value;

  if (adminUserName === "admin" && adminPassword === "admin") {
    allContainer.style.display = "block";
    adminLoginContainer.style.display = "none";
  } else {
    adminStatus.innerHTML = "Invalid";
    setTimeout(function () {
      adminStatus.innerHTML = "ADMIN LOGIN";
    }, 2000);
    console.log(adminUserName);
    console.log(adminPassword);
  }
}

function dataPreview() {
  console.log("preview btn");
  let fName = document.getElementById("firstName").value,
    mInit = document.getElementById("middleInitial").value,
    nickName = document.getElementById("nickName").value,
    lName = document.getElementById("lastName").value,
    course = document.getElementById("courseInput").value,
    bloodType = document.getElementById("bloodTypeInput").value,
    guardian = document.getElementById("guardianInput").value;

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
    fullNameLabel.innerHTML = `${lName}, ${fName} ${mInit} "${nickName}"`;
    courseLabel.innerHTML = `${course}`;
    bloodTypeLabel.innerHTML = `${bloodType}`;
    guardianLabel.innerHTML = `${guardian}`;
  }

  closeBtn.onclick = function () {
    previewContainer.style.display = "none";
    box.style.opacity = "1";
  };
}
adminBtn.addEventListener("click", adminLogin);
previewBtn.addEventListener("click", dataPreview);

home.addEventListener("click", () => {
  accountInfo.style.display = "none";
  homeContainer.style.display = "flex";
  box.style.display = "none";
  previewContainer.style.display = "none";
});

account.addEventListener("click", () => {
  console.log("account clicked");
  accountInfo.style.display = "block";
});

signup.addEventListener("click", () => {
  console.log("signup clicked");
  signUpContainer.style.opacity = "1";
  accountInfo.style.display = "none";
  box.style.display = "flex";
  homeContainer.style.display = "none";
});

login.addEventListener("click", () => {
  console.log("login clicked");
  alert("not yet available!");
  accountInfo.style.display = "none";
});
