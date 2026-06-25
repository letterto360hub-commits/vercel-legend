// components/Header.jsx
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Email from "./icons/email";
import Telephone from "./icons/telephone";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import Popup from "reactjs-popup"; // kept in case other parts of your app use it

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  // desktop hover states
  const [openMain, setOpenMain] = useState(false);
  const [openResidential, setOpenResidential] = useState(false);
  const [openCompleted, setOpenCompleted] = useState(false);
  const [openOngoing, setOpenOngoing] = useState(false);
  const [openCommercial, setOpenCommercial] = useState(false);
  const [openReady, setOpenReady] = useState(false); // ✅ Ready to occupy
  // Add these two lines alongside the other state declarations
  const [openUpcoming, setOpenUpcoming] = useState(false);
  const [mobileOpenUpcoming, setMobileOpenUpcoming] = useState(false);
  // mobile accordion states
  const [mobileOpenProjects, setMobileOpenProjects] = useState(false);
  const [mobileOpenResidential, setMobileOpenResidential] = useState(false);
  const [mobileOpenOngoing, setMobileOpenOngoing] = useState(false);
  const [mobileOpenCompleted, setMobileOpenCompleted] = useState(false);
  const [mobileOpenCommercial, setMobileOpenCommercial] = useState(false);
  const [mobileOpenReady, setMobileOpenReady] = useState(false); // ✅ Ready to occupy

  const router = useRouter();
  const menuRef = useRef(null);

  // hover timers (desktop)
  const mainEnterTimer = useRef(null);
  const mainLeaveTimer = useRef(null);
  const residentialEnterTimer = useRef(null);
  const residentialLeaveTimer = useRef(null);
  const completedEnterTimer = useRef(null);
  const upcomingEnterTimer = useRef(null);
  const upcomingLeaveTimer = useRef(null);
  const completedLeaveTimer = useRef(null);
  const ongoingEnterTimer = useRef(null);
  const ongoingLeaveTimer = useRef(null);
  const commercialEnterTimer = useRef(null);
  const commercialLeaveTimer = useRef(null);
  const readyEnterTimer = useRef(null); // ✅ Ready timers
  const readyLeaveTimer = useRef(null);

  const OPEN_DELAY = 150;
  const CLOSE_DELAY = 300;

  // scroll state (kept from your original)
  let oldY = 0;
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  useEffect(() => {
    const header = document.querySelector("#header");
    if (header) setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = ({}) => {
    if (window.scrollY > oldY || window.scrollY < 5) {
      // placeholder
    } else {
      // placeholder
    }
    oldY = window.scrollY;
    setScroll(window.scrollY);
  };

  // cleanup timers
  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  function clearAllTimers() {
    clearTimeout(mainEnterTimer.current);
    clearTimeout(mainLeaveTimer.current);
    clearTimeout(residentialEnterTimer.current);
    clearTimeout(residentialLeaveTimer.current);
    clearTimeout(completedEnterTimer.current);
    clearTimeout(completedLeaveTimer.current);
    clearTimeout(ongoingEnterTimer.current);
    clearTimeout(ongoingLeaveTimer.current);
    clearTimeout(commercialEnterTimer.current);
    clearTimeout(commercialLeaveTimer.current);
    clearTimeout(readyEnterTimer.current); // ✅
    clearTimeout(readyLeaveTimer.current); // ✅
    clearTimeout(upcomingEnterTimer.current);
    clearTimeout(upcomingLeaveTimer.current);
  }

  // click outside & Esc to close
  useEffect(() => {
    function onDocClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeAllImmediate();
      }
    }
    function onKey(e) {
      if (e.key === "Escape") closeAllImmediate();
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function closeAllImmediate() {
    clearAllTimers();
    setOpenMain(false);
    setOpenResidential(false);
    setOpenCompleted(false);
    setOpenOngoing(false);
    setOpenCommercial(false);
    setOpenReady(false); // ✅
    setOpenUpcoming(false);
    setMobileOpenUpcoming(false);
    setMobileOpenProjects(false);
    setMobileOpenResidential(false);
    setMobileOpenOngoing(false);
    setMobileOpenCompleted(false);
    setMobileOpenCommercial(false);
    setMobileOpenReady(false); // ✅

    setShowMenu(false);
  }

  // desktop hover helpers
  const enterMain = () => {
    clearTimeout(mainLeaveTimer.current);
    mainEnterTimer.current = setTimeout(() => setOpenMain(true), OPEN_DELAY);
  };
  const leaveMain = () => {
    clearTimeout(mainEnterTimer.current);
    mainLeaveTimer.current = setTimeout(() => {
      setOpenMain(false);
      setOpenResidential(false);
      setOpenCompleted(false);
      setOpenOngoing(false);
      setOpenCommercial(false);
      setOpenReady(false); // ✅
    }, CLOSE_DELAY);
  };

  const enterResidential = () => {
    clearTimeout(residentialLeaveTimer.current);
    residentialEnterTimer.current = setTimeout(
      () => setOpenResidential(true),
      OPEN_DELAY,
    );
  };
  const leaveResidential = () => {
    clearTimeout(residentialEnterTimer.current);
    residentialLeaveTimer.current = setTimeout(() => {
      setOpenResidential(false);
      setOpenCompleted(false);
      setOpenOngoing(false);
      setOpenReady(false); // ✅
      setOpenUpcoming(false);
    }, CLOSE_DELAY);
  };

  const enterCompleted = () => {
    clearTimeout(completedLeaveTimer.current);
    completedEnterTimer.current = setTimeout(
      () => setOpenCompleted(true),
      OPEN_DELAY,
    );
  };
  const leaveCompleted = () => {
    clearTimeout(completedEnterTimer.current);
    completedLeaveTimer.current = setTimeout(
      () => setOpenCompleted(false),
      CLOSE_DELAY,
    );
  };

  const enterOngoing = () => {
    clearTimeout(ongoingLeaveTimer.current);
    ongoingEnterTimer.current = setTimeout(
      () => setOpenOngoing(true),
      OPEN_DELAY,
    );
  };
  const leaveOngoing = () => {
    clearTimeout(ongoingEnterTimer.current);
    ongoingLeaveTimer.current = setTimeout(
      () => setOpenOngoing(false),
      CLOSE_DELAY,
    );
  };

  const enterCommercial = () => {
    clearTimeout(commercialLeaveTimer.current);
    commercialEnterTimer.current = setTimeout(
      () => setOpenCommercial(true),
      OPEN_DELAY,
    );
  };
  const leaveCommercial = () => {
    clearTimeout(commercialEnterTimer.current);
    commercialLeaveTimer.current = setTimeout(
      () => setOpenCommercial(false),
      CLOSE_DELAY,
    );
  };

  // ✅ Ready to occupy hover helpers
  const enterReady = () => {
    clearTimeout(readyLeaveTimer.current);
    readyEnterTimer.current = setTimeout(() => setOpenReady(true), OPEN_DELAY);
  };
  const leaveReady = () => {
    clearTimeout(readyEnterTimer.current);
    readyLeaveTimer.current = setTimeout(
      () => setOpenReady(false),
      CLOSE_DELAY,
    );
  };
  const toggleMobileUpcoming = () => setMobileOpenUpcoming((s) => !s);
  const enterUpcoming = () => {
    clearTimeout(upcomingLeaveTimer.current);
    upcomingEnterTimer.current = setTimeout(
      () => setOpenUpcoming(true),
      OPEN_DELAY,
    );
  };
  const leaveUpcoming = () => {
    clearTimeout(upcomingEnterTimer.current);
    upcomingLeaveTimer.current = setTimeout(
      () => setOpenUpcoming(false),
      CLOSE_DELAY,
    );
  };
  // mobile toggles
  const toggleMobileProjects = () => setMobileOpenProjects((s) => !s);
  const toggleMobileResidential = () => setMobileOpenResidential((s) => !s);
  const toggleMobileOngoing = () => setMobileOpenOngoing((s) => !s);
  const toggleMobileCompleted = () => setMobileOpenCompleted((s) => !s);
  const toggleMobileCommercial = () => setMobileOpenCommercial((s) => !s);
  const toggleMobileReady = () => setMobileOpenReady((s) => !s); // ✅

  const handleNavClick = (href) => {
    setShowMenu(false);
    // router.push(href); // optional programmatic nav
  };

  // prevent background scroll when menu open
  useEffect(() => {
    if (showMenu) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [showMenu]);

  return (
    <header id="header" className="w-full z-50 bg-[#000D1E] fixed left-0 top-0">
      <Head>
        <script
          async
          defer
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N8L3LKNQ');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8L3LKNQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </Head>

      <div className="mx-auto grid grid-cols-2 lg:grid-cols-6 items-center py-2 px-4 z-50 text-gray-200 container">
        <div className="flex justify-start">
          {/* Link wrapping image - no inner <a> */}
          <Link href="/" className="flex items-center">
            <Image
              src={"/images/legendary-logo-a.png"}
              width={256}
              height={234}
              quality={100}
              alt="Legendary Logo"
              className="logo1 w-24 md:w-28 lg:w-32 h-auto transition-all duration-500 resplogo"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu flex md:hidden justify-end relative ">
          <button
            onClick={() => setShowMenu((s) => !s)}
            className="mobile-menu-icon flex flex-col gap-2 items-center justify-center p-2"
            aria-label="Toggle mobile menu"
          >
            <span className="w-8 h-[2px] bg-white" />
            <span className="w-8 h-[2px] bg-white" />
            <span className="w-8 h-[2px] bg-white" />
          </button>

          {/* Mobile panel */}
          {showMenu && (
            <div
              className="mobile-menu-panel slide-in-right"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
            >
              <ul className="flex flex-col p-4 gap-4 text-sm md:text-base uppercase">
                <li>
                  <Link
                    href="/"
                    className="block py-2"
                    onClick={() => handleNavClick("/")}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about-us"
                    className="block py-2"
                    onClick={() => handleNavClick("/about-us")}
                  ></Link>
                </li>

                {/* Projects accordion (mobile) */}
                <li>
                  <button
                    onClick={toggleMobileProjects}
                    aria-expanded={mobileOpenProjects}
                    className="w-full flex items-center justify-between py-2 px-2 bg-gray-100 rounded"
                  >
                    <span className="font-semibold">Projects</span>
                    <span className="ml-2">
                      {mobileOpenProjects ? "▾" : "▸"}
                    </span>
                  </button>

                  {mobileOpenProjects && (
                    <div className="mt-2 pl-2">
                      {/* Residential */}
                      <div className="mb-2">
                        <button
                          onClick={toggleMobileResidential}
                          aria-expanded={mobileOpenResidential}
                          className="w-full text-left py-2 px-2 rounded hover:bg-gray-50 flex items-center justify-between"
                        >
                          <span className="font-medium">
                            Residential Projects
                          </span>
                          <span>{mobileOpenResidential ? "▾" : "▸"}</span>
                        </button>

                        {mobileOpenResidential && (
                          <div className="mt-2 pl-4 flex flex-col gap-2">
                            {/* On going */}
                            <button
                              onClick={toggleMobileOngoing}
                              className="w-full text-left flex items-center justify-between py-1"
                            >
                              <span>On going</span>
                              <span>{mobileOpenOngoing ? "▾" : "▸"}</span>
                            </button>

                            {mobileOpenOngoing && (
                              <ul className="pl-3 flex flex-col gap-2">
                                <li>
                                  <Link
                                    href="/projects/pride"
                                    className="block"
                                    onClick={() =>
                                      handleNavClick("/projects/pride")
                                    }
                                  >
                                    Legendary Pride (Nungambakkam)
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/projects/marvel"
                                    className="block"
                                    onClick={() =>
                                      handleNavClick("/projects/marvel")
                                    }
                                  >
                                    Legendary Marvel(Harrington Road)
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/projects/reva"
                                    className="block"
                                    onClick={() =>
                                      handleNavClick("/projects/reva")
                                    }
                                  >
                                    Legendary Reva (T Nagar)
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/projects/bliss"
                                    className="block"
                                    onClick={() =>
                                      handleNavClick("/projects/bliss")
                                    }
                                  >
                                    Legendary Bliss (T Nagar)
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/coming-soon"
                                    className="block"
                                    onClick={() =>
                                      handleNavClick("/coming-soon")
                                    }
                                  >
                                    Legendary Adonia (Nungambakkam)
                                  </Link>
                                </li>
                              </ul>
                            )}

                            {/* ✅ Ready to occupy */}
                            <button
                              onClick={toggleMobileReady}
                              className="w-full text-left flex items-center justify-between py-1"
                            >
                              <span>Ready to occupy</span>
                              <span>{mobileOpenReady ? "▾" : "▸"}</span>
                            </button>
                            {mobileOpenReady && (
                              <ul className="pl-3 flex flex-col gap-2">
                                <li>
                                  <Link
                                    href="/projects/super60"
                                    className="block"
                                    onClick={() =>
                                      handleNavClick("/projects/super60")
                                    }
                                  >
                                    Legendary Super60 (Saidapet)
                                  </Link>
                                </li>
                              </ul>
                            )}

                            {/* Completed */}
                            {/* Upcoming - Mobile */}
                            <button
                              onClick={toggleMobileUpcoming}
                              className="w-full text-left flex items-center justify-between py-1"
                            >
                              <span>Upcoming</span>
                              <span>{mobileOpenUpcoming ? "▾" : "▸"}</span>
                            </button>
                            {mobileOpenUpcoming && (
                              <ul className="pl-3 flex flex-col gap-2">
                                <li>
                                  <Link
                                    href="/projects/moon"
                                    className="block"
                                    onClick={() =>
                                      handleNavClick("/projects/moon")
                                    }
                                  >
                                    Legendary Moon
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/projects/reva"
                                    className="block"
                                    onClick={() =>
                                      handleNavClick("/projects/reva")
                                    }
                                  >
                                    Legendary Reva (T Nagar)
                                  </Link>
                                </li>
                              </ul>
                            )}
                            <button
                              onClick={toggleMobileCompleted}
                              className="w-full text-left flex items-center justify-between py-1"
                            >
                              <span>Completed</span>
                              <span>{mobileOpenCompleted ? "▾" : "▸"}</span>
                            </button>
                            {mobileOpenCompleted && (
                              <ul className="pl-3 flex flex-col gap-2">
                                <li>
                                  <Link
                                    href="/projects/platina"
                                    className="block"
                                    onClick={() =>
                                      handleNavClick("/projects/platina")
                                    }
                                  >
                                    Legendary Platina (Gopalapuram)
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Commercial */}
                      <div>
                        <button
                          onClick={toggleMobileCommercial}
                          aria-expanded={mobileOpenCommercial}
                          className="w-full text-left py-2 px-2 rounded hover:bg-gray-50 flex items-center justify-between"
                        >
                          <span className="font-medium">
                            Commercial Projects
                          </span>
                          <span>{mobileOpenCommercial ? "▾" : "▸"}</span>
                        </button>

                        {mobileOpenCommercial && (
                          <ul className="pl-3 mt-2 flex flex-col gap-2">
                            <li>
                              <Link
                                href="/projects/square"
                                className="block"
                                onClick={() =>
                                  handleNavClick("/projects/square")
                                }
                              >
                                Legendary Square (Purasaiwakkam)
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <Link
                    href="/career"
                    className="block py-2"
                    onClick={() => handleNavClick("/career")}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="block py-2"
                    onClick={() => handleNavClick("/contact-us")}
                  >
                    Contact Us
                  </Link>
                </li>

                <li className="border-t border-gray-200 pt-3 mt-2">
                  <div className="flex items-center gap-2 text-xs">
                    <Email />
                    <span className="underline text-sm">
                      <a href="mailto:info@legendary.in">info@legendary.in</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <Telephone />
                    <span className="underline">
                      <a href="tel:+917550065595">+91 7550065595</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Desktop nav */}
        <ul className="md:flex gap-4 lg:gap-6 text-sm md:text-base lg:text-lg justify-end hidden col-span-3 font-medium uppercase">
          <li className="animate-grow    pr-4 respfont">
            <Link href="/">Home</Link>
          </li>
          <li className="animate-grow    pr-4 respfont">
            <Link href="/about-us">About Us</Link>
          </li>

          {/* Hover dropdown */}
          <li
            className="animate-grow    pr-4 relative"
            onMouseEnter={enterMain}
            onMouseLeave={leaveMain}
            ref={menuRef}
          >
            <button className="cursor-pointer px-3 py-1 uppercase text-sm font-medium respfont">
              {" "}
              Projects
            </button>

            <div
              className={`transition-all duration-150 absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md z-50 ${
                openMain ? "block" : "hidden"
              }`}
            >
              <ul className="min-w-[200px] p-2 space-y-1 text-sm font-medium uppercase">
                <li
                  className="relative"
                  onMouseEnter={enterResidential}
                  onMouseLeave={leaveResidential}
                >
                  <div className="cursor-pointer px-3 py-2 hover:bg-gray-100 rounded flex items-center justify-between whitespace-nowrap">
                    <Link href="/residential_projects">
                      Residential Projects ▸
                    </Link>
                  </div>

                  <div
                    className={`absolute left-full top-0 ml-1 bg-white text-black shadow-lg rounded-md z-50 ${
                      openResidential ? "block" : "hidden"
                    }`}
                  >
                    <ul className="w-[280px] p-0">
                      {/* On going */}
                      <li
                        className="relative"
                        onMouseEnter={enterOngoing}
                        onMouseLeave={leaveOngoing}
                      >
                        <div className="cursor-pointer px-3 py-2 hover:bg-gray-100 rounded flex items-center justify-between whitespace-nowrap">
                          On going ▸
                        </div>

                        <div
                          className={`absolute left-full top-0 ml-1 bg-white text-black shadow-lg rounded-md z-50 ${
                            openOngoing ? "block" : "hidden"
                          }`}
                        >
                          <ul className="w-[360px] p-0">
                            <li className="px-4 py-3 hover:bg-gray-100 rounded">
                              <Link href="/projects/pride">
                                Legendary Pride (Nungambakkam)
                              </Link>
                            </li>

                            <li className="px-4 py-3 hover:bg-gray-100 rounded">
                              <Link href="/projects/marvel">
                                Legendary Marvel (Harrington Road)
                              </Link>
                            </li>

                            <li className="px-4 py-3 hover:bg-gray-100 rounded">
                              <Link href="/projects/bliss">
                                Legendary Bliss (T Nagar)
                              </Link>
                            </li>
                            <li className="px-4 py-3 hover:bg-gray-100 rounded">
                              <Link href="/coming-soon">
                                Legendary Adonia (Nungambakkam)
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* Completed */}
                      <li
                        className="relative"
                        onMouseEnter={enterCompleted}
                        onMouseLeave={leaveCompleted}
                      >
                        <div className="cursor-pointer px-3 py-2 hover:bg-gray-100 rounded flex items-center justify-between whitespace-nowrap">
                          Completed ▸
                        </div>

                        <div
                          className={`absolute left-full top-0 ml-1 bg-white text-black shadow-lg rounded-md z-50 ${
                            openCompleted ? "block" : "hidden"
                          }`}
                        >
                          <ul className="w-[260px] p-0">
                            <li className="px-4 py-3 hover:bg-gray-100 rounded">
                              <Link href="/projects/super60">
                                Legendary Super60 (Saidapet)
                              </Link>
                            </li>
                          </ul>
                          <ul className="w-[260px] p-0">
                            <li className="px-4 py-3 hover:bg-gray-100 rounded">
                              <Link href="/projects/platina">
                                Legendary Platina (Gopalapuram)
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      {/* Upcoming */}
                      <li
                        className="relative"
                        onMouseEnter={enterUpcoming}
                        onMouseLeave={leaveUpcoming}
                      >
                        <div className="cursor-pointer px-3 py-2 hover:bg-gray-100 rounded flex items-center justify-between whitespace-nowrap">
                          Upcoming ▸
                        </div>

                        <div
                          className={`absolute left-full top-0 ml-1 bg-white text-black shadow-lg rounded-md z-50 ${
                            openUpcoming ? "block" : "hidden"
                          }`}
                        >
                          <ul className="w-[300px] p-0">
                            <li className="px-4 py-3 hover:bg-gray-100 rounded">
                              <Link href="/projects/moon">Legendary Moon</Link>
                            </li>
                            <li className="px-4 py-3 hover:bg-gray-100 rounded">
                              <Link href="/projects/reva">
                                Legendary Reva (T Nagar)
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Commercial Projects */}
                <li
                  className="relative"
                  onMouseEnter={enterCommercial}
                  onMouseLeave={leaveCommercial}
                >
                  <div className="cursor-pointer px-3 py-2 hover:bg-gray-100 rounded flex items-center justify-between whitespace-nowrap">
                    <Link href="/commercial_projects">
                      Commercial Projects ▸
                    </Link>
                  </div>
                  <div
                    className={`absolute left-full top-0 ml-1 bg-white text-black shadow-lg rounded-md z-50 ${
                      openCommercial ? "block" : "hidden"
                    }`}
                  >
                    <ul className="w-[260px] p-0">
                      <li className="px-4 py-3 hover:bg-gray-100 rounded">
                        <Link href="/projects/square">
                          Legendary Square (Purasaiwakkam)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="animate-grow    pr-4 respfont">
            <Link href="/career">Careers</Link>
          </li>
          <li className="animate-grow    pr-4 respfont">
            <Link href="/press-coverage">Media</Link>
          </li>
          <li className="animate-grow    pr-4 respfont ">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <div className="lg:flex gap-2 justify-end text-sm hidden col-span-2">
          <Email />
          <span className="text-gray-300 underline">
            <a href="mailto:info@legendary.in">info@legendary.in</a>
          </span>
          <p> | </p>
          <Telephone />
          <span className="text-gray-300 underline">
            <a href="tel:7550065595">+91 7550065595</a>
          </span>
        </div>
      </div>

      <style jsx>{`
        #header ul li a {
          word-break: break-word;
        }
      `}</style>
    </header>
  );
}
