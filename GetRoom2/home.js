const ham = document.getElementById("hamburger");
const links = document.getElementById("navLinks");
const actions = document.getElementById("navActions");

ham.addEventListener("click", () => {
  links.classList.toggle("open");
  actions.classList.toggle("open");
});

// Logged-in users skip the "log in first" hints
const user = GetRoomAuth.getUser();
if (user) document.querySelectorAll(".lock, #loginNote").forEach((el) => el.remove());

// Friendly popup that explains why login is needed (instead of a silent redirect)
const gate = document.getElementById("gate");
function openGate(target) {
  const next = encodeURIComponent(target);
  document.getElementById("gateLogin").href = "login.html?next=" + next;
  document.getElementById("gateSignup").href = "signup.html?next=" + next;
  gate.hidden = false;
  document.getElementById("gateSignup").focus();
}
const closeGate = () => { gate.hidden = true; };
document.getElementById("gateClose").addEventListener("click", closeGate);
gate.addEventListener("click", (e) => { if (e.target === gate) closeGate(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !gate.hidden) closeGate(); });
document.getElementById("roomsLink").addEventListener("click", (e) => {
  if (!user) { e.preventDefault(); openGate("rooms.html"); }
});

// Search Rooms -> rooms.html (rooms.html asks you to log in first if you are not)
const goSearch = () => {
  const inst = document.getElementById("instSelect");
  const p = new URLSearchParams();
  if (inst.selectedIndex > 0) p.set("inst", inst.value);
  const loc = document.getElementById("locInput").value.trim();
  const q = document.getElementById("qInput").value.trim();
  if (loc) p.set("loc", loc);
  if (q) p.set("q", q);
  const qs = p.toString();
  const target = "rooms.html" + (qs ? "?" + qs : "");
  if (!user) { openGate(target); return; }
  location.href = target;
};
document.getElementById("searchBtn").addEventListener("click", goSearch);
["locInput", "qInput"].forEach((id) =>
  document.getElementById(id).addEventListener("keydown", (e) => { if (e.key === "Enter") goSearch(); })
);
