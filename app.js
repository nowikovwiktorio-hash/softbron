document.addEventListener('DOMContentLoaded', () => {
  // фиксированное время
  const fixedTime = "00:34";

  // сегодняшняя дата
  const today = new Date();
  const d = String(today.getDate()).padStart(2, '0');
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const y = today.getFullYear();
  const currentDate = `${d}.${m}.${y}`;

  // базовый текст
  const baseText = `Документ оновлено о ${fixedTime} | ${currentDate} •`;

  // повторяем текст много раз с двумя пробелами
  const repeatedText = Array(30).fill(baseText).join("⠀");

  // вставляем в контейнер
  document.getElementById("ticker-text").textContent = repeatedText;
});
