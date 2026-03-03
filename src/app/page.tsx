import DashboardModule from "@/components/awa/DashboardModule";
import {
  BsPlus,
  BsPencilSquare,
  BsClipboardCheck,
  BsCalendar3,
  BsClipboard,
  BsClipboardData,
} from "react-icons/bs";
import InspectionItem from "@/components/awa/InspectionItem";
import ModuleEmptyState from "@/components/awa/ModuleEmptyState";

const dummyInspection = {
  identifier: "45119",
  name: "Abode Care of Monroeville",
  address: "5 Cedar Park Boulevard, Easton, PA 18042",
  date: "10/29/2025",
  type: "Partial",
};

export default function Home() {
  const inspectionsList = Array.from({ length: 30 }, (_, i) => (
    <InspectionItem
      key={`inspection-${i}`}
      tableView
      identifier={dummyInspection.identifier}
      name={dummyInspection.name}
      address={dummyInspection.address}
      date={dummyInspection.date}
      type={dummyInspection.type}
      hideBelow={{
        address: "xl",
        type: "lg",
        number: "md",
      }}
    />
  ));
  return (
    <div className="my-4 sw-page">
      <div className="row gap-4 h-100">
        {/* page header */}

        {/* main workspace with modules */}
        <div className="col-12 col-md-12 col-lg-8 col d-flex flex-column h-100">
          <div className="mb-4 flex-shrink-0">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h3 className="mb-0">Pending</h3>

              {/* Desktop/Tablet: New Inspection button inline */}
              <div className="">
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
              {/* Tabs */}
              <div className="d-none d-sm-block">
                <div className="d-flex align-items-center border-top border-bottom w-fit-content w-md-auto">
                  <span className="btn rounded-0 py-2 px-4 text-sw text-white border-sw d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                    <BsClipboard size={18} />
                    Inspections
                  </span>
                  <span className="btn rounded-0 py-2 px-4 d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                    <BsClipboardCheck size={18} />
                    Corrections
                  </span>
                  <span className="btn rounded-0 py-2 px-4 d-lg-none d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                    <BsClipboardData size={18} />
                    Modules
                  </span>
                </div>
              </div>
              <div className="d-block d-sm-none">
                <div className="d-flex align-items-center border-top border-bottom w-fit-content w-md-auto">
                  <span className="btn rounded-0 py-2 px-4 text-sw text-white border-sw d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                    <BsClipboard size={24} />
                  </span>
                  <span className="btn rounded-0 py-2 px-4 d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                    <BsClipboardCheck size={24} />
                  </span>
                  <span className="btn rounded-0 py-2 px-4 d-lg-none d-flex align-items-center justify-content-center gap-2 flex-fill flex-md-grow-0">
                    <BsClipboardData size={24} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow-1 min-h-0" style={{ minHeight: 0 }}>
            <DashboardModule
              label="Inspections"
              expandable
              table
              tableHeaders={{
                number: { label: "Number", hideBelow: "md" },
                name: { label: "Name" }, // always visible
                address: { label: "Address", hideBelow: "xl" },
                date: { label: "Date" }, // always visible
                type: { label: "Type", hideBelow: "lg" },
              }}
            >
              {inspectionsList}
            </DashboardModule>
          </div>
        </div>

        {/* progress tracking modules */}
        <div className="col d-none d-lg-flex flex-column h-100 gap-4 overflow-auto pb-4">
          <div className="flex-grow-1" style={{ minHeight: 250 }}>
            <DashboardModule label="Module">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
          <div className="flex-grow-1" style={{ minHeight: 250 }}>
            <DashboardModule label="Module">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
          <div className="flex-grow-1" style={{ minHeight: 250 }}>
            <DashboardModule label="Module">
              <ModuleEmptyState defaultModule />
            </DashboardModule>
          </div>
        </div>
      </div>
    </div>
  );
}
