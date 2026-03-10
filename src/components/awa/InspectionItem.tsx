import { BsThreeDots } from "react-icons/bs";
import {
  BsPencil,
  BsSend,
  BsPersonUp,
  BsTrash,
  BsCheckLg,
} from "react-icons/bs";

type InspectionItemProps = {
  name: string;
  identifier: string;
  address: string;
  date: string;
  status: string;
  correction?: boolean;
  fullView?: boolean;
  publishable?: boolean;
};

export default function InspectionItem({
  name,
  identifier,
  address,
  date,
  status,
  correction = false,
  fullView = false,
  publishable = false,
}: InspectionItemProps) {
  return (
    <div className="d-flex align-items-start justify-content-between border p-3 rounded-3 bg-light w-100">
      <div className="d-flex flex-column gap-1 me-2 min-w-0">
        <span className="fw-semibold text-truncate">
          {name} - {identifier}{" "}
          {publishable && <BsCheckLg size={18} className="text-success" />}
        </span>
        <span className="text-muted small text-truncate">{address}</span>
        <span className="text-muted small">
          {date} - {status}
        </span>
      </div>
      {!publishable && (
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="d-flex justify-content-center h-fit-content">
            {!fullView ? (
              <button
                className="action-btn d-flex btn align-items-center bg-white text-sw rounded-circle p-2 shadow-sm"
                type="button"
                title={correction ? "Review" : "Edit"}
              >
                {correction ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 4.57a.5.5 0 0 0-.024-.235l-.013-.063a1.5 1.5 0 0 0-.18-.434c-.092-.15-.222-.28-.482-.54L8.711.707c-.259-.26-.389-.39-.54-.483a1.5 1.5 0 0 0-.496-.193a.5.5 0 0 0-.235-.024C7.329.004 7.194.004 7.015.004h-2.21c-1.68 0-2.52 0-3.16.327a3.02 3.02 0 0 0-1.31 1.31C.008 2.283.008 3.12.008 4.8v6.4c0 1.68 0 2.52.327 3.16a3.02 3.02 0 0 0 1.31 1.31c.642.327 1.48.327 3.16.327h2.423c.401 0 .602-.523.347-.832a.45.45 0 0 0-.345-.168H4.8c-.857 0-1.44-.001-1.89-.038c-.438-.036-.663-.1-.819-.18a2 2 0 0 1-.874-.874c-.08-.156-.145-.38-.18-.819c-.036-.45-.037-1.03-.037-1.89v-6.4c0-.857 0-1.44.037-1.89c.036-.438.101-.663.18-.819c.192-.376.498-.682.874-.874c.156-.08.381-.145.82-.18C3.36.997 3.94.997 4.8.997H7v3.5a.5.5 0 0 0 .5.5H11v.547c0 .25.207.45.456.473c.285.025.543-.188.543-.474V4.99c0-.178 0-.313-.005-.425zM8 1.41L10.59 4H8z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M11 15c.834 0 1.61-.255 2.25-.691l1.47 1.47a.749.749 0 1 0 1.06-1.06l-1.47-1.47c.436-.641.691-1.41.691-2.25c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-1c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <BsPencil size={18} />
                )}
              </button>
            ) : (
              <div className="d-flex gap-2">
                <button
                  className="action-btn d-flex btn align-items-center bg-white text-sw rounded-circle p-2 shadow-sm"
                  type="button"
                  title="Reassign"
                >
                  <BsPersonUp size={18} />
                </button>

                <button
                  className="action-btn d-flex btn align-items-center bg-white text-danger rounded-circle p-2 shadow-sm"
                  type="button"
                  title="Delete"
                >
                  <BsTrash size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
