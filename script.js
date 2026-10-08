"use strict";

/* ---------- Content (edit here, no need to touch the HTML) ---------- */

const PLACEHOLDER_PHOTO = "photos/download.jpg";

const orgChart = [
    [{ name: "Pastor Raymun Fajilan", position: "District Pastor", photo: "photos/pastor-profile.jpg" }], //District Pastor
    [{ name: "Joe Mutia", position: "District President & San Agustin Elder", photo: "photos/mutia.jpg"}],
    [
        { name: "Rommel Mallorca", position: "District Vice President & Sugod Elder" },
        { name: "John Brian Roldan", position: "District Vice President & San Agustin Elder", photo: "photos/roldan.jpg"},
        { name: "Chona Morales", position: "Secretary & San Agustin Elder", photo: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/796854468_1646095957087998_2537317253628663712_n.jpg?stp=dst-jpg_tt6&cstp=mx577x559&ctp=s577x559&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFxgMnU9wz0twO7r0Y8vPiBljh63u9KTdSWOHre70pN1LjrF6Jw9zO7uuWEICxhG_dkbguq3siIret3QX_bycnV&_nc_ohc=bWF5qtJmoMAQ7kNvwFjovAS&_nc_oc=Adp6oOlnoqFhFVfbGwOzANcfb31Qo0g4l4lKxk-V_ZdVosxp-rkI5GL2MeVgV8iWv9B1KHqcptFZPSaMYdVWHhTo&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=kPLxbXg85JtZdjf8miv6Kg&_nc_ss=7b2a8&oh=00_AQPMSml3HsNMz8_u_cX3-D07Z6cglpKBx9vtxS9AsS7ISA&oe=6ACD4DD0"},
        { name: "Gladys Jongay", position: "Treasurer"},
        { name: "Francis Noe", position: "District Youth Leader", photo: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/626874935_26273689202319906_5955990311497092702_n.jpg?stp=dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGj5o7E7DU_HGgU5AJm_hUC0gSxpH5OpzjSBLGkfk6nONaZa_tf1QVLJDl3yfD2o8tZx29lYZKexVbFrv-K4KQW&_nc_ohc=df9u8CkaTwQQ7kNvwGctFZ5&_nc_oc=Adqo_8pRVkCO1XnKvaluuDYcTCEn_8nKajqC53PukebtKUGh__9fOR5c432UzBTjrT-4dMBATNRmRLQmwLM4-AVo&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=fMdJG8w3TuwJiERWeENN9Q&_nc_ss=7b2a8&oh=00_AQNDpa-bnGeew7juVqpAHcWL3CY5mBG5U4Ij-Zx8Bj-Krg&oe=6ACC1BB4" },
    ], //For District Officers
    [
        { name: "Maximo Famaran", position: "San Agustin Elder"},
        { name: "Danny Angelino", position: "Binongaan Elder"},
        { name: "Job Barolo", position: "Camantaya Elder"}
    ], //For Elders in San Agustin
    [
        { name: "Nenette Lorenzo", position: "Concepcion Norte Elder", photo: "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/473054147_1175592760650054_6876257426040782697_n.jpg?stp=dst-jpg_tt6&cstp=mx750x750&ctp=s750x750&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGtNoSwkWbBCWke1uEAVk5JaaofERfxdq9pqh8RF_F2r0tdWFy89iB2Mxp_Qkhy2fJvX5XQlKZ2-9BU-mEuRzgI&_nc_ohc=0zkwJ2B-xiQQ7kNvwEZH2kX&_nc_oc=Adpd0qUFR1vWrFriSqxeB4Mv0lAbNJAcB2wSulyH2Mj6WlJ00eqRdVAmACpN6oWOBKRcB5TgYLLjl9YRC82hx9tb&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=qQZqJukvOKCBBF-AcoNIIg&_nc_ss=7b2a8&oh=00_AQMSOfXPATVQ-pWAojNvOjVpS3SIWpxB0SeTNcp6t7lFeQ&oe=6ACC0DD0"},
        { name: "Gieraldine Visca", position: "Concepcion Sur Elder", photo: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/463618413_4693876934170961_7812467560921334839_n.jpg?stp=dst-jpg_tt6&cstp=mx953x960&ctp=s953x960&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeENT45INBlK5kh0VEFojU980vQbLQKRjrHS9BstApGOsdZ8d_CsJIrGRvn9aYyXMWRV67_9APmAMzTgB6R2VXtu&_nc_ohc=XIJulH0V0T8Q7kNvwF2LcKi&_nc_oc=AdoSBot8tWB_q-MBbnFZxbYTKQmT6KWmJXBVRAFnJift67CU45Z-93ggvwpoKonVOPNtflykQL9-C_7QbxGksL2W&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=kgvaZNlSGBBOCaMxJCGaOA&_nc_ss=7b2a8&oh=00_AQP252jC21dQdHOCcUq50kcqBva_28LtPwaPukKoJLjTEg&oe=6ACC1EFF"},
        { name: "Daniel Rio", position: "Concepcion Sur Elder"},
        { name: "Jester Francisco", position: "Paroyhog Elder", photo: "photos/jester.jpg"},
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
