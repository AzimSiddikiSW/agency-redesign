"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMode } from "@/components/providers/ModeProvider";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    children: [
      { label: "Pending", href: "/?tab=pending" },
      { label: "Identifiers", href: "/?tab=identifiers" },
      { label: "Schedule", href: "/?tab=schedule" },
    ],
  },
  { label: "Reports", href: "/reports" },
  { label: "Documentation", href: "/documentation" },
  {
    label: "Account Settings",
    href: "/accountSettings",
    children: [
      { label: "Org Settings", href: "/accountSettings?tab=orgSettings" },
      { label: "Manage Users", href: "/accountSettings?tab=manageUsers" },
    ],
  },
];

const configNavItems: NavItem[] = [
  {
    label: "Account Configuration",
    href: "/accountConfiguration",
    children: [
      {
        label: "Content & Templates",
        href: "/accountConfiguration?tab=content",
      },
      { label: "Job Editor", href: "/accountConfiguration?tab=jobEditor" },
      { label: "Framework", href: "/accountConfiguration?tab=framework" },
    ],
  },
  { label: "Manage Customers", href: "/manageCustomers" },
  {
    label: "Manage Database",
    href: "/manageDatabase",
    children: [
      { label: "Production", href: "/manageDatabase?tab=production" },
      { label: "Configuration", href: "/manageDatabase?tab=configuration" },
    ],
  },
  { label: "Server Stats", href: "/serverStats" },
];

function hideOffcanvasById(id: string) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  const bs = (window as any).bootstrap;
  if (!bs?.Offcanvas) return;

  const instance = bs.Offcanvas.getInstance(el) ?? new bs.Offcanvas(el);
  instance.hide();
}

export default function Navbar() {
  const { isConfig } = useMode();
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const desktopLinkClass = (active: boolean) =>
    `nav-link px-3 ${active ? "text-primary fw-semibold" : "text-muted"}`;

  const renderDesktopNav = (items: NavItem[]) =>
    items.map((item) => {
      const active = isActive(item.href);

      if (!item.children?.length) {
        return (
          <li key={item.href} className="nav-item">
            <Link className={desktopLinkClass(active)} href={item.href}>
              {item.label}
            </Link>
          </li>
        );
      }

      return (
        <li key={item.href} className="nav-item dropdown">
          <button
            className={`${desktopLinkClass(active)} dropdown-toggle btn`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {item.label}
          </button>

          <ul className="dropdown-menu shadow-sm">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  className="dropdown-item nav-link nav-dropdown-item"
                  href={child.href}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    });

  const renderMobileNav = (items: NavItem[], offcanvasId = "swNav") => (
    <div className="nav nav-pills flex-column gap-1">
      {items.map((item) => {
        const active = isActive(item.href);

        if (!item.children?.length) {
          return (
            <button
              key={item.href}
              type="button"
              className={`nav-link text-start small ${
                active ? "btn-primary text-white" : "text-muted"
              }`}
              onClick={() => {
                if (item.href !== pathname) router.push(item.href);
                hideOffcanvasById(offcanvasId);
              }}
            >
              {item.label}
            </button>
          );
        }

        const collapseId = `swMobileCollapse_${item.label.replace(/\s+/g, "")}`;

        return (
          <div key={item.href} className="d-flex flex-column">
            <button
              type="button"
              className={`nav-link text-start small ${
                active ? "btn-primary text-white" : "text-muted"
              }`}
              data-bs-toggle="collapse"
              data-bs-target={`#${collapseId}`}
              aria-expanded={active ? "true" : "false"}
              aria-controls={collapseId}
            >
              {item.label}
            </button>

            <div id={collapseId} className={`collapse ${active ? "show" : ""}`}>
              <div className="d-flex flex-column ps-3 mt-1 gap-1">
                {item.children.map((child) => (
                  <button
                    key={child.href}
                    type="button"
                    className="nav-link text-start small text-muted"
                    onClick={() => {
                      router.push(child.href);
                      hideOffcanvasById(offcanvasId);
                    }}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Desktop horizontal navbar (lg+) */}
      <div
        className="sw-navbar d-none d-lg-block border-bottom bg-white"
        style={{
          position: "fixed",
          top: "var(--sw-topnav-height)",
          left: 0,
          right: 0,
          zIndex: 1020,
        }}
      >
        <div className="h-100 sw-frame">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <ul className="nav align-items-center flex-nowrap">
              {renderDesktopNav(navItems)}

              {isConfig && (
                <>
                  {/* vertical divider */}
                  <li className="nav-item mx-2">
                    <div
                      style={{
                        width: "1px",
                        height: "18px",
                        backgroundColor: "var(--sw-border)",
                      }}
                    />
                  </li>

                  {renderDesktopNav(configNavItems)}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile offcanvas (opens from TopNav hamburger) */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex={-1}
        id="swNav"
      >
        <div className="offcanvas-header border-bottom">
          <span className="fw-semibold">Menu</span>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          {renderMobileNav(navItems)}

          {isConfig && (
            <>
              <hr className="my-3" />
              {renderMobileNav(configNavItems)}
            </>
          )}
        </div>
      </div>
    </>
  );
}
