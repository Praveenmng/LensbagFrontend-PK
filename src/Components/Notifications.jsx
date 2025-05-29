import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import axios from "axios";

function NotificationDropdown() {
  const { userId } = useUser();
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchNotifications = () => {
    axios
      .get("/api/notifications", { withCredentials: true })
      .then((res) => setNotifications(res.data))
      .catch((err) => console.error(err));
  };

  // Fetch notifications on bell icon click
  useEffect(() => {
    if (open) {
      fetchNotifications();
    }
  }, [open]);

  // Auto-fetch every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchNotifications();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleResponse = (notificationId, rentalRequestId, action) => {
    axios
      .post(
        "/api/rental_requests/respond",
        { notificationId, rentalRequestId, action },
        { withCredentials: true }
      )
      .then(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== notificationId));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="notification-container position-relative">
      <button className="btn btn-outline-dark position-relative" onClick={() => setOpen(!open)}>
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
            width: "300px",
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
                <p>
                  <strong>{n.requester_name}</strong> requested{" "}
                  <strong>{n.product_name}</strong>
                </p>
                <p>
                  From: {n.requested_start_date} <br />
                  To: {n.requested_end_date}
                </p>
                <small className="text-muted">
                  {new Date(n.created_at).toLocaleString()}
                </small>
                <div className="mt-2 d-flex justify-content-between">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() =>
                      handleResponse(n.id, n.rental_request_id, "accepted")
                    }
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      handleResponse(n.id, n.rental_request_id, "denied")
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
