const messages = [
    "You're one of a kind 💫",
    "Sending you good vibes 🌈",
    "Today is your day to shine ✨",
    "You are loved and appreciated 💖",
    "Keep being amazing 🌟",
    "You light up the world 🌍",
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    const msgElement = document.getElementById("randomMessage");
    if (msgElement) msgElement.textContent = message;
  });
  