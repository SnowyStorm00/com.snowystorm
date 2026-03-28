const THEME_STORAGE_KEY = "snowystorm-theme";

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const formStatus = document.getElementById("formStatus");

    applyInitialTheme();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
            setTheme(nextTheme);
        });
    }

    if (formStatus) {
        const params = new URLSearchParams(window.location.search);
        if (params.get("submitted") === "true") {
            formStatus.textContent = "Message sent. I will get back to you.";
        }
    }
});

function applyInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
        return;
    }

    setTheme("dark");
}

function setTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
}
