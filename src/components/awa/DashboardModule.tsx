import { BsArrowsAngleExpand } from "react-icons/bs";

type DashboardModuleProps = {
  label: string;
  children?: React.ReactNode;
  expandable?: boolean;
  className?: string;
};

export default function DashboardModule({
  label,
  children,
  expandable,
  className = "",
}: DashboardModuleProps) {
  return (
    <div
      className={`border rounded-3 d-flex flex-column w-100 h-100 shadow-sm overflow-hidden min-h-0 ${className}`}
    >
      <div className="d-flex align-items-center justify-content-between bg-sw p-2 ps-3 rounded-top text-white">
        <h2 className="h5 mb-0 fw-normal">{label}</h2>
        {expandable && (
          <div
            className="d-flex btn align-items-center bg-white text-sw rounded-circle p-2"
            title="Expands to a modal"
          >
            <BsArrowsAngleExpand size={14} />
          </div>
        )}
      </div>

      <div
        className="p-2 d-flex flex-column gap-2 overflow-y-auto flex-grow-1"
        style={{ minHeight: 0 }}
      >
        {children ?? (
          <p className="mb-0">
            This is a placeholder for the dashboard content.
          </p>
        )}
      </div>
    </div>
  );
}
