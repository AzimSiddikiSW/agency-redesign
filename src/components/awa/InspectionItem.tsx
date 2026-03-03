import {
  BsThreeDots,
  BsPencil,
  BsSend,
  BsPersonCheck,
  BsTrash,
} from "react-icons/bs";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

type InspectionColumnVisibility = Partial<{
  number: Breakpoint; // hide below this bp
  address: Breakpoint;
  type: Breakpoint;
}>;

type InspectionItemProps = {
  name: string;
  identifier: string;
  address: string;
  date: string;
  type: string;
  tableView?: boolean;

  // optional: match whatever rules you set in the module
  hideBelow?: InspectionColumnVisibility;
};

function showAt(bp?: Breakpoint) {
  // hide below bp, show at bp+ => d-none d-{bp}-table-cell
  if (!bp) return "";
  return `d-none d-${bp}-table-cell`;
}

export default function InspectionItem({
  name,
  identifier,
  address,
  date,
  type,
  tableView = false,
  hideBelow,
}: InspectionItemProps) {
  const numberClass = showAt(hideBelow?.number);
  const addressClass = showAt(hideBelow?.address);
  const typeClass = showAt(hideBelow?.type);

  if (tableView) {
    return (
      <tr>
        <td className={`ps-3 bg-light py-2 align-middle ${numberClass}`}>
          {identifier}
        </td>

        <td className="bg-light py-2 align-middle">{name}</td>

        <td className={`bg-light py-2 align-middle ${addressClass}`}>
          {address}
        </td>

        <td className="bg-light py-2 align-middle">{date}</td>

        <td className={`bg-light py-2 align-middle ${typeClass}`}>{type}</td>

        <td className="py-2 bg-light align-middle">
          <div className="dropdown">
            <button
              className="btn btn-link text-muted p-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsThreeDots size={18} />
            </button>

            <ul className="dropdown-menu dropdown-menu-end shadow-sm">
              <li>
                <button className="dropdown-item" type="button">
                  <BsPencil size={14} className="me-2 text-muted" />
                  Edit
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  <BsSend size={14} className="me-2 text-muted" />
                  Publish
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  <BsPersonCheck size={14} className="me-2 text-muted" />
                  Reassign
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item text-danger" type="button">
                  <BsTrash size={14} className="me-2" />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <div className="d-flex align-items-start justify-content-between border p-3 rounded-3 bg-light w-100">
      <div className="d-flex flex-column gap-1 me-2 min-w-0">
        <span className="fw-semibold text-truncate">
          {name} - {identifier}
        </span>
        <span className="text-muted small text-truncate">{address}</span>
        <span className="text-muted small">
          {date} - {type}
        </span>
      </div>

      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="dropdown d-flex justify-content-center h-fit-content">
          <button
            className="btn btn-link text-muted p-0 flex-shrink-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsThreeDots size={18} />
          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow-sm">
            <li>
              <button className="dropdown-item" type="button">
                <BsPencil size={14} className="me-2 text-muted" />
                Edit
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <BsSend size={14} className="me-2 text-muted" />
                Publish
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <BsPersonCheck size={14} className="me-2 text-muted" />
                Reassign
              </button>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item text-danger" type="button">
                <BsTrash size={14} className="me-2" />
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
