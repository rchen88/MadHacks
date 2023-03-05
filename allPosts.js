// Get all the post elements
var postElements = document.querySelectorAll('.post');

// Loop through the post elements
postElements.forEach(function(postElement) {
  // Get the post like count element
  var postLikesElement = postElement.querySelector('.post-likes');

  // Get the initial like count
  var likesCount = parseInt(postLikesElement.textContent);

  // Add a click event listener to the post like button
  postLikesElement.addEventListener('click', function() {
    if (!postLikesElement.classList.contains('active')) {
      postLikesElement.classList.add('active');
      postLikesElement.textContent = (likesCount + 1) + ' likes';
    } else {
      postLikesElement.classList.remove('active');
      postLikesElement.textContent = likesCount + ' likes';
    }
  });
});
