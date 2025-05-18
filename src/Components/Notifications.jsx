import { useEffect, useState, useContext } from "react";
import { useUser } from "../context/UserContext"; 
import axios from "axios";

function NotificationDropdown() {
    const { userId } = useUser();
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (userId && open) {
      axios
        .get(`/api/notifications/${userId}`)
        .then((res) => setNotifications(res.data))
        .catch((err) => console.error(err));
    }
  }, [userId, open]);

  return (
    <div className="notification-container position-relative">
      <button className="btn btn-outline-dark" onClick={() => setOpen(!open)}>
      <i class="bi bi-bell-fill"></i>
      </button>
      {open && (
       <div className="dropdown-menu show p-3" style={{ width: "300px", maxHeight: "400px", overflowY: "auto", right: "0", transformOrigin: "top right" }}>
          <h6 className="dropdown-header">Notifications</h6>
          {notifications.length === 0 ? (
            <div className="dropdown-item">No new notifications</div>
          ) : (
            notifications.map((n) => (
              <div key={n.id} className="dropdown-item">
                <p>{n.message}</p>
                <small className="text-muted">{new Date(n.created_at).toLocaleString()}</small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationDropdown;
