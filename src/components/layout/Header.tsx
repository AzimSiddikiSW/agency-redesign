"use client";

import { BsBell, BsList } from "react-icons/bs";
import { useMode } from "@/components/providers/ModeProvider";

export default function Header() {
  const { isConfig, toggleMode } = useMode();

  return (
    <header
      className="sw-topnav position-fixed top-0 start-0 w-100 border-bottom bg-light"
      style={{ height: "var(--sw-topnav-height)", zIndex: 1030 }}
    >
      <div className="h-100 sw-frame">
        <div className="h-100 d-flex align-items-center justify-content-between">
          {/* Left: hamburger (mobile only) + logo (all sizes) */}
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-sm px-0 d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#swNav"
              aria-controls="swNav"
              aria-label="Open menu"
            >
              <BsList size={28} />
            </button>

            {isConfig ? (
              <img
                src="/icons/favicon-32x32-bw.png"
                alt="SansWrite"
                height={24}
              />
            ) : (
              <img src="/icons/favicon-32x32.png" alt="SansWrite" height={24} />
            )}

            <span className="fw-semibold d-none d-sm-inline">SansWrite</span>
          </div>

          {/* Right side: notifications + user menu */}
          <div className="d-flex align-items-center gap-2">
            <div className="dropdown">
              <button
                className="notifications-btn p-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsBell size={20} />
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                <li>
                  <span className="dropdown-item-text">
                    <span className="d-flex flex-column align-items-center text-center gap-2 py-2">
                      <span className="fw-semibold fs-6">
                        No new notifications
                      </span>
                      <span className="small text-muted fs-half">
                        Notifications inbox is empty
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center border rounded bg-white">
              <span className="user-menu text-muted">Azim Siddiki</span>
              <div className="dropdown">
                <button
                  className="btn btn-primary btn-sm dropdown-toggle user-menu-dropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={toggleMode}
                    >
                      {isConfig ? "Production Mode" : "Configuration Mode"}
                    </button>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
