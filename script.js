  const pass = document.getElementById("pass");
  const confirm = document.getElementById("confirm-pass");

  confirm.addEventListener("input", () => {
    if (confirm.value !== pass.value) {
      confirm.setCustomValidity("Passwords do not match");
    } else {
      confirm.setCustomValidity("");
    }
  });