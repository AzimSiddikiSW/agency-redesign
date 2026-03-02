"use client";

import { BsBell, BsList } from "react-icons/bs";
import { useMode } from "@/components/providers/ModeProvider";

export default function TopNav() {
  const { isConfig, toggleMode } = useMode();
  return (
    <header
      className="sw-topnav position-fixed top-0 border-bottom bg-light"
      style={{ height: "var(--sw-topnav-height)", zIndex: 1030 }}
    >
      <div className="h-100 d-flex align-items-center justify-content-between px-3">
        {/* Mobile/Tablet: logo + hamburger */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button
            className="btn btn-sm px-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#swSideNav"
            aria-controls="swSideNav"
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
        </div>

        {/* Desktop: left side is empty because sidebar already shows logo */}
        <div className="d-none d-lg-block" />

        {/* Right side: notifications + user menu */}
        <div className="d-flex align-items-center gap-2 ms-auto">
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
                    <svg
                      width="171"
                      height="160"
                      viewBox="0 0 171 160"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-1"
                    >
                      <g clipPath="url(#clip0_1_1526)">
                        <path
                          d="M42.1099 102.13C42.6511 102.13 43.0899 101.691 43.0899 101.15C43.0899 100.609 42.6511 100.17 42.1099 100.17C41.5686 100.17 41.1299 100.609 41.1299 101.15C41.1299 101.691 41.5686 102.13 42.1099 102.13Z"
                          fill="#CFCFCF"
                        />
                        <path
                          d="M105.66 61.17C97.2899 61.17 88.77 60.83 80.7999 58.61C72.9799 56.44 65.7999 52.23 59.3999 47.36C55.2099 44.19 51.3999 41.66 45.9599 42.04C40.638 42.328 35.5487 44.3153 31.4399 47.71C24.5199 53.77 25.5599 65 28.3299 72.86C32.4899 84.73 45.1499 93 55.9099 98.35C68.34 104.56 82 108.17 95.6899 110.24C107.69 112.07 123.11 113.39 133.51 105.56C143.06 98.35 145.68 81.91 143.34 70.81C142.772 67.5309 141.026 64.5721 138.43 62.49C131.72 57.58 121.71 60.86 114.17 61.02C111.37 61.08 108.52 61.15 105.66 61.17Z"
                          fill="#F2F2F2"
                        />
                        <path
                          d="M88.2299 111.48C94.4652 111.48 99.5199 106.425 99.5199 100.19C99.5199 93.9547 94.4652 88.9 88.2299 88.9C81.9946 88.9 76.9399 93.9547 76.9399 100.19C76.9399 106.425 81.9946 111.48 88.2299 111.48Z"
                          fill="#D2D2D2"
                        />
                        <path
                          d="M76.5636 29.7061C77.1878 29.567 77.8333 29.5521 78.4632 29.6624C79.0932 29.7727 79.6953 30.0059 80.2351 30.3489C80.7749 30.6919 81.2418 31.1378 81.6093 31.6612C81.9768 32.1847 82.2375 32.7753 82.3767 33.3995L84.1809 41.4908L74.6548 43.6149L72.8506 35.5236C72.7111 34.8978 72.6965 34.2505 72.8077 33.619C72.9189 32.9875 73.1538 32.3842 73.4988 31.8437C73.8437 31.3032 74.2921 30.8361 74.818 30.4693C75.3439 30.1025 75.9371 29.8431 76.5636 29.7061Z"
                          fill="white"
                          stroke="#BABABA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M121.07 93.18L63.1801 106.08C62.8205 106.161 62.4461 106.146 62.0938 106.038C61.7415 105.93 61.4235 105.732 61.1711 105.463C60.9187 105.195 60.7407 104.865 60.6546 104.507C60.5685 104.148 60.5773 103.774 60.6801 103.42L60.9201 102.59C62.9201 95.5 64.6601 87.69 63.0601 80.49L59.6401 65.13C56.7601 52.22 64.5001 39.07 77.3401 35.9C80.4711 35.1227 83.7259 34.9796 86.9131 35.479C90.1002 35.9784 93.1553 37.1103 95.8984 38.808C98.6416 40.5057 101.018 42.735 102.886 45.3646C104.755 47.9942 106.079 50.9711 106.78 54.12L110.31 70C111.92 77.2 116.78 83.56 121.64 89.1L122.21 89.75C122.441 90.0283 122.597 90.3609 122.664 90.7162C122.73 91.0716 122.706 91.4381 122.592 91.7812C122.478 92.1244 122.278 92.4328 122.012 92.6775C121.746 92.9222 121.422 93.0951 121.07 93.18Z"
                          fill="white"
                          stroke="#BABABA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M78.25 83.28C78.2342 80.9443 79.0189 78.6737 80.4735 76.8462C81.9282 75.0187 83.9649 73.7446 86.2446 73.236C88.5243 72.7275 90.9094 73.0152 93.0028 74.0512C95.0963 75.0872 96.7716 76.809 97.75 78.93"
                          stroke="#BABABA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M96.1099 67.05C96.8942 67.05 97.5299 66.4143 97.5299 65.63C97.5299 64.8458 96.8942 64.21 96.1099 64.21C95.3257 64.21 94.6899 64.8458 94.6899 65.63C94.6899 66.4143 95.3257 67.05 96.1099 67.05Z"
                          fill="#BABABA"
                        />
                        <path
                          d="M74.0899 71.96C74.8742 71.96 75.5099 71.3242 75.5099 70.54C75.5099 69.7557 74.8742 69.12 74.0899 69.12C73.3057 69.12 72.6699 69.7557 72.6699 70.54C72.6699 71.3242 73.3057 71.96 74.0899 71.96Z"
                          fill="#BABABA"
                        />
                        <path
                          d="M100.57 28.2C101.111 28.2 101.55 27.7612 101.55 27.22C101.55 26.6788 101.111 26.24 100.57 26.24C100.029 26.24 99.5901 26.6788 99.5901 27.22C99.5901 27.7612 100.029 28.2 100.57 28.2Z"
                          fill="#CFCFCF"
                        />
                        <path
                          d="M42.1099 102.13C42.6511 102.13 43.0899 101.691 43.0899 101.15C43.0899 100.609 42.6511 100.17 42.1099 100.17C41.5686 100.17 41.1299 100.609 41.1299 101.15C41.1299 101.691 41.5686 102.13 42.1099 102.13Z"
                          fill="#CFCFCF"
                        />
                        <path
                          d="M127.65 50.89V55.19"
                          stroke="#BABABA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M125.5 53.04H129.8"
                          stroke="#BABABA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M129.61 115.63V119.93"
                          stroke="#BABABA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M127.46 117.78H131.76"
                          stroke="#BABABA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M54.4299 34.59V38.89"
                          stroke="#BABABA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M52.28 36.74H56.58"
                          stroke="#BABABA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M85.5801 129.7C105.854 129.7 122.29 128.675 122.29 127.41C122.29 126.145 105.854 125.12 85.5801 125.12C65.3057 125.12 48.8701 126.145 48.8701 127.41C48.8701 128.675 65.3057 129.7 85.5801 129.7Z"
                          fill="#F2F2F2"
                        />
                        <path
                          d="M120.65 48.45C120.647 51.4912 119.438 54.4071 117.288 56.5576C115.137 58.7081 112.221 59.9174 109.18 59.92C108.806 59.92 108.432 59.8999 108.06 59.86L104.66 65.41L103.6 58.46C101.833 57.4764 100.358 56.0433 99.3242 54.306C98.2899 52.5687 97.7333 50.5889 97.7107 48.5671C97.6881 46.5454 98.2002 44.5536 99.1954 42.7936C100.19 41.0336 101.633 39.5679 103.377 38.545C105.121 37.5221 107.105 36.9784 109.126 36.9689C111.148 36.9595 113.137 37.4847 114.89 38.4912C116.644 39.4978 118.1 40.9499 119.111 42.7006C120.123 44.4512 120.654 46.4381 120.65 48.46V48.45Z"
                          fill="white"
                          stroke="#BABABA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M104.28 49.61C104.921 49.61 105.44 49.0906 105.44 48.45C105.44 47.8093 104.921 47.29 104.28 47.29C103.639 47.29 103.12 47.8093 103.12 48.45C103.12 49.0906 103.639 49.61 104.28 49.61Z"
                          fill="#D2D2D2"
                          stroke="#D2D2D2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M109.18 49.61C109.821 49.61 110.34 49.0906 110.34 48.45C110.34 47.8093 109.821 47.29 109.18 47.29C108.539 47.29 108.02 47.8093 108.02 48.45C108.02 49.0906 108.539 49.61 109.18 49.61Z"
                          fill="#D2D2D2"
                          stroke="#D2D2D2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M114.08 49.61C114.721 49.61 115.24 49.0906 115.24 48.45C115.24 47.8093 114.721 47.29 114.08 47.29C113.439 47.29 112.92 47.8093 112.92 48.45C112.92 49.0906 113.439 49.61 114.08 49.61Z"
                          fill="#D2D2D2"
                          stroke="#D2D2D2"
                          strokeMiterlimit="10"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1526">
                          <rect width="170.35" height="215.38" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

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
    </header>
  );
}
