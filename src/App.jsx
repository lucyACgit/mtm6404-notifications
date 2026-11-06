import { useState } from "react";
import "./App.css";
import initialNotifications from "./notifications";

function NotificationCard({ children }) {
  return <article className="notification">{children}</article>;
}

function App() {
  const [notifications, setNotifications] = useState(initialNotifications);

  return (
    <div className="App">
      <h1>Notifications</h1>
      <p className="Notifynumber">
        Number of notifications: {notifications.length}
      </p>
      <button
        className="clear-all"
        type="button"
        onClick={() => setNotifications([])}
      >
        {notifications.length === 0 ? "It's all set" : "Clear all"}
      </button>

      <section className="notification-list">
        {notifications.map((notification) => (
          <NotificationCard key={notification.id}>
            <div className="notification-name">
              <h2>{notification.name}</h2>
              <p>ID: {notification.id}</p>
            </div>
            <div className="notification-message">
              <p>{notification.message}</p>
            </div>
            <div className="notification-action">
              <button
                type="button"
                onClick={() =>
                  setNotifications((current) =>
                    current.filter((item) => item.id !== notification.id),
                  )
                }
              >
                Delete
              </button>
            </div>
          </NotificationCard>
        ))}
      </section>
    </div>
  );
}

export default App;
