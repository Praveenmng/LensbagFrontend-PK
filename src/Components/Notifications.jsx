import { useEffect, useState } from "react";

import axios from "axios";

function NotificationDropdown() {

  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchNotifications = () => {
    axios
      .get("/api/notifications", { withCredentials: true })
      .then((res) => setNotifications(res.data))

      .catch((err) => console.error(err));

  };

  useEffect(() => {
    if (open) {
      fetchNotifications();
    }
  }, [open]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchNotifications();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Handles both rental and return request responses
  const handleResponse = (notificationId, rentalRequestId, returnRequestId, action) => {
    const apiUrl = returnRequestId
      ? "/api/return_requests/respond"
      : "/api/rental_requests/respond";

    const payload = returnRequestId
      ? { notificationId, returnRequestId, action }
      : { notificationId, rentalRequestId, action };

    axios
      .post(apiUrl, payload, { withCredentials: true })
      .then(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== notificationId));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="notification-container position-relative">
      <button
        className="btn btn-outline-dark position-relative"
        onClick={() => setOpen(!open)}
      >
        <i className="bi bi-bell-fill"></i>
        {notifications.length > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
            style={{ zIndex: 1 }}
          >
            <span className="visually-hidden">New alerts</span>
          </span>
        )}
      </button>

      {open && (
        <div
          className="dropdown-menu show p-3"
          style={{
            width: "320px",
            maxHeight: "400px",
            overflowY: "auto",
            right: "0",
            transformOrigin: "top right",
          }}
        >
          <h6 className="dropdown-header">Notifications</h6>
          {notifications.length === 0 ? (
            <div className="dropdown-item">No new notifications</div>
          ) : (
            notifications.map((n) => (
              <div key={n.id} className="dropdown-item border-bottom mb-2">
                {/* Show rental request details if available */}
                <h6>Rental Requests</h6>
                {n.requested_start_date && (
                  <>
                    <p>
                      <strong>{n.requester_name}</strong> requested{" "}
                      <strong>{n.product_name}</strong>
                      <strong><span>Contact:</span>{n.phone_number}</strong>
                    </p> 
                    <p>
                      From: {new Intl.DateTimeFormat('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                      }).format(new Date(n.requested_start_date))} <br />
                      To: {new Intl.DateTimeFormat('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                      }).format(new Date(n.requested_end_date))}
                    </p>
                  </>
                )}

                {/* Show return request details if available */}
                {n.return_request_date && (
                  <>
                    <p>
                      <strong>{n.requester_name}</strong> requested to RETURN{" "}
                      <strong>{n.product_name}</strong>
                    </p>
                    <p>Return requested on:  {new Intl.DateTimeFormat('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                      }).format(new Date(n.return_request_date))}</p>
                  </>
                )}

                <small className="text-muted">
                  {new Date(n.created_at).toLocaleString()}
                </small>

                <div className="mt-2 d-flex justify-content-between">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() =>
                      handleResponse(n.id, n.rental_request_id, n.return_request_id, "accepted")
                    }
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      handleResponse(n.id, n.rental_request_id, n.return_request_id, "denied")
                    }
                  >
                    Deny
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationDropdown;
