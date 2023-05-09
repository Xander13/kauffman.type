const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark-mode');
};

toggleSwitch.addEventListener('change', toggleDarkMode);