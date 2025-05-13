
if (!localStorage.getItem("users")) {
  const defaultUsers = [
    {
      email: "user@example.com",
      password: "password123",
    },
  ];
  localStorage.setItem("users", JSON.stringify(defaultUsers));
}

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const user = storedUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
   
    window.location.href = "dashboard.html"; 
  } else {
    alert("Invalid email or password.");
  }
});
