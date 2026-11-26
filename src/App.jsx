import { useEffect, useRef, useState } from "react";
import clubImage from "./assets/club_image.jpg";
import photo from "./assets/website_pic.jpg";
import contactImage from "./assets/contact_us.jpg";
import logo from "./assets/actual_club_logo.jpg";
import magCover from "./assets/magazine/saathee_1.jpg";
import magPage1 from "./assets/magazine/saathee_2.jpg";
import magPage2 from "./assets/magazine/saathee_3.jpg";
import wmCover from "./assets/magazine/waxhaw_marvin_1.jpg";
import wmArticle from "./assets/magazine/waxhaw_marvin_2.jpg";
import togetherImage from "./assets/together_we_serve_our_community.jpg";
import backToSchool from "./assets/projects/back_to_school.jpg";
import snackCart from "./assets/projects/stock_the_snack_cart.jpg";
import careKits from "./assets/projects/healthcare_workers_appreciation_kits.jpg";
import bookDrive from "./assets/projects/booktober_bookdrive.jpg";
import president from "./assets/board/president.png";
import vicePresident from "./assets/board/vice_president.png";
import secretary from "./assets/board/secretary.png";
import treasurer from "./assets/board/treasurer.png";
import membershipChair from "./assets/board/membership_chair.png";
import marketingChair from "./assets/board/marketing_chair.png";
import boardMember from "./assets/board/board_member.png";
import boardMember1 from "./assets/board/board_member1.png";
import boardMember2 from "./assets/board/board_member2.png";
import "./App.css";

/* ------------------------------------------------------------------ */
/*  CONTENT: everything you might want to edit lives in this block     */
/* ------------------------------------------------------------------ */

