const categoryButtons = document.querySelectorAll('[data-category]');
const blogPosts = document.querySelectorAll('.blog-post-preview');

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.category;

    categoryButtons.forEach((categoryButton) => {
      const isSelected = categoryButton === button;
      categoryButton.classList.toggle('active', isSelected);
      categoryButton.setAttribute('aria-pressed', String(isSelected));
    });

    blogPosts.forEach((post) => {
      const matchesCategory = selectedCategory === 'all' || post.classList.contains(`cat-${selectedCategory}`);
      post.hidden = !matchesCategory;
    });
  });
});