const editBlogBtn = document.querySelector("#editBlogBtn");
const deleteBlogBtn = document.querySelector("#deleteBlogBtn");
const editCommentBtn = document.querySelector("#editCommentBtn");
const deleteCommentBtn = document.querySelector("#deleteCommentBtn");
const blog_id = location.pathname.split("/").pop();

// if (editBlogBtn) {
//   editBlogBtn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const title = document.getElementById("title").value;
//     const content = document.getElementById("content").value;
//     const data = { title, content };
//     const res = await fetch(`/api/blog/${blog_id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (res.ok) {
//       window.location.href = `/blog/${blog_id}`;
//     } else {
//       alert("Failed to edit blog");
//     }
//   });
// } // end of editBlogBtn

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

// if (editCommentBtn) {
//   editCommentBtn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const content = document.getElementById("content").value;
//     const data = { content };
//     const res = await fetch(`/api/comment/${comment_id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (res.ok) {
//       window.location.href = `/blog/${blog_id}`;
//     } else {
//       alert("Failed to edit comment");
//     }
//   });
// } // end of editCommentBtn

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
