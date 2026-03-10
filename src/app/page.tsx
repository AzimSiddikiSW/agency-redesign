import DashboardModule from "@/components/awa/DashboardModule";
import {
  BsPlus,
  BsPencilSquare,
  BsBuildings,
  BsCalendar3,
  BsGrid,
} from "react-icons/bs";
import InspectionItem from "@/components/awa/InspectionItem";
import ModuleEmptyState from "@/components/awa/ModuleEmptyState";

export default function Home() {
  return (
    <div className="m-4 ">
      <div
        className="d-flex flex-column"
        style={{ height: "calc(100vh - 9rem)" }}
      >
        {/* page header */}
        <div className="mb-4 flex-shrink-0">
          <div className="d-flex align-items-center justify-content-between">
            {/* Tabs */}
            <div className="d-flex d-none d-md-block">
              <div className="d-flex align-items-center border rounded-3 w-fit-content w-md-auto">
                <span className="btn py-2 px-4 bg-sw text-white rounded-end-0 d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                  <BsGrid size={18} />
                  Dashboard
                </span>
                <span className="btn rounded-0 py-2 px-4 bg-light border-start border-end d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                  <BsBuildings size={18} />
                  Identifiers
                </span>
                <span className="btn rounded-start-0 py-2 px-4 bg-light rounded-end d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                  <BsCalendar3 size={18} />
                  Schedule
                </span>
              </div>
            </div>
            <div className="d-md-none">
              <div className="d-flex align-items-center border rounded-3 w-fit-content w-md-auto">
                <span className="btn rounded-end-0 py-2 px-4 bg-sw text-white rounded-start d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                  <BsGrid size={24} />
                </span>
                <span className="btn rounded-0 py-2 px-4 bg-light border-start border-end d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                  <BsBuildings size={24} />
                </span>
                <span className="btn rounded-start-0 py-2 px-4 bg-light rounded-end d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                  <BsCalendar3 size={24} />
                </span>
              </div>
            </div>

            {/* Desktop/Tablet: New Inspection button inline */}
            {/* <div className=" ms-3">
              <button className="d-none d-md-block btn btn-primary">
                <span className="d-flex align-items-center gap-1">
                  <BsPencilSquare size={18} />
                  <span>New Inspection</span>
                </span>
              </button>
              <button className="d-md-none btn btn-primary">
                <span className="d-flex align-items-center gap-1">
                  <BsPencilSquare size={24} />
                </span>
              </button>
            </div> */}
          </div>
        </div>

        {/* ── DESKTOP: two-row layout that fills remaining height ── */}
        <div className="d-none d-md-flex flex-column flex-grow-1 gap-4 min-h-0">
          {/* Top row: MUST be allowed to shrink + MUST hide overflow */}
          <div
            className="row g-4 flex-grow-1 h-100 pb-4"
            style={{ minHeight: "400px !important" }}
          >
            <div className="col-6 d-flex flex-column h-100">
              <DashboardModule
                label="Inspections"
                className="flex-grow-1 min-h-0"
              >
                <InspectionItem
                  name="Abode Care of Monroeville"
                  identifier="45119"
                  address="5 Cedar Park Boulevard, Easton, PA 18042"
                  date="10/29/2025"
                  status="Partial"
                />
                <InspectionItem
                  name="Abode Care of Monroeville"
                  identifier="45119"
                  address="5 Cedar Park Boulevard, Easton, PA 18042"
                  date="10/29/2025"
                  status="Partial"
                />
                <InspectionItem
                  name="Abode Care of Monroeville"
                  identifier="45119"
                  address="5 Cedar Park Boulevard, Easton, PA 18042"
                  date="10/29/2025"
                  status="Partial"
                />
              </DashboardModule>
            </div>

            <div className="col-6 d-flex flex-column min-h-0 h-100">
              <DashboardModule label="Corrections" className="h-100">
                <InspectionItem
                  name="Abode Care of Monroeville"
                  identifier="45119"
                  address="5 Cedar Park Boulevard, Easton, PA 18042"
                  date="10/29/2025"
                  status="Partial"
                  correction
                />
                <InspectionItem
                  name="Abode Care of Monroeville"
                  identifier="45119"
                  address="5 Cedar Park Boulevard, Easton, PA 18042"
                  date="10/29/2025"
                  status="Partial"
                  correction
                />
                <InspectionItem
                  name="Abode Care of Monroeville"
                  identifier="45119"
                  address="5 Cedar Park Boulevard, Easton, PA 18042"
                  date="10/29/2025"
                  status="Partial"
                  correction
                />
              </DashboardModule>
            </div>
          </div>

          {/* Bottom row: fixed height */}
          <div className="row g-4 flex-shrink-0" style={{ height: 300 }}>
            <div className="col-4 h-100">
              <DashboardModule label="Module" className="h-100">
                <ModuleEmptyState defaultModule />
              </DashboardModule>
            </div>
            <div className="col-4 h-100">
              <DashboardModule label="Module" className="h-100">
                <ModuleEmptyState defaultModule />
              </DashboardModule>
            </div>
            <div className="col-4 h-100">
              <DashboardModule label="Module" className="h-100">
                <ModuleEmptyState defaultModule />
              </DashboardModule>
            </div>
          </div>
        </div>

        {/* ── MOBILE: stacked layout, each module has a fixed/min height ── */}
        <div className="d-md-none d-flex flex-column gap-4 pb-4">
          <div style={{ height: 350 }}>
            <DashboardModule label="Inspections" expandable className="h-100">
              <InspectionItem
                name="Abode Care of Monroeville"
                identifier="45119"
                address="5 Cedar Park Boulevard, Easton, PA 18042"
                date="10/29/2025"
                status="Partial"
              />
              <InspectionItem
                name="Abode Care of Monroeville"
                identifier="45119"
                address="5 Cedar Park Boulevard, Easton, PA 18042"
                date="10/29/2025"
                status="Partial"
              />
              <InspectionItem
                name="Abode Care of Monroeville"
                identifier="45119"
                address="5 Cedar Park Boulevard, Easton, PA 18042"
                date="10/29/2025"
                status="Partial"
              />
            </DashboardModule>
          </div>
          <div style={{ height: 350 }}>
            <DashboardModule label="Corrections" expandable className="h-100">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
          <div style={{ height: 250 }}>
            <DashboardModule label="Module" className="h-100">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
          <div style={{ height: 250 }}>
            <DashboardModule label="Module" className="h-100">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
          <div style={{ height: 250 }}>
            <DashboardModule label="Module" className="h-100">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
        </div>
      </div>
    </div>
  );
}
