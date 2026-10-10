"use strict";

/* ---------- Content: add your sermons here ---------- */
// photo is optional: your own image, or leave it out to use the YouTube thumbnail
const sermons = [
    {
        id: 1,
        title: "Maturity in The Faith",
        topic: "Faith",
        date: "2026-10-02",
        speaker: "Pastor Abundionito Cayme",
        url: "https://www.youtube.com/watch?v=39WSoKE1zE4",
        photo: "https://i.ytimg.com/vi/39WSoKE1zE4/hq720.jpg?sqp=-oaymwErCNAFEJQDSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLCbsb5gEcFxQG0VGo1WPgMSMOXAsQ",
    },
];

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const fmtDate = (iso) => new Date(iso + "T00:00").toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" });
const monthKey = (iso) => iso.slice(0, 7);
const monthLabel = (key) => new Date(key + "-01T00:00").toLocaleDateString("en-PH", { year: "numeric", month: "long" });

const sorters = {
    newest: (a, b) => b.date.localeCompare(a.date),
    oldest: (a, b) => a.date.localeCompare(b.date),
    az: (a, b) => a.title.localeCompare(b.title),
    za: (a, b) => b.title.localeCompare(a.title),
};

const LOGO = "/photos/ntd-logo.jpg";

function ytId(url) {
    try {
        const u = new URL(url);
        return u.hostname === "youtu.be" ? u.pathname.slice(1) : u.searchParams.get("v");
    } catch {
        return null;
    }
}

// Priority: your own photo, then the YouTube thumbnail, then the NTD logo
function thumbUrl(s) {
    if (s.photo) return s.photo;
    const id = ytId(s.url);
    return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : LOGO;
}

/* ---------- Build filter options from the data ---------- */
[...new Set(sermons.map((s) => s.topic))].sort().forEach((t) => $("topic").add(new Option(t, t)));
[...new Set(sermons.map((s) => monthKey(s.date)))].sort().reverse()
    .forEach((m) => $("month").add(new Option(monthLabel(m), m)));

/* ---------- Render ---------- */
function card(s) {
    const a = document.createElement("a");
    a.className = "sermon";
    a.id = "sermon-" + s.id;
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", `${s.title}, ${s.speaker}, ${fmtDate(s.date)}. Opens on YouTube in a new tab.`);

    const thumb = document.createElement("div");
    thumb.className = "thumb";

    const img = document.createElement("img");
    img.src = thumbUrl(s);
    img.alt = `Thumbnail for ${s.title}`;
    img.loading = "lazy";
    img.onerror = () => {          // if the photo can't load, show the logo instead
        img.onerror = null;
        img.src = LOGO;
        img.classList.add("fallback");
    };

    const play = document.createElement("span");
    play.className = "play";
    play.textContent = "Watch on YouTube";

    thumb.append(img, play);

    const body = document.createElement("div");
    body.className = "body";
    const tag = document.createElement("span"); tag.className = "tag"; tag.textContent = s.topic;
    const h3 = document.createElement("h3"); h3.textContent = s.title;
    const meta = document.createElement("p"); meta.className = "meta"; meta.textContent = `${s.speaker} | ${fmtDate(s.date)}`;
    body.append(tag, h3, meta);

    a.append(thumb, body);
    return a;
}

function render() {
    const q = norm($("search").value.trim());
    const topic = $("topic").value;
    const month = $("month").value;

    const list = sermons
        .filter((s) => !topic || s.topic === topic)
        .filter((s) => !month || monthKey(s.date) === month)
        .filter((s) => !q || norm(`${s.title} ${s.topic} ${s.speaker}`).includes(q))
        .sort(sorters[$("sort").value]);

    $("grid").replaceChildren(...list.map(card));
    $("empty").hidden = list.length > 0;
    $("grid").hidden = list.length === 0;
    $("count").textContent = `Showing ${list.length} of ${sermons.length} sermons`;
    $("reset").hidden = !(q || topic || month);
}

function resetFilters() {
    $("search").value = "";
    $("topic").value = "";
    $("month").value = "";
    $("sort").value = "newest";
    render();
    $("search").focus();
}

["input", "change"].forEach((evt) =>
    ["search", "topic", "month", "sort"].forEach((id) => $(id).addEventListener(evt, render))
);
$("reset").addEventListener("click", resetFilters);
$("emptyReset").addEventListener("click", resetFilters);

render();

/* Highlight a sermon chosen on the home page (sermons.html?video=1) */
const picked = new URLSearchParams(location.search).get("video");
const pickedCard = picked && $("sermon-" + picked);
if (pickedCard) {
    pickedCard.classList.add("highlight");
    pickedCard.scrollIntoView({ block: "center" });
}

/* ---------- Prayer request ---------- */
// If empty, requests are only saved in this browser (demo mode).
const PRAYER_ENDPOINT = "https://formspree.io/f/xrpeqvez";

const form = $("prayerForm");
const message = $("pMessage");

message.addEventListener("input", () => {
    $("pCount").textContent = `${message.value.length} / 600`;
    if (message.value.trim()) { $("pError").textContent = ""; message.removeAttribute("aria-invalid"); }
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const result = $("pResult");
    result.replaceChildren();

    if (message.value.trim().length < 20) {
        $("pError").textContent = "Please write at least 20 characters.";
        message.setAttribute("aria-invalid", "true");
        message.focus();
        return;
    }

    const data = Object.fromEntries(new FormData(form));
    data.private = $("pPrivate").checked;
    data.sentAt = new Date().toISOString();

    const button = $("pSubmit");
    button.disabled = true;
    button.textContent = "Sending...";

    const note = document.createElement("p");
    note.className = "notice";
    try {
        if (PRAYER_ENDPOINT) {
            const res = await fetch(PRAYER_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
            if (!res.ok) throw new Error("Request failed");
        } else {
            const saved = JSON.parse(localStorage.getItem("prayerRequests") || "[]");
            localStorage.setItem("prayerRequests", JSON.stringify([...saved, data]));
        }
        note.textContent = "Thank you. Your prayer request has been sent. We are praying with you.";
        form.reset();
        $("pCount").textContent = "0 / 600";
        $("pPrivate").checked = true;
    } catch {
        note.classList.add("fail");
        note.textContent = "Sorry, we could not send your request. Please check your connection and try again.";
    } finally {
        button.disabled = false;
        button.textContent = "Send prayer request";
        result.append(note);
    }
});

const privacyModal = document.getElementById("privacyModal");
const openPrivacyLink = document.getElementById("openPrivacy");
const closePrivacyBtn = document.getElementById("closePrivacy");

openPrivacyLink.addEventListener("click", (e) => {
    e.preventDefault();
    privacyModal.style.display = "flex";
    document.body.style.overflow = "hidden";
});

closePrivacyBtn.addEventListener("click", () => {
    privacyModal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
    if (e.target === privacyModal) {
        privacyModal.style.display = "none";
        document.body.style.overflow = "auto"
    }
})
