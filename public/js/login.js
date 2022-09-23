const loginForm = document.querySelector("#loginForm");
const submitBtn = document.querySelector("#submitBtn");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const data = { username, password };
  submitBtn.disabled = true;
  submitBtn.innerHTML = "Logging in...";
  fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Login";
      if (res.ok) {
        window.location.href = "/dashboard";
      }
    })
    .catch((err) => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Login";
      alert(err);
    });
});

/* try refactoring to async await */
