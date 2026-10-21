/* GetRoom demo authentication (browser-only).
   Accounts live in localStorage, so this is for demo/learning, NOT real security.
   For a real site, move signup/login to PHP + MySQL (password_hash / password_verify + sessions). */
const GetRoomAuth = (() => {
  const USERS = "getroom_users";
  const SESSION = "getroom_session";
  const read = (k, fallback) => {
    try { const v = JSON.parse(localStorage.getItem(k)); return v === null ? fallback : v; }
    catch (e) { return fallback; }
  };
  const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  function needCrypto() {
    if (!(window.crypto && crypto.subtle)) {
      throw new Error("Open the site through http://localhost (XAMPP) or https so passwords can be protected.");
    }
  }
  async function hash(password, salt) {
    needCrypto();
    return hex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(salt + ":" + password)));
  }
  const getUser = () => read(SESSION, null);

  async function signup({ name, email, phone, password }) {
    needCrypto();
    email = email.trim().toLowerCase();
    const users = read(USERS, []);
    if (users.some((u) => u.email === email)) throw new Error("An account with this email already exists. Please log in.");
    const salt = hex(crypto.getRandomValues(new Uint8Array(8)));
    users.push({ name, email, phone, salt, hash: await hash(password, salt) });
    localStorage.setItem(USERS, JSON.stringify(users));
    localStorage.setItem(SESSION, JSON.stringify({ name, email, phone }));
  }
  async function login(email, password) {
    email = email.trim().toLowerCase();
    const u = read(USERS, []).find((x) => x.email === email);
    if (!u || (await hash(password, u.salt)) !== u.hash) throw new Error("Incorrect email or password.");
    localStorage.setItem(SESSION, JSON.stringify({ name: u.name, email: u.email, phone: u.phone }));
  }
  function logout() {
    localStorage.removeItem(SESSION);
    location.href = "home.html";
  }
  // only allow redirects to our own pages like rooms.html or rooms.html?q=studio
  function safeNext(n) {
    return n && /^[\w-]+\.html(\?[\w=&%.+-]*)?$/.test(n) ? n : "rooms.html";
  }
  // call at the top of any page that needs a logged-in user
  function requireLogin() {
    if (!getUser()) {
      const page = location.pathname.split("/").pop() || "rooms.html";
      location.replace("login.html?next=" + encodeURIComponent(page + location.search));
    }
  }
  // swaps Login / Sign up buttons for "Hi, Name" + Log out on any element marked data-auth-area
  function updateNav() {
    const user = getUser();
    document.querySelectorAll("[data-auth-area]").forEach((area) => {
      if (!user) return;
      area.textContent = "";
      const hello = document.createElement("span");
      hello.className = "auth-hello";
      hello.textContent = "Hi, " + user.name.split(" ")[0];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "auth-logout";
      btn.textContent = "Log out";
      btn.addEventListener("click", logout);
      area.append(hello, btn);
    });
  }
  document.addEventListener("DOMContentLoaded", updateNav);
  return { getUser, signup, login, logout, safeNext, requireLogin };
})();
