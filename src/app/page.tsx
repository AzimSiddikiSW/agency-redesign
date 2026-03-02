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
    <div className="m-4">
      <div className="">
        {/* page header */}
        <div className="mb-4 flex-shrink-0">
          <div className="d-flex align-items-center justify-content-between">
            {/* Tabs */}
            <div className="d-flex d-none d-md-block">
              <div className="d-flex align-items-center border rounded-3 w-fit-content w-md-auto">
                <span className="btn py-2 px-4 bg-sw text-white rounded-end-0 d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                  <BsClockHistory size={18} />
                  Pending
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
                  <BsClockHistory size={24} />
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
        </div>

        {/* main workspace with modules */}
        <div className="row g-4 mb-4 mb-2 pb-4">
          <div className="col-12 col-md-6">
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
          <div className="col-12 col-md-6">
            <DashboardModule label="Corrections" expandable>
              <ModuleEmptyState />
            </DashboardModule>
          </div>
        </div>

        {/* progress tracking modules */}
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <DashboardModule label="Module">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
          <div className="col-12 col-md-4">
            <DashboardModule label="Module">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
          <div className="col-12 col-md-4">
            <DashboardModule label="Module">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
        </div>
      </div>
    </div>
  );
}