const LINKS = [
  { id: "home", label: "Home" },
  { id: "who", label: "Who We Are" },
  { id: "projects", label: "Projects" },
  { id: "board", label: "Board" },
  { id: "members", label: "Members" },
  { id: "links", label: "Links" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/nextgenleoclub/" },
    { id: "contact", label: "Contact Us" },
];

const TAGLINE = ["Empowering youth", "Driving change", "Making a difference"];

/* Registration form button (the big photo banner near the top) */
const REGISTRATION_LINK =
  "https://drive.google.com/file/d/1bonAe-IjNE-rFu1dmdAyU3p7nHyDo_1U/view";

/* Project slider. To change a button's wording, edit its "button" line. */
const PROJECTS = [
  {
    title: "Back to School",
    img: backToSchool,
    alt: "Club members holding the school supplies they collected",
    about:
      "They went door-to-door in the community to collect school supplies and monetary donations, raising a total of $436. With these contributions, the club purchased additional supplies and provided them to students at Western Union Elementary and Waxhaw Elementary School. This project was a wonderful way to support young learners and ensure they start the school year ready to learn and succeed.",
    stat: { value: "$436", label: "raised" },
    button: "View Photos",
    link: "https://drive.google.com/drive/folders/1N854Kf01lvcd177Pv2fyCxvl_tzP5skt",
  },
  {
    title: "Stock the Snack Cart",
    img: snackCart,
    alt: "Club members holding boxes of snacks for the snack cart",
    about:
      "The Waxhaw Lions and NextGen Leos teamed up for a heartwarming service day at the Ronald McDonald House of Charlotte. Together, we donated and delivered approximately 700 individually wrapped snack items to help stock their snack cart — a much-needed resource for families staying there. Before delivery, our dedicated Leos helped sort, label, and place expiration date stickers on each item to ensure everything was ready for distribution. They also assisted in purchasing and organizing the snacks — a true team effort from start to finish!",
    stat: { value: "~700", label: "snack items delivered" },
    button: "View Photos",
    link: "https://www.facebook.com/story.php?story_fbid=1221721593323344&id=100064565445374&rdid=lOClVpi8TQTJcs9n#",
  },
  {
    title: "Healthcare Workers Appreciation Kits",
    img: careKits,
    alt: "A handmade card reading Next Gen Leo Club",
    about:
      "The Leos assembled and delivered 60 beautifully prepared care kits to Levine Children’s Hospital, each thoughtfully filled with a mug, candle, flowers, chocolates, and a handmade card — all created with love and care. Even the bag colors were chosen to match our Leo T-shirts! Led by Project Leads Shashank and Purvi, the Leos managed every detail — from ordering supplies and coordinating with the hospital to collecting $315 in donations through door-to-door efforts. They also collaborated with another nonprofit and partnered with a local boutique that generously donated flowers. This project reflected true Leo spirit — compassion, creativity, and teamwork in action.",
    stat: { value: "60", label: "care kits delivered" },
    button: "View Photos",
    link: "https://www.facebook.com/story.php?story_fbid=1251964143632422&id=100064565445374&rdid=QIHcGk8olrZJG6Ke#",
  },
  {
    title: "Booktober Bookdrive",
    img: bookDrive,
    alt: "A club member holding up a children’s book beside a Halloween decoration",
    about:
      "Our NextGen Leos wrapped up a remarkable Booktober Book Drive in partnership with Promising Pages, collecting, cleaning, and sorting over 700 books that will soon reach the hands of young readers in our community. The Leos also went door-to-door to raise funds, helping cover supplies and support the donation efforts — a wonderful example of initiative and community engagement! The donated books will be distributed by Promising Pages to children living in book deserts, where access to books is limited — ensuring every child has the opportunity to experience the joy of reading.",
    stat: { value: "700+", label: "books collected" },
    button: "View Photos",
    link: "https://www.facebook.com/story.php?story_fbid=1276132821215554&id=100064565445374&rdid=Dz8U8Ekr1ncwpMIF#",
  },
];

/* Magazine feature */
const FEATURE = {
  publication: "Saathee Magazine",
  title: "Next Gen Leo Club: Teens with Heart, Making Waves",
  note: "A Saathee Magazine feature on how the club’s teen members turn ideas into service.",
  date: "February 2026",
  button: "Read the Feature",
  link: "https://saathee.com/next-gen-leo-club-teens-with-heart-making-waves/",
};

/* Important Links section */
const IMPORTANT_LINKS = [
  {
    label: "Project Roles and Responsibilities",
    url: "https://docs.google.com/document/d/1mQ90Wft2U38zBLrm3ne-QDYqzk9ln_WT/edit",
  },
  {
    label: "Service Activity Template",
    url: "https://docs.google.com/spreadsheets/d/1KBEKVJBAbfhj_RgOFHVgugbGYq9zQVQef7xV0pnwucU/edit?gid=1945235039#gid=1945235039",
  },
  {
    label: "Parental Consent Form",
    url: "https://docs.google.com/document/d/1cb9RH6BVjD2CbgtdPmnariGxJj--qzwg/edit",
  },
  {
    label: "Project Expense Template",
    url: "https://docs.google.com/spreadsheets/d/13DUecsrGdTjdQbAAU6wG8nCyovMaNk5oNnjtQstdbFs/edit?gid=0#gid=0",
  },
  {
    label: "Leo Club General Info",
    url: "https://www.lionsclubs.org/en/discover-our-clubs/about-leos",
  },
  {
    label: "Officers Handbook",
    url: "https://drive.google.com/file/d/1SliIwirGJTjg043boc3y8nhSap0v9756/view",
  },
  {
    label: "Calendar",
    url: "https://docs.google.com/spreadsheets/d/16ILt8zGWeiHQuing7-SQH11FwmgI8keUFMHLwkeN2Rc/edit?gid=547300675#gid=547300675",
  },
];

/*
  CONTACT FORM SETUP
  Paste the web address from your form service (for example Formspree) between
  the quotes below. Until you do, the form shows a "not connected yet" message
  instead of sending anything.
*/
const FORM_ENDPOINT = "";

/*
  Board members, in display order.
  To fine-tune a photo's crop:
    fx, fy = where the face is in the photo (0 to 1, left to right / top to bottom)
    z      = zoom (1 = photo fills the circle's width, higher = closer in)
    r      = photo height divided by width (leave as is)
*/
const BOARD = [
  { name: "Sashank Vinoth", role: "President", src: president, fx: 0.57, fy: 0.42, z: 3.2, r: 1.334 },
  { name: "Pranav Mani", role: "Vice President", src: vicePresident, fx: 0.66, fy: 0.44, z: 1.6, r: 1.332 },
  { name: "Akshadhaa Ramakrishnan", role: "Secretary", src: secretary, fx: 0.41, fy: 0.3, z: 1.4, r: 1.426 },
  { name: "Aryashri Jena", role: "Treasurer", src: treasurer, fx: 0.52, fy: 0.55, z: 4.2, r: 1.334 },
  { name: "Rishi Ramesh", role: "Membership Chair", src: membershipChair, fx: 0.48, fy: 0.275, z: 1.4, r: 1.43 },
  { name: "Natasha Andrews", role: "Marketing Chair", src: marketingChair, fx: 0.43, fy: 0.31, z: 1.1, r: 2.16 },
  { name: "Rithwik Mishra", role: "Board Member", src: boardMember, fx: 0.66, fy: 0.19, z: 3.0, r: 2.166 },
  { name: "Pranav Karthikeyan", role: "Board Member", src: boardMember1, fx: 0.585, fy: 0.35, z: 2.6, r: 1.416 },
  { name: "Krish Sridhar", role: "Board Member", src: boardMember2, fx: 0.49, fy: 0.29, z: 1.6, r: 1.334 },
];

/* All club members. Add or remove names freely; the page sorts them A to Z. */
const MEMBERS = [
  "Mahathi Mani", "Pranav Mani", "Aathmika Thanigai", "Nikitha Hegde",
  "Aryashri Jena", "Avantika Thanigai", "Medhasri Indela", "Purvi Selvaraj",
  "Rithwik Mishra", "Vibhav Magery", "Ivy Datta", "Ketina Francis",
  "Akshadhaa Ramakrishnan", "Lenisha Maheshkumar", "Pradyun Moparthi",
  "Jorden Nathan", "Rishi Ramesh", "Sanskruti Shah", "Krish Sridhar",
  "Milani Walker", "Pranav Karthikeyan", "Mona Baskaran", "Anish Sunkireddy",
  "Lon’dyn Baker", "Anirudh Satish", "Rohith Karthikeyan", "Natasha Andrews",
  "Amrutha Achar", "Sashank Vinoth", "Sneh Shah", "Taseen Nayyer",
  "Dave Singh", "Sriram Senthil", "Srujan Devalaraju", "Rayan Muntaha",
  "Saket Talap", "Nishika Yadav", "Yash Rishipathak", "Sreeja Talluri",
  "Darshan Subramonium", "Hasini Baskaran", "Abhi Kalakota", "Sanvi Kalakota",
  "Advaita Vydyula", "Arshiya Bansal", "Shlok Patel", "Jiyashree Thangaraj",
  "Saketh Twarakavi", "Shyam Krishnan", "Viraaj Puri", "Ayanna Sharma",
  "Kashvi Sareen", "Prisha Sareen", "Anya Agarwal",
].sort((a, b) => a.localeCompare(b));

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */

const pad = (n) => String(n).padStart(2, "0");

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Positions a board photo inside its circle so the face lands near the center */
function crop({ fx, fy, z, r }) {
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const left = clamp(0.5 - fx * z, 1 - z, 0);
  const top = clamp(0.46 - fy * z * r, 1 - z * r, 0);
  return { width: `${z * 100}%`, left: `${left * 100}%`, top: `${top * 100}%` };
}

/* Fades elements in as they scroll into view */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/*  Sections                                                           */
/* ------------------------------------------------------------------ */

function Marquee() {
  const row = [0, 1, 2].flatMap(() => TAGLINE);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div className="marquee-row" key={k}>
            {row.map((t, i) => (
              <span key={i} className="marquee-item">
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* The three Saathee Magazine pages: tap or click to shuffle the stack */
const SAATHEE_PAGES = [
  { src: magCover, alt: "Cover of Saathee Magazine, February 2026" },
  { src: magPage1, alt: "First page of the Next Gen Leo Club article" },
  { src: magPage2, alt: "Second page of the Next Gen Leo Club article" },
];

const WAXHAW_PAGES = [
  { src: wmCover, alt: "Cover of Waxhaw & Marvin Living, March 2026" },
  { src: wmArticle, alt: "Next Gen Leo Club article in Waxhaw & Marvin Living" },
];

const PRESS = [
  {
    publication: "Saathee Magazine",
    date: "February 2026",
    title: "Teens with Heart, Making Waves",
    pages: SAATHEE_PAGES,
    link: "https://saathee.com/next-gen-leo-club-teens-with-heart-making-waves/",
    button: "Read the Feature",
  },
  {
    publication: "Waxhaw & Marvin Living",
    date: "March 2026",
    title: "Local Teens Turn Compassion into Action",
    pages: WAXHAW_PAGES,
  },
];

function MagazineStack({ pages }) {
  const [order, setOrder] = useState(pages.map((_, i) => i));
  const [leaving, setLeaving] = useState(false);
  const shuffle = () => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setLeaving(false);
    }, 280);
  };
  return (
    <div className="mag">
      <div className={`mag-stack ${leaving ? "leaving" : ""}`}>
        {pages.map((p, i) => {
          const pos = order.indexOf(i);
          return (
            <button
              key={p.src}
              type="button"
              className={`mag-card pos-${pos}`}
              onClick={shuffle}
              tabIndex={pos === 0 ? 0 : -1}
              aria-label={pos === 0 ? `${p.alt}. Press to shuffle the pages.` : p.alt}
            >
              <img src={p.src} alt="" loading="lazy" />
            </button>
          );
        })}
      </div>
      <button type="button" className="btn btn-yellow" onClick={shuffle}>
        Shuffle Pages
      </button>
    </div>
  );
}

function ProjectSlider() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const n = PROJECTS.length;

  const step = () => {
    const t = trackRef.current;
    return t.children[1].offsetLeft - t.children[0].offsetLeft;
  };

  /* Slide smoothly to a project (used by the dots and by clicking a neighbor) */
  const goTo = (i) => {
    const t = trackRef.current;
    if (!t) return;
    const target = Math.max(0, Math.min(n - 1, i));
    t.scrollTo({ left: target * step(), behavior: "smooth" });
  };

  /* Loop around: fade out, jump to the other end, fade back in */
  const wrapTo = (i) => {
    const t = trackRef.current;
    if (!t || fading) return;
    setFading(true);
    setTimeout(() => {
      t.scrollTo({ left: i * step(), behavior: "instant" });
      setIndex(i);
      setFading(false);
    }, 250);
  };

  const next = () => (index === n - 1 ? wrapTo(0) : goTo(index + 1));
  const prev = () => (index === 0 ? wrapTo(n - 1) : goTo(index - 1));

  
  /* Swiping past the last (or first) project loops around too */
  const touch = useRef({ x: 0, y: 0, start: 0 });
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY, start: index };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
    if (touch.current.start === n - 1 && dx < 0) wrapTo(0);
    if (touch.current.start === 0 && dx > 0) wrapTo(n - 1);
  };

  const onScroll = () => {
    const t = trackRef.current;
    const i = Math.round(t.scrollLeft / step());
    setIndex(Math.max(0, Math.min(n - 1, i)));
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <div
      className="slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Club projects"
      onKeyDown={onKeyDown}
    >
      <div
        className={`track ${fading ? "fading" : ""}`}
        ref={trackRef}
        onScroll={onScroll}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className={`slide ${i === index ? "active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${n}`}
            onClick={() => i !== index && goTo(i)}
          >
            <div className="slide-media">
              <img className="media-main" src={p.img} alt={p.alt} loading="lazy" />
            </div>

            <div className="slide-body">
              <span className="slide-num">{pad(i + 1)}</span>
              <h3>{p.title}</h3>
              <p>{p.about}</p>
              <div className="slide-foot">
                <div className="stat">
                  <strong>{p.stat.value}</strong>
                  <span>{p.stat.label}</span>
                </div>
                <a
                  className="btn btn-red"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={i === index ? 0 : -1}
                >
                  {p.button} <Arrow />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="slider-controls">
        <div className="counter" aria-live="polite">
          <strong>{pad(index + 1)}</strong>
          <span>/ {pad(n)}</span>
        </div>

        <div className="dots">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              type="button"
              className={`dot-btn ${i === index ? "on" : ""}`}
              aria-label={`Go to project ${i + 1}: ${p.title}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="arrows">
          <button
            type="button"
            className="arrow-btn"
            aria-label="Previous project"
            onClick={prev}
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            className="arrow-btn"
            aria-label="Next project"
            onClick={next}
          >
            <Chevron dir="right" />
          </button>
        </div>
      </div>
    </div>
  );
}

const STATUS_TEXT = {
  sent: "Thank you. Your message has been sent.",
  preview: "This form isn’t connected yet, so nothing was sent.",
  error: "Something went wrong. Please try again.",
};

function ContactForm() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!FORM_ENDPOINT) {
      setStatus("preview");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-card" onSubmit={onSubmit}>
      <h2>Contact Us</h2>

      <div className="fields">
        <label className="field">
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label className="field wide">
          <span>Telephone</span>
          <input type="tel" name="telephone" autoComplete="tel" />
        </label>
        <label className="field wide">
          <span>Message</span>
          <textarea name="message" rows="5" required />
        </label>
      </div>

      <div className="form-foot">
        <button type="submit" className="btn btn-red" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {STATUS_TEXT[status]}
        </p>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();

  /* Highlight the nav link for the section in the middle of the screen */
  useEffect(() => {
    const ids = ["home", "together", "who", "projects", "featured", "board", "members", "links", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id === "featured" ? "projects" : id === "together" ? "home" : id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Scroll progress bar, header background, and "scrolled to bottom" */
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--progress",
        max > 0 ? (y / max).toFixed(4) : 0
      );
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) {
        setActive("contact");
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the mobile menu with the Escape key */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Hero: the colored shapes drift gently with the cursor */
  const move = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--mx", x.toFixed(3));
    el.style.setProperty("--my", y.toFixed(3));
  };
  const leave = (e) => {
    e.currentTarget.style.setProperty("--mx", 0);
    e.currentTarget.style.setProperty("--my", 0);
  };

  return (
    <>
      <header className={`header ${menuOpen ? "open" : ""}`}>
        <div className="header-inner">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-logo">
  <img src={logo} alt="" />
</span>
            Next Gen Leos Club
          </a>

          <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Main">
                        {LINKS.map((l) => {
              const external = Boolean(l.href);
              return (
                <a
                  key={l.id}
                  href={external ? l.href : `#${l.id}`}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`${active === l.id ? "on" : ""} ${l.id === "contact" ? "cta" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="menu-btn"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section className="hero" id="home" onPointerMove={move} onPointerLeave={leave}>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>
              Next Gen <span className="hl">Leos Club</span>
            </h1>
            <p className="tagline">
              Empowering youth, driving change, making a difference.
            </p>
            <div className="hero-actions">
              <a className="btn btn-red" href="#projects">
                Explore Our Projects <Arrow />
              </a>
              <a className="btn btn-outline" href="#contact">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="shapes" aria-hidden="true">
              <span className="s-yellow" />
              <span className="s-red" />
              <span className="s-ring" />
            </div>
            <figure className="hero-card">
              <img src={clubImage} alt="Next Gen Leos Club" />
            </figure>
          </div>
        </div>

        <Marquee />
      </section>

      {/* ---------- photo banner ---------- */}
      <section className="together" id="together">
        <img src={togetherImage} alt="" />
        <div className="together-inner reveal">
          <span className="rule" />
          <h2>
            <span>Inspired,</span>
            <span className="accent">Equipped,</span>
            <span>Transformed</span>
          </h2>
          <a
            className="btn btn-yellow btn-lg"
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Registration Form <Arrow />
          </a>
        </div>
      </section>

      {/* ---------- who we are ---------- */}
      <section className="section who" id="who">
        <div className="wrap who-grid">
          <figure className="who-photo reveal">
            <img src={photo} alt="A Next Gen Leos Club member speaking at an event" />
          </figure>

          <div className="who-copy reveal" style={{ "--d": "120ms" }}>
            <span className="rule" />
            <h2>Who We Are</h2>
            <p>
              Next Gen Leos Club is a vibrant community of young leaders who are
              passionate about service, personal growth, and creating a positive
              impact in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- projects ---------- */}
      <section className="section projects" id="projects">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="rule" />
            <h2>Our Projects</h2>
          </div>
        </div>
        <div className="reveal" style={{ "--d": "100ms" }}>
          <ProjectSlider />
        </div>
      </section>

      {/* ---------- magazine feature ---------- */}
      <section className="section featured" id="featured">
          <div className="press">
    <p className="press-tag">In the Spotlight</p>
    <h2 className="press-title">Featured in the Press</h2>
    <div className="press-grid">
      {PRESS.map((m) => (
        <article className="press-card" key={m.publication}>
          <MagazineStack pages={m.pages} />
          <div className="press-text">
            <span className="press-date">{m.date}</span>
            <h3>{m.publication}</h3>
            <p>{m.title}</p>
            {m.link && (
              <a className="btn btn-red" href={m.link} target="_blank" rel="noreferrer">
                {m.button}
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* ---------- board ---------- */}
      <section className="section board" id="board">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="rule" />
            <h2>Our Board</h2>
          </div>

          <ul className="board-list">
            {BOARD.map((p, i) => (
              <li className="person reveal" key={p.name} style={{ "--d": `${(i % 5) * 70}ms` }}>
                <div className="portrait">
                  <img src={p.src} alt={`Portrait of ${p.name}`} style={crop(p)} />
                </div>
                <h3>{p.name}</h3>
                <p>{p.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- members ---------- */}
      <section className="section members" id="members">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="rule" />
            <h2>Our Members</h2>
          </div>

          <ul className="member-list reveal">
            {MEMBERS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- important links ---------- */}
      <section className="section links" id="links">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="rule" />
            <h2>Important Links</h2>
          </div>

          <ul className="link-grid">
            {IMPORTANT_LINKS.map((l, i) => (
              <li key={l.label} className="reveal" style={{ "--d": `${(i % 4) * 70}ms` }}>
                <a className="link-tile" href={l.url} target="_blank" rel="noopener noreferrer">
                  <span className="link-num">{pad(i + 1)}</span>
                  <span className="link-label">{l.label}</span>
                  <span className="link-arrow">
                    <Arrow />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- contact ---------- */}
      <section className="contact" id="contact">
        <div className="contact-photo">
          <img
            src={contactImage}
            alt="Next Gen Leos Club members standing in front of a car with its trunk open"
          />
        </div>
        <ContactForm />
      </section>
    </>
  );
}