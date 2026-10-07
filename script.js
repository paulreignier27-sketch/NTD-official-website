"use strict";

/* ---------- Content (edit here, no need to touch the HTML) ---------- */

const PLACEHOLDER_PHOTO = "/photos/download.jpg";

const orgChart = [
    [{ name: "Pastor Raymun Fajilan", position: "District Pastor", photo: "/photos/pastor-profile.jpg" }], //District Pastor
    [{ name: "Joe Mutia", position: "District President & San Agustin Elder" }],
    [
        { name: "Rommel Mallorca", position: "District Vice President & Sugod Elder" },
        { name: "John Brian Roldan", position: "District Vice President & San Agustin Elder" },
        { name: "Chona Morales", position: "Secretary & San Agustin Elder" },
        { name: "Gladys Jongay", position: "Treasurer"},
        { name: "Francis Noe", position: "District Youth Leader" },
    ], //For District Officers
    [
        { name: "Maximo Famaran", position: "San Agustin Elder"},
        { name: "Danny Angelino", position: "Binongaan Elder"},
        { name: "Job Barolo", position: "Camantaya Elder"}
    ], //For Elders in San Agustin
    [
        { name: "Nenette Lorenzo", position: "Concepcion Norte Elder"},
        { name: "Gieraldine Visca", position: "Concepcion Sur Elder"},
        { name: "Daniel Rio", position: "Concepcion Sur Elder"},
        { name: "Jester Francisco", position: "Paroyhog Elder"},
    ]//For Elders in Sta. Maria




    // ["San Agustin", "Sugod", "Binongaan", "Camantaya", "Sta Maria", "Concepcion Sur", "Concepcion Sur", "Paroyhog"]
    //     .map((church) => ({ name: "", position: `${church} Elder` })),
];

const events = [
    {
        name: "District-Wide Youth Fellowship",
        location: "Concepcion Sur SDA Church",
        date: "2026-11-27T08:00",
        theme: "Choose to Serve",
    },
];

const announcements = [
    {
        title: "Change of Venue for NTD-Wide Fellowship",
        important: true,
        posted: "2026-09-29",
        author: "Pastor Raymun Fajilan",
    },
];

/* ---------- Helpers ---------- */

const $ = (selector) => document.querySelector(selector);

function el(tag, { className, text, attrs } = {}, children = []) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    Object.entries(attrs ?? {}).forEach(([key, value]) => node.setAttribute(key, value));
    node.append(...children);
    return node;
}

const formatDate = (iso, options) =>
    new Date(iso).toLocaleDateString("en-PH", options);

const dateOnly = { year: "numeric", month: "long", day: "numeric" };
const dateAndTime = { ...dateOnly, hour: "numeric", minute: "2-digit" };

/* ---------- Renderers ---------- */

function renderOrgChart() {
    const root = $("#orgChartRoot");
    orgChart.forEach((row) => {
        const rowEl = el("div", { className: "orgRow" });
        row.forEach(({ name, position, photo }) => {
            const vacant = !name;
            rowEl.append(
                el("div", { className: `officer${vacant ? " vacant" : ""}` }, [
                    el("img", {
                        attrs: {
                            src: photo ?? PLACEHOLDER_PHOTO,
                            alt: vacant ? "" : `Photo of ${name}`,
                            loading: "lazy",
                        },
                    }),
                    el("p", { className: "name", text: vacant ? "To be announced" : name }),
                    el("p", { className: "position", text: position }),
                ])
            );
        });
        root.append(rowEl);
    });
}

function renderEvents() {
    const list = $("#eventList");
    const now = new Date();
    const upcoming = events
        .filter((event) => new Date(event.date) >= now)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (!upcoming.length) {
        list.replaceWith(el("p", { className: "empty", text: "No upcoming events. Please check back soon." }));
        return;
    }

    upcoming.forEach(({ name, location, date, theme }) =>
        list.append(
            el("article", { className: "eventCard" }, [
                el("h3", { text: name }),
                el("p", { text: `Location: ${location}` }),
                el("p", { text: `When: ${formatDate(date, dateAndTime)}` }),
                el("p", { text: `Theme: "${theme}"` }),
            ])
        )
    );

    $("#nextEvent").textContent = `${upcoming[0].name} - ${formatDate(upcoming[0].date, dateOnly)}`;
}

function renderAnnouncements() {
    const list = $("#announcementList");

    if (!announcements.length) {
        list.append(el("p", { className: "empty", text: "No announcements yet." }));
        return;
    }

    const sorted = [...announcements].sort((a, b) => new Date(b.posted) - new Date(a.posted));
    sorted.forEach(({ title, important, posted, author }) =>
        list.append(
            el("article", { className: "announcement" }, [
                ...(important ? [el("span", { className: "tag", text: "Important" })] : []),
                el("h3", { text: title }),
                el("small", { text: `Posted ${formatDate(posted, dateOnly)}` }),
                el("small", { text: `By ${author}` }),
            ])
        )
    );

    $("#latestAnnouncement").textContent = sorted[0].title;
}

/* ---------- Mobile menu ---------- */

function setupMenu() {
    const sidebar = $("#sidebar");
    const toggle = $("#menuToggle");

    const setOpen = (open) => {
        sidebar.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", open);
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    toggle.addEventListener("click", () => setOpen(!sidebar.classList.contains("open")));
    sidebar.addEventListener("click", (e) => e.target.closest("a") && setOpen(false));
    document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));
}

/* ---------- Highlight the current section in the sidebar ---------- */

function setupActiveLink() {
    const links = new Map(
        [...document.querySelectorAll("#sidebar nav a")].map((a) => [a.getAttribute("href").slice(1), a])
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.filter((e) => e.isIntersecting).forEach((entry) => {
                links.forEach((a) => a.classList.remove("active"));
                links.get(entry.target.id)?.classList.add("active");
            });
        },
        { rootMargin: "-40% 0px -55% 0px" }
    );

    links.forEach((_, id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });
}

/* ---------- Sermon picker ---------- */

// $("#videos").addEventListener("change", () => {
//     window.location.href = `sermons.html?video=${encodeURIComponent($("#videos").value)}`;
// });

/* ---------- Init ---------- */

renderOrgChart();
renderEvents();
renderAnnouncements();
setupMenu();
setupActiveLink();
