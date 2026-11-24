if (!sessionStorage.getItem("bg-mark-seen")) {
  document.documentElement.classList.add("animate-mark");
  sessionStorage.setItem("bg-mark-seen", "1");
}
