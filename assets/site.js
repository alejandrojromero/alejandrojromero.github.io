// Shared behavior for subpages: cursor, theme, footer year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Custom cursor
const customCursor = document.getElementById('customCursor');
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
(function updateCursor() {
    customCursor.style.left = mouseX + 'px';
    customCursor.style.top = mouseY + 'px';
    requestAnimationFrame(updateCursor);
})();
function bindCursorHovers(root) {
    (root || document).querySelectorAll('a, button, .theme-toggle').forEach(el => {
        if (el.dataset.cursorBound || el.closest('.hub-card, .game-tile, .rec-card, .wall-item')) return;
        el.dataset.cursorBound = '1';
        el.addEventListener('mouseenter', () => customCursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => customCursor.classList.remove('hover'));
    });
    (root || document).querySelectorAll('.hub-card, .game-tile, .rec-card, .wall-item').forEach(el => {
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = '1';
        el.addEventListener('mouseenter', () => customCursor.classList.add('grid-hover'));
        el.addEventListener('mouseleave', () => customCursor.classList.remove('grid-hover'));
    });
}
bindCursorHovers();
window.bindCursorHovers = bindCursorHovers;

// Theme
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
function updateThemeIcons(theme) {
    sunIcon.style.display = theme === 'dark' ? 'none' : 'block';
    moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
}
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light');
if (initialTheme === 'dark') document.body.classList.add('dark-mode');
updateThemeIcons(initialTheme);
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    updateThemeIcons(theme);
    localStorage.setItem('theme', theme);
});

