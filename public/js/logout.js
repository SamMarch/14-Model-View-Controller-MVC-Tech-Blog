const logoutBtn = document.querySelector("#logoutBtn");

logoutBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch("/api/auth/logout", {
    method: "POST",
  });
  if (res.ok) {
    window.location.href = "/";
  } else {
    alert("Failed to log out");
  }
});
