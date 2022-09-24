const commentSubmitForm = document.querySelector("#commentSubmitForm");
const commentSubmitBtn = document.querySelector("#commentSubmitBtn");
const blog_id = location.pathname.split("/").pop();

commentSubmitForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const comment = document.querySelector("#comment").value;
  const data = { comment };
  commentSubmitBtn.disabled = true;
  commentSubmitBtn.innerHTML = "Submitting...";
  const res = await fetch(`/api/blog/${blog_id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  commentSubmitBtn.disabled = false;
  commentSubmitBtn.innerHTML = "Submit";
  if (res.ok) {
    window.location.href = "/dashboard";
  } else {
    alert("Failed to submit comment");
  }
});
