function signupUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    document.getElementById("signupMsg").innerText = "Passwords do not match";
    return;
  }

  localStorage.setItem(email, password);
  document.getElementById("signupMsg").innerText = "Signup successful";
}

function loginUser() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let storedPass = localStorage.getItem(email);

  if (storedPass === password) {
    alert("Login successful");
    window.location.href = "index.html";
  } else {
    document.getElementById("loginMsg").innerText = "Invalid credentials";
  }
}

let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart");
}
