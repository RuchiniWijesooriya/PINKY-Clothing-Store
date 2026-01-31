 // Optional: Featured product "View Details" buttons
const detailButtons = document.querySelectorAll('.btn-secondary');
detailButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Product details page coming soon!');
  });
});

// CTA button
const ctaBtn = document.querySelector('.cta .btn-main');
ctaBtn.addEventListener('click', () => {
  alert('Start your style journey now!');
});