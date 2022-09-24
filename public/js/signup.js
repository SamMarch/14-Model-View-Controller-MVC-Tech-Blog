const signupForm = document.querySelector("#signupForm");
const signupSubmitBtn = document.querySelector("#signupSubmitBtn");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.querySelector("#signupUsername").value;
  const password = document.querySelector("#signupPassword").value;
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const data = { username, password, firstName, lastName, email };

  signupSubmitBtn.disabled = true;
  signupSubmitBtn.innerHTML = "Signing up...";
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  signupSubmitBtn.disabled = false;
  signupSubmitBtn.innerHTML = "Sign up";
  if (res.ok) {
    window.location.href = "/dashboard";
  } else {
    alert("Failed to sign up");
  }
});
