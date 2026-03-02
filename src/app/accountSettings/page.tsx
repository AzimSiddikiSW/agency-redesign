export default function AccountSettings() {
  return (
    <div className="m-4 mx-5">
      <div className="d-flex flex-column" style={{ height: "90vh" }}>
        <div className="bg-primary text-white p-3 flex-shrink-0">
          <strong>Top Bar</strong> — fixed height, does not grow
        </div>

        <div className="row g-3 flex-grow-1 p-3 bg-light overflow-hidden m-0 pb-4 row-stretch">
          {/* Left panel */}
          <div className="col-12 col-md-6" style={{ minHeight: 0 }}>
            <div className="bg-success text-white rounded-3 h-100 d-flex flex-column overflow-hidden">
              {/* Panel header */}
              <div className="p-3 flex-shrink-0 border-bottom border-white border-opacity-25">
                <strong>Left Panel</strong>
              </div>
              {/* Scrollable content */}
              <div className="p-3 overflow-auto flex-grow-1">
                <div>
                  Content here won't push the panel to grow beyond its bounds.
                </div>
                <div className="mt-2">More content below...</div>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="col-12 col-md-6" style={{ minHeight: 0 }}>
            <div className="bg-warning rounded-3 h-100 d-flex flex-column overflow-hidden">
              {/* Panel header */}
              <div className="p-3 flex-shrink-0 border-bottom border-dark border-opacity-25">
                <strong>Right Panel</strong>
              </div>
              {/* Scrollable content */}
              <div className="p-3 overflow-auto flex-grow-1">
                <div>
                  Content here won't push the panel to grow beyond its bounds.
                </div>
                <div className="mt-2">More content below...</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-danger text-white p-3 flex-shrink-0">
          <strong>Bottom Bar</strong> — fixed height, does not grow
        </div>
      </div>
    </div>
  );
}
