const next = GetRoomAuth.safeNext(new URLSearchParams(location.search).get("next"));
if (GetRoomAuth.getUser()) location.replace(next);
document.getElementById("toSignup").href = "signup.html?next=" + encodeURIComponent(next);

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const err = document.getElementById("formError");
  const btn = document.getElementById("submitBtn");
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  if (!/^\S+@\S+\.\S+$/.test(email)) { err.textContent = "Enter a valid email address."; return; }
  if (!password) { err.textContent = "Enter your password."; return; }
  btn.disabled = true;
  try {
    await GetRoomAuth.login(email, password);
    location.href = next;
  } catch (ex) {
    err.textContent = ex.message;
    btn.disabled = false;
  }
});

if (new URLSearchParams(location.search).has("next")) document.getElementById("authNotice").hidden = false;
