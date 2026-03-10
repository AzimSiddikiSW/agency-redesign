"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BsHouse,
  BsBarChart,
  BsFileText,
  BsGear,
  BsSliders,
  BsPeople,
  BsDatabase,
  BsHddRack,
  BsFileEarmarkCode,
  BsPencilSquare,
  BsClipboard,
  BsClipboardCheck,
  BsPencil,
  BsSend
} from "react-icons/bs";
import { useMode } from "@/components/providers/ModeProvider";
import { useState } from "react";
import InspectionItem from "../awa/InspectionItem";

const navItems = [
  { label: "Home", href: "/", icon: BsHouse },
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
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [activeInspectionTab, setActiveInspectionTab] = useState<
    "all" | "completed"
  >("all");

  const openModal = (type: string) => {
    setModalType(type);
    if (type === "manageInspections") {
      setActiveInspectionTab("all");
    }

    if (type === "publishInspections") {
      setActiveInspectionTab("completed");
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
  };

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

  const renderActions = () => {
    if (pathname === "/") {
      return (
        <>
          <div className="mt-2 mb-2 small fs-half text-uppercase text-muted fw-semibold">
            Actions
          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            <button
              className="btn btn-outline-primary text-start shadow-sm"
              onClick={() => openModal("newInspection")}
            >
              <BsPencilSquare size={18} className="me-2" />
              New Inspection
            </button>

            <button
              className="btn btn-outline-primary text-start shadow-sm"
              onClick={() => openModal("manageInspections")}
            >
              <BsClipboard size={18} className="me-2" />
              Manage Inspections
            </button>
            <button
              className="btn btn-outline-primary text-start shadow-sm"
              onClick={() => openModal("publishInspections")}
            >
              <BsSend size={18} className="me-2" />
              Publish Inspections
            </button>

            <button
              className="btn btn-outline-primary text-start shadow-sm"
              onClick={() => openModal("manageCorrections")}
            >
              <BsClipboardCheck size={18} className="me-2" />
              Manage Corrections
            </button>

            <button
              className="btn btn-outline-primary text-start shadow-sm"
              onClick={() => openModal("publishCorrections")}
            >
              <BsSend size={18} className="me-2" />
              Publish Corrections
            </button>
          </div>
        </>
      );
    }
    return <></>;   
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

            {renderActions()}
            <div className="mt-2 mb-2 small fs-half text-uppercase text-muted fw-semibold">
              Pages
            </div>
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
            <div className="mt-4 mb-2 small fs-half text-uppercase text-muted fw-semibold">
              Pages
            </div>
            {renderLinks(navItems, {
              dismissOffcanvas: true,
              offcanvasId: "swSideNav",
            })}

            {isConfig && (
              <>
                <div className="mt-4 mb-2 small fs-half text-uppercase text-muted fw-semibold">
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
      {showModal && (modalType === "manageInspections" || modalType === "publishInspections") && (
        <>
          <div className="modal fade show d-block" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered sw-manage-inspections-modal">
              <div className="modal-content sw-modal-panel border-0 shadow-sm overflow-hidden">
                <div className="sw-modal-header-bar d-flex align-items-center justify-content-between">
                  <h5 className="modal-title mb-0">{ modalType === "manageInspections" ? "Manage Inspections" : "Publish Inspections"}</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={closeModal}
                    aria-label="Close"
                  />
                </div>
                {/* <div className="p-3">
                  <div className="d-flex align-items-center overflow-hidden sw-modal-tabs border rounded">
                    <button
                      type="button"
                      className={`btn px-4 py-2 flex-fill text-center rounded-0 border-end ${
                        activeInspectionTab === "all"
                          ? "bg-sw text-white"
                          : "bg-light text-muted"
                      }`}
                      onClick={() => setActiveInspectionTab("all")}
                    >
                      All
                    </button>

                    <button
                      type="button"
                      className={`btn px-4 py-2 flex-fill text-center rounded-0 ${
                        activeInspectionTab === "completed"
                          ? "bg-sw text-white"
                          : "bg-light text-muted"
                      }`}
                      onClick={() => setActiveInspectionTab("completed")}
                    >
                      Completed
                    </button>
                  </div>
                </div> */}

                <div
                  className="modal-body pt-3 pb-3 overflow-y-auto"
                  style={{ height: "60vh" }}
                >
                  <div className="sw-modal-body-panel d-flex">
                    {activeInspectionTab === "all" && (
                      <div className="d-flex flex-column gap-2 flex-grow-1">
                        <InspectionItem
                          name="Abode Care of Monroeville"
                          identifier="45119"
                          address="5 Cedar Park Boulevard, Easton, PA 18042"
                          date="10/29/2025"
                          status="Partial"
                          fullView
                        />
                        <InspectionItem
                          name="Abode Care of Monroeville"
                          identifier="45119"
                          address="5 Cedar Park Boulevard, Easton, PA 18042"
                          date="10/29/2025"
                          status="Partial"
                          fullView
                        />
                        <InspectionItem
                          name="Abode Care of Monroeville"
                          identifier="45119"
                          address="5 Cedar Park Boulevard, Easton, PA 18042"
                          date="10/29/2025"
                          status="Partial"
                          fullView
                        />
                      </div>
                    )}

                    {activeInspectionTab === "completed" && (
                      <div className="pb-2 d-flex flex-column gap-2 overflow-y-auto flex-grow-1">
                        <InspectionItem
                          name="Abode Care of Monroeville"
                          identifier="45119"
                          address="5 Cedar Park Boulevard, Easton, PA 18042"
                          date="10/29/2025"
                          status="Completed"
                          publishable
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="modal-footer sw-modal-footer border-0 px-3 py-3 d-flex justify-content-between align-items-center">
                  {activeInspectionTab === "all" ? (
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-nowrap">Reassign to</span>
                      <select className="form-select">
                        <option value="">Select user</option>
                        <option value="user-1">Muhammad</option>
                        <option value="user-2">Toby</option>
                        <option value="user-3">Sam</option>
                      </select>
                    </div>
                  ) : (
                    <div> </div>
                  )}

                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={closeModal}
                    >
                      Close
                    </button>

                    {activeInspectionTab === "all" && (
                      <button type="button" className="btn btn-primary">
                        Edit
                      </button>
                    )}

                    {activeInspectionTab === "completed" && (
                      <button type="button" className="btn btn-primary">
                        Publish
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-backdrop fade show" onClick={closeModal} />
        </>
      )}
    </>
  );
}
