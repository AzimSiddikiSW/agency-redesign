"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BsGrid,
  BsBarChart,
  BsFileText,
  BsGear,
  BsSliders,
  BsPeople,
  BsDatabase,
  BsHddRack,
  BsFileEarmarkCode,
} from "react-icons/bs";
import { useMode } from "@/components/providers/ModeProvider";

const navItems = [
  { label: "Dashboard", href: "/", icon: BsGrid },
  { label: "Reports", href: "/reports", icon: BsBarChart },
  { label: "Documentation", href: "/documentation", icon: BsFileText },
  { label: "Account Settings", href: "/accountSettings", icon: BsGear },
];

const configNavItems = [
  {
    label: "Account Configuration",
    href: "/accountConfiguration",
    icon: BsSliders,
  },
  { label: "Manage Customers", href: "/manageCustomers", icon: BsPeople },
  { label: "Manage Database", href: "/manageDatabase", icon: BsDatabase },
  { label: "Server Stats", href: "/serverStats", icon: BsHddRack },
  {
    label: "Framework Viewer",
    href: "/frameworkViewer",
    icon: BsFileEarmarkCode,
  },
];

function hideOffcanvasById(id: string) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  // Bootstrap 5 exposes itself on window.bootstrap when included globally
  const bs = (window as any).bootstrap;
  if (!bs?.Offcanvas) return;

  const instance = bs.Offcanvas.getInstance(el) ?? new bs.Offcanvas(el);
  instance.hide();
}

export default function SideNav() {
  const { isConfig } = useMode();
  const pathname = usePathname();
  const router = useRouter();

  const renderLinks = (
    items: typeof navItems,
    opts?: { dismissOffcanvas?: boolean; offcanvasId?: string },
  ) => {
    const dismissOffcanvas = opts?.dismissOffcanvas ?? false;
    const offcanvasId = opts?.offcanvasId ?? "swSideNav";

    return (
      <>
        {items.map((item) => {
          const active = item.href === pathname;
          const Icon = item.icon;

          // Desktop: regular Link
          if (!dismissOffcanvas) {
            return (
              <Link
                key={item.href}
                className={`nav-link d-flex align-items-center gap-2 ${
                  active ? "btn-primary text-white" : "text-muted"
                }`}
                href={item.href}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          }

          // Mobile: programmatic nav + then hide offcanvas
          return (
            <button
              key={item.href}
              type="button"
              className={`nav-link d-flex align-items-center gap-2 ${
                active ? "btn-primary text-white" : "text-muted"
              }`}
              onClick={() => {
                if (item.href !== pathname) router.push(item.href);
                hideOffcanvasById(offcanvasId);
              }}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </>
    );
  };

  return (
    <>
      {/* Desktop */}
      <aside className="sw-sidenav d-none d-lg-flex flex-column position-fixed top-0 start-0 vh-100 border-end bg-light">
        <div
          className="d-flex align-items-center gap-2 px-3 border-bottom"
          style={{ height: "var(--sw-topnav-height)" }}
        >
          {isConfig ? (
            <img
              src="/icons/favicon-32x32-bw.png"
              alt="SansWrite"
              height={24}
            />
          ) : (
            <img src="/icons/favicon-32x32.png" alt="SansWrite" height={24} />
          )}

          <span className="custom-logo-text">SansWrite</span>
        </div>

        <div className="p-3 overflow-auto">
          <nav className="nav nav-pills flex-column gap-1">
            {renderLinks(navItems)}

            {isConfig && (
              <>
                <div className="mt-4 mb-2 small fs-half text-uppercase text-muted fw-semibold">
                  Admin Pages
                </div>
                {renderLinks(configNavItems)}
              </>
            )}
          </nav>
        </div>
      </aside>

      {/* Mobile / Tablet */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex={-1}
        id="swSideNav"
      >
        <div className="offcanvas-header border-bottom">
          <div className="d-flex align-items-center gap-2">
            {isConfig ? (
              <img
                src="/icons/favicon-32x32-bw.png"
                alt="SansWrite"
                height={24}
              />
            ) : (
              <img src="/icons/favicon-32x32.png" alt="SansWrite" height={24} />
            )}
            <span
              className="fw-semibold"
              style={{ color: "var(--sw-primary)" }}
            >
              SansWrite
            </span>
          </div>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          <nav className="nav nav-pills flex-column gap-1">
            {renderLinks(navItems, {
              dismissOffcanvas: true,
              offcanvasId: "swSideNav",
            })}

            {isConfig && (
              <>
                <div className="mt-4 mb-2 small text-uppercase text-muted fw-semibold">
                  Admin Pages
                </div>
                {renderLinks(configNavItems, {
                  dismissOffcanvas: true,
                  offcanvasId: "swSideNav",
                })}
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
