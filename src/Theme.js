function Theme() {
  let theme = "dark";

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    theme = "light";
  }

  const switchTheme = () => {
    if (theme === "light") localStorage.theme = "dark";
    else localStorage.theme = "light";
  };

  return switchTheme;
}

export default Theme;
