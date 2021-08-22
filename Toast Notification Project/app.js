const button = document.querySelector("#button");
const toastsContainer = document.querySelector("#toasts");

const messages = ["Message 1", "Message 2", "Message 3", "Message 4"];

button.addEventListener("click", () => {
  createNotification("This is a test Message!");
});

function createNotification(message = null) {
  const notification = document.createElement("div");
  notification.classList.add("toast");

  if (messages) {
    notification.innerText = message;
  } else {
    notification.innerText = getRandomMessage();
  }

  toastsContainer.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
