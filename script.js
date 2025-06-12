let posts = [
  {id: 1, content: "Welcome to my first blog post!"},
  {id: 2, content: "Hope you enjoy."}
];

function renderPosts() {
  const list = document.getElementById('blog-list');
  list.innerHTML = '';
  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'blog-post';
    div.innerHTML = `
      <div class="blog-content" id="content-${post.id}">${post.content}</div>
      <div class="blog-post-buttons">
        <button class="edit" onclick="editPost(${post.id})">Edit</button>
        <button class="remove" onclick="removePost(${post.id})">Remove</button>
      </div>
    `;
    list.appendChild(div);
  });
}

function addPost() {
  const content = prompt("Enter your blog post:");
  if (content) {
    const id = posts.length ? posts[posts.length-1].id + 1 : 1;
    posts.push({id, content});
    renderPosts();
  }
}

function removePost(id) {
  if (confirm("Remove this post?")) {
    posts = posts.filter(p => p.id !== id);
    renderPosts();
  }
}

function editPost(id) {
  const post = posts.find(p => p.id === id);
  const newContent = prompt("Edit your post:", post.content);
  if (newContent !== null) {
    post.content = newContent;
    renderPosts();
  }
}

window.onload = renderPosts;
