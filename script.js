try {
  if (!sessionStorage.getItem("bg-mark-seen")) {
    document.documentElement.classList.add("animate-mark");
    sessionStorage.setItem("bg-mark-seen", "1");
  }
} catch {
  // Storage can be unavailable for local files or in restricted browsers.
  document.documentElement.classList.add("animate-mark");
}
