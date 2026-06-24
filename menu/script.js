// Limpia preferencias anteriores para forzar modo 100% automatico por sistema.
localStorage.removeItem('theme');
localStorage.removeItem('themePreference');

// Mantiene la vibracion tactil al pulsar las opciones del menu en dispositivos compatibles.
document.querySelectorAll('.item a').forEach(link => {
  link.addEventListener('click', () => {
    if (navigator.vibrate) navigator.vibrate(10);
  });
});
