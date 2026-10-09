"use strict";

/* ---------- Content (edit here, no need to touch the HTML) ---------- */

const PLACEHOLDER_PHOTO = "photos/download.jpg";

const orgChart = [
    [{ name: "Pastor Raymun Fajilan", position: "District Pastor", photo: "photos/pastor-profile.jpg" }], //District Pastor
    [{ name: "Joe Mutia", position: "District President & San Agustin Elder", photo: "photos/mutia.jpg" }], //District President
    [
        { name: "Rommel Mallorca", position: "District Vice President & Sugod Elder" },
        { name: "John Brian Roldan", position: "District Vice President & San Agustin Elder", photo: "photos/roldan.jpg" },
        { name: "Chona Morales", position: "Secretary & San Agustin Elder", photo: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/796854468_1646095957087998_2537317253628663712_n.jpg?stp=dst-jpg_tt6&cstp=mx577x559&ctp=s577x559&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFxgMnU9wz0twO7r0Y8vPiBljh63u9KTdSWOHre70pN1LjrF6Jw9zO7uuWEICxhG_dkbguq3siIret3QX_bycnV&_nc_ohc=bWF5qtJmoMAQ7kNvwFjovAS&_nc_oc=Adp6oOlnoqFhFVfbGwOzANcfb31Qo0g4l4lKxk-V_ZdVosxp-rkI5GL2MeVgV8iWv9B1KHqcptFZPSaMYdVWHhTo&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=kPLxbXg85JtZdjf8miv6Kg&_nc_ss=7b2a8&oh=00_AQPMSml3HsNMz8_u_cX3-D07Z6cglpKBx9vtxS9AsS7ISA&oe=6ACD4DD0" },
        { name: "Gladys Jongay", position: "District Treasurer", photo: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/801200339_29004223205845380_2565040816093357390_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGRAhRAGX3idUKyvNbDfNa8jzpfg7QwpDOPOl-DtDCkM5KSy8FM_uORGpEBG_XZDhBPAdvbLuSQG4QxFUFRD4FW&_nc_ohc=MC-kTrDL6aoQ7kNvwG-UYzS&_nc_oc=AdrKsynptjWl72R9ACDx2Lt15_Clx4laSRWJbnD3Oy__pE9sAuUbOmaIo0NoYL6aQpHHQ3Toukgw_Va2QIZTBE2r&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=pNs9WnRjJ23UNsNBSvYoTA&_nc_ss=7b2a8&oh=00_AQNYCSM5cPEp7jw6cjrgdda44O1yKVzBfLzOvyXM9_RgUQ&oe=6ACEAE98" },
        { name: "Francis Noe", position: "District Youth Leader", photo: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/626874935_26273689202319906_5955990311497092702_n.jpg?stp=dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGj5o7E7DU_HGgU5AJm_hUC0gSxpH5OpzjSBLGkfk6nONaZa_tf1QVLJDl3yfD2o8tZx29lYZKexVbFrv-K4KQW&_nc_ohc=df9u8CkaTwQQ7kNvwGctFZ5&_nc_oc=Adqo_8pRVkCO1XnKvaluuDYcTCEn_8nKajqC53PukebtKUGh__9fOR5c432UzBTjrT-4dMBATNRmRLQmwLM4-AVo&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=fMdJG8w3TuwJiERWeENN9Q&_nc_ss=7b2a8&oh=00_AQNDpa-bnGeew7juVqpAHcWL3CY5mBG5U4Ij-Zx8Bj-Krg&oe=6ACC1BB4" },
    ], //For District Officers
    [
        { name: "Maximo Famaran", position: "San Agustin Elder" },
        { name: "Danny Angelino", position: "Binongaan Elder" },
        { name: "Job Barolo", position: "Camantaya Elder" },
    ], //For Elders in San Agustin
    [
        { name: "Nenette Lorenzo", position: "Concepcion Norte Elder", photo: "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/473054147_1175592760650054_6876257426040782697_n.jpg?stp=dst-jpg_tt6&cstp=mx750x750&ctp=s750x750&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGtNoSwkWbBCWke1uEAVk5JaaofERfxdq9pqh8RF_F2r0tdWFy89iB2Mxp_Qkhy2fJvX5XQlKZ2-9BU-mEuRzgI&_nc_ohc=0zkwJ2B-xiQQ7kNvwEZH2kX&_nc_oc=Adpd0qUFR1vWrFriSqxeB4Mv0lAbNJAcB2wSulyH2Mj6WlJ00eqRdVAmACpN6oWOBKRcB5TgYLLjl9YRC82hx9tb&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=qQZqJukvOKCBBF-AcoNIIg&_nc_ss=7b2a8&oh=00_AQMSOfXPATVQ-pWAojNvOjVpS3SIWpxB0SeTNcp6t7lFeQ&oe=6ACC0DD0" },
        { name: "Gieraldine Visca", position: "Concepcion Sur Elder", photo: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/463618413_4693876934170961_7812467560921334839_n.jpg?stp=dst-jpg_tt6&cstp=mx953x960&ctp=s953x960&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeENT45INBlK5kh0VEFojU980vQbLQKRjrHS9BstApGOsdZ8d_CsJIrGRvn9aYyXMWRV67_9APmAMzTgB6R2VXtu&_nc_ohc=XIJulH0V0T8Q7kNvwF2LcKi&_nc_oc=AdoSBot8tWB_q-MBbnFZxbYTKQmT6KWmJXBVRAFnJift67CU45Z-93ggvwpoKonVOPNtflykQL9-C_7QbxGksL2W&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=kgvaZNlSGBBOCaMxJCGaOA&_nc_ss=7b2a8&oh=00_AQP252jC21dQdHOCcUq50kcqBva_28LtPwaPukKoJLjTEg&oe=6ACC1EFF" },
        { name: "Daniel Rio", position: "Concepcion Sur Elder" },
        { name: "Jester Francisco", position: "Paroyhog Elder", photo: "photos/jester.jpg" },
    ], //For Elders in Sta. Maria
];

const events = [
    {
        name: "Pathfinder Camping 2026",
        location: "No location specified yet",
        date: "2026-10-30 - 2026-11-02", // single day: "2026-11-27"
        theme: "Be prepared. Be adventurous. Be closer to God.",
    },
];

const announcements = [
    // {
    //     title: "Change of Venue for NTD-Wide Fellowship",
    //     important: true,
    //     posted: "2026-09-29",
    //     author: "Pastor Raymun Fajilan",
    // },
];

// Gallery: the first 4 show on the page, the rest appear in the viewer with a "+N" badge.
// Replace these file names with your own photos (e.g. "photos/gallery/1.jpg").
const galleryPhotos = [
    { src: "hello.jpg", alt: "Gallery photo 1" },
    { src: "programmer.jpg", alt: "Gallery photo 2" },
    { src: "q.jpg", alt: "Gallery photo 3" },
    { src: "r.jpg", alt: "Gallery photo 4" },
    { src: "world.jpg", alt: "Gallery photo 5" },
    { src: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-6/839972153_122183139950709496_6607933860894492310_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEr29T9iuVU0DCUjxSzuyF4YIOBfi-XvkFgg4F-L5e-QZPslQeWjgN_hYqftwG3CNTlOrEYkxhCIZIlyO37fQ2r&_nc_ohc=5bT46QiWaXEQ7kNvwFwFpM5&_nc_oc=AdohqaLwUn-veBBLRb-H1JIv18OcsKHgjaV_XiJq0Et9as26k8knR3_0pefwxBQB19LzN2vOovQKOzC_0nZp3-0M&_nc_zt=23&_nc_ht=scontent-mnl3-3.xx&_nc_gid=cH2bt1oMHHurntr1t4ebAQ&_nc_ss=7b2a8&oh=00_AQMfHNFajg3j8cI__Id3RB3pU4QolTFa5-QO4H90odQrwg&oe=6ACEA424", alt: "Gallery photo 6" },
];

const MAX_VISIBLE = 4;

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
    const startOf = (event) => new Date(event.date.split(" - ")[0]);

    const upcoming = events
        .filter((event) => startOf(event) >= now)
        .sort((a, b) => startOf(a) - startOf(b));

    if (!upcoming.length) {
        list.replaceWith(el("p", { className: "empty", text: "No upcoming events. Please check back soon." }));
        return;
    }

    upcoming.forEach(({ name, location, date, theme }) => {
        const [start, end] = date.split(" - ");
        const dateString = end
            ? `${formatDate(start, dateOnly)} to ${formatDate(end, dateOnly)}`
            : formatDate(start, dateOnly);

        list.append(
            el("article", { className: "eventCard" }, [
                el("h3", { text: name }),
                el("p", { text: `Location: ${location}` }),
                el("p", { text: `When: ${dateString}` }),
                el("p", { text: `Theme: "${theme}"` }),
            ])
        );
    });

    const firstStart = upcoming[0].date.split(" - ")[0];
    $("#nextEvent").textContent = `${upcoming[0].name} - ${formatDate(firstStart, dateOnly)}`;
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

/* ---------- Gallery + lightbox ---------- */

let currentPhoto = 0;
let lastFocused = null;

function renderGallery() {
    const grid = $("#galleryGrid");

    if (!galleryPhotos.length) {
        grid.replaceWith(el("p", { className: "empty", text: "No photos yet." }));
        return;
    }

    const remaining = galleryPhotos.length - MAX_VISIBLE;

    galleryPhotos.slice(0, MAX_VISIBLE).forEach((photo, i) => {
        const children = [el("img", { attrs: { src: photo.src, alt: photo.alt, loading: "lazy" } })];

        // Only the last visible photo shows "+N"
        if (i === MAX_VISIBLE - 1 && remaining > 0) {
            children.push(el("span", { className: "moreOverlay", text: `+${remaining}` }));
        }

        const item = el("button", {
            className: "galleryItem",
            attrs: { type: "button", "aria-label": `Open photo ${i + 1} of ${galleryPhotos.length}` },
        }, children);

        item.addEventListener("click", () => openLightbox(i));
        grid.append(item);
    });
}

function showPhoto(index) {
    const total = galleryPhotos.length;
    currentPhoto = (index + total) % total;
    $("#lbImg").src = galleryPhotos[currentPhoto].src;
    $("#lbImg").alt = galleryPhotos[currentPhoto].alt;
    $("#lbCount").textContent = `${currentPhoto + 1} / ${total}`;
}

function openLightbox(index) {
    lastFocused = document.activeElement;
    showPhoto(index);
    $("#lightbox").classList.add("open");
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
}

function closeLightbox() {
    $("#lightbox").classList.remove("open");
    document.body.style.overflow = "";
    lastFocused?.focus();
}

function setupLightbox() {
    const box = $("#lightbox");

    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lbPrev").addEventListener("click", () => showPhoto(currentPhoto - 1));
    $("#lbNext").addEventListener("click", () => showPhoto(currentPhoto + 1));
    box.addEventListener("click", (e) => e.target === box && closeLightbox());

    document.addEventListener("keydown", (e) => {
        if (!box.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPhoto(currentPhoto - 1);
        if (e.key === "ArrowRight") showPhoto(currentPhoto + 1);
    });

    // Swipe on phones
    let startX = 0;
    box.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
    box.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) showPhoto(currentPhoto + (dx < 0 ? 1 : -1));
    });
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

    // Tap anywhere outside the sidebar to close it (the menu button is hidden while open)
    document.addEventListener("click", (e) => {
        if (sidebar.classList.contains("open") && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
            setOpen(false);
        }
    });
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

/* ---------- Init ---------- */

renderOrgChart();
renderEvents();
renderAnnouncements();
renderGallery();
setupMenu();
setupLightbox();
setupActiveLink();
