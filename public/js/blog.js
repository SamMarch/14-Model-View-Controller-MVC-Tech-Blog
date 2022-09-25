const blogSubmitForm = document.getElementById("blogSubmitForm");
const blogSubmitBtn = document.getElementById("blogSubmitBtn");

blogSubmitForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const data = { title, content };
  blogSubmitBtn.disabled = true;
  blogSubmitBtn.innerHTML = "Submitting...";
  const res = await fetch("/api/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  blogSubmitBtn.disabled = false;
  blogSubmitBtn.innerHTML = "Submit";
  if (res.ok) {
    window.location.href = "/dashboard";
  } else {
    alert("Failed to submit blog");
  }
});
