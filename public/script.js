document.addEventListener('DOMContentLoaded', () => {
  const getStartedBtn = document.querySelector('.btn.primary');
  const demoBtn = document.querySelector('.btn.secondary');

  getStartedBtn.addEventListener('click', () => {
    alert('Welcome to TaskFlow! Start organizing your tasks today.');
  });

  demoBtn.addEventListener('click', () => {
    window.open('https://taskflow-devops-1.onrender.com', '_blank');
  });
});