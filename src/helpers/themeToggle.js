const themeToggle = (component, darkTheme) => {
  if (component === 'main') {
    if (darkTheme) {
      return 'bg-darkTheme-main';
    }
    return 'bg-lightTheme-main';
  }
  if (component === 'card') {
    if (darkTheme) {
      return 'bg-darkTheme-card';
    }
    return 'bg-lightTheme-card';
  }
  if (component === 'text') {
    if (darkTheme) {
      return 'text-darkTheme';
    }
    return 'text-lightTheme';
  }
};

export default themeToggle;
