import {
  BsArrowsAngleExpand,
  BsCaretUpFill,
  BsCaretDownFill,
} from "react-icons/bs";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

type TableHeaderConfig = {
  label: string;
  hideBelow?: Breakpoint; // hidden on xs..(bp-1), visible bp+
};

type DashboardModuleProps = {
  label: string;
  children?: React.ReactNode;
  expandable?: boolean;
  className?: string;
  table?: boolean;
  tableHeaders?: Record<string, TableHeaderConfig>; // <- object now
};

function getResponsiveShowClass(hideBelow?: Breakpoint) {
  // If hideBelow="lg" => hidden below lg, visible at lg+ => "d-none d-lg-table-cell"
  if (!hideBelow) return "";
  return `d-none d-${hideBelow}-table-cell`;
}

export default function DashboardModule({
  label,
  children,
  expandable,
  className = "",
  table = false,
  tableHeaders = {},
}: DashboardModuleProps) {
  if (table) {
    const headers = Object.entries(tableHeaders);

    return (
      <div
        className={`border rounded-3 w-100 h-100 shadow-sm overflow-hidden d-flex flex-column ${className}`}
        style={{ minHeight: "0px" }}
      >
        {/* scrollable wrapper for the table body */}
        <div className="overflow-auto" style={{ minHeight: 0 }}>
          <table className="table mb-0 w-100" style={{ minHeight: "0px" }}>
            <thead className="bg-sw text-white">
              <tr>
                {headers.map(([key, cfg], index) => {
                  const responsiveClass = getResponsiveShowClass(cfg.hideBelow);

                  return (
                    <th
                      key={key}
                      scope="col"
                      // make header sticky so tbody can scroll under it
                      style={{ position: "sticky", top: 0, zIndex: 2 }}
                      className={`bg-sw text-white fw-normal align-middle border-0 h5 py-2 ${
                        index === 0 ? "ps-3" : ""
                      } ${responsiveClass}`}
                    >
                      <div className="d-inline-flex align-items-center gap-2">
                        <span>{cfg.label}</span>

                        <span className="d-flex text-white flex-column lh-1">
                          <BsCaretUpFill size={14} />
                          <BsCaretDownFill size={14} />
                        </span>
                      </div>
                    </th>
                  );
                })}

                <th
                  scope="col"
                  style={{ position: "sticky", top: 0, zIndex: 2 }}
                  className="bg-sw text-white fw-normal align-middle border-0 py-2"
                />
              </tr>
            </thead>

            <tbody>{children}</tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`border rounded-3 d-flex flex-column w-100 h-100 shadow-sm ${className}`}
      style={{ minHeight: "0px" }}
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
        className="p-2 d-flex flex-column gap-2 overflow-auto h-100"
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
