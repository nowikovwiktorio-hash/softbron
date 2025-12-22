document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const d = String(today.getDate()).padStart(2, '0');
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const y = today.getFullYear();
    document.querySelectorAll('#date').forEach(el => el.textContent = `${d}.${m}.${y}`);
});
