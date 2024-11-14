const form = document.getElementById("submit-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name.trim().length == 0) {
    alert("Name cannot be null");
    return;
  }
  if (
    email
      .trim()
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) === null ||
    email.trim().length === 0
  ) {
    alert("Invalid email address");
    return;
  }
  if (message.trim().length < 10) {
    alert("Feedback minimu length is 10");
    return;
  }
  HTMLFormElement.prototype.submit.call(form);
});
