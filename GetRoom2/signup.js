const next = GetRoomAuth.safeNext(new URLSearchParams(location.search).get("next"));
if (GetRoomAuth.getUser()) location.replace(next);
document.getElementById("toLogin").href = "login.html?next=" + encodeURIComponent(next);

const nameRegex = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’-]+(\s+[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’-]+)+$/;

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const err = document.getElementById("formError");
  const btn = document.getElementById("submitBtn");
  const name = document.getElementById("fullName").value.trim().replace(/\s+/g, " ");
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (!nameRegex.test(name)) { err.textContent = "Enter your full name (first name and surname, letters only)."; return; }
  if (!/^\S+@\S+\.\S+$/.test(email)) { err.textContent = "Enter a valid email address."; return; }
  if (!/^(\+27|0)[0-9\s]{9,12}$/.test(phone)) { err.textContent = "Enter a valid phone number, e.g. 082 123 4567."; return; }
  if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    err.textContent = "Password must be at least 8 characters with letters and a number."; return;
  }
  if (password !== confirm) { err.textContent = "Passwords do not match."; return; }

  btn.disabled = true;
  try {
    await GetRoomAuth.signup({ name, email, phone, password });
    location.href = next;
  } catch (ex) {
    err.textContent = ex.message;
    btn.disabled = false;
  }
});

if (new URLSearchParams(location.search).has("next")) document.getElementById("authNotice").hidden = false;
