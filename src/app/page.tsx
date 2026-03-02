import DashboardModule from "@/components/awa/DashboardModule";
import {
  BsPlus,
  BsPencilSquare,
  BsBuildings,
  BsCalendar3,
  BsClockHistory,
} from "react-icons/bs";
import InspectionItem from "@/components/awa/InspectionItem";
import ModuleEmptyState from "@/components/awa/ModuleEmptyState";

export default function Home() {
  return (
    <div className="m-4" style={{ height: "calc(100vh - 2rem)" }}>
      <div className="row gap-4 h-100">
        {/* page header */}

        {/* main workspace with modules */}
        <div className="col-12 col-md-12 col-lg-8 col d-flex flex-column h-100">
          <div className="mb-4 flex-shrink-0">
            <div className="d-flex align-items-center justify-content-between">
              <h3>Pending</h3>

              {/* Desktop/Tablet: New Inspection button inline */}
              <div className=" ms-3">
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
              </div>
            </div>

            <div>
              <span></span>
            </div>
          </div>
          <div className="flex-grow-1 min-h-0" style={{ minHeight: 0 }}>
            <DashboardModule label="Inspections" expandable>
              {/* <ModuleEmptyState inspection /> */}

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
          {/* <div className="col-12 col-md-6">
            <DashboardModule label="Corrections" expandable>
              <ModuleEmptyState />
            </DashboardModule>
          </div> */}
        </div>

        {/* progress tracking modules */}
        <div className="col d-none d-lg-flex flex-column h-100 gap-4">
          <div className="flex-grow-1" style={{ minHeight: 0 }}>
            <DashboardModule label="Module">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
          <div className="flex-grow-1" style={{ minHeight: 0 }}>
            <DashboardModule label="Module">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
          <div className="flex-grow-1" style={{ minHeight: 0 }}>
            <DashboardModule label="Module">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
        </div>
      </div>
    </div>
  );
}
