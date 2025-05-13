document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!name || !number || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    const emailExists = storedUsers.some(user => user.email === email);
  
    if (emailExists) {
      alert("Email already registered. Please use another or log in.");
      return;
    }
  
    storedUsers.push({ name, number, email, password });
  
    localStorage.setItem("users", JSON.stringify(storedUsers));
  
    alert("Registration successful! You can now log in.");
    window.location.href = "index.html"; 
  });
  