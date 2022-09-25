const editBlogBtn = document.querySelector("#editBlogBtn");
const deleteBlogBtn = document.querySelector("#deleteBlogBtn");
const editCommentBtn = document.querySelector("#editCommentBtn");
const deleteCommentBtn = document.querySelector("#deleteCommentBtn");
const blog_id = location.pathname.split("/").pop();
const cancelEditBtn = document.querySelector("#cancelEditBtn");
const saveEditBtn = document.querySelector("#saveBlogBtn");

if (deleteBlogBtn) {
  deleteBlogBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/blog/${blog_id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      window.location.href = "/dashboard";
    } else {
      alert("Failed to delete blog");
    }
  });
} // end of deleteBlogBtn

if (deleteCommentBtn) {
  deleteCommentBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const comment_id = e.target.dataset.id;
    const res = await fetch(`/api/blog/${blog_id}/comment/${comment_id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      window.location.href = `/blog/${blog_id}`;
    } else {
      alert("Failed to delete comment");
    }
  });
} // end of deleteCommentBtn

// if the editBlogBtn is clicked, then change the title and content fields to be editable
if (editBlogBtn) {
  editBlogBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const edit = document.getElementById("removeHidden");
    const cancel = document.getElementById("addHidden");
    edit.classList.remove("hidden");
    cancel.classList.add("hidden");
  });
} // end of editBlogBtn

if (cancelEditBtn) {
  cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const edit = document.getElementById("removeHidden");
    const cancel = document.getElementById("addHidden");
    edit.classList.add("hidden");
    cancel.classList.remove("hidden");
  });
} // end of cancelEditBtn

if (saveEditBtn) {
  saveEditBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const title = document.getElementById("editBlogTitle").value;
    const content = document.getElementById("editBlogContent").value;
    const data = { title, content };
    const res = await fetch(`/api/blog/${blog_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      window.location.href = `/blog/${blog_id}`;
    } else {
      alert("Failed to edit blog");
    }
  });
} // end of saveEditBtn
