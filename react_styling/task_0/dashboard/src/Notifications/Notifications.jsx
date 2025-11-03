import { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeButton from "../assets/close-button.png";
import NotificationItem from "./NotificationItem.jsx";

class Notifications extends Component {
  // Optimize performance: only update when notifications list length changes
  shouldComponentUpdate(nextProps) {
    // Compare the length of the notifications array
    const currentLength = this.props.notifications?.length || 0;
    const nextLength = nextProps.notifications?.length || 0;
    // Also re-render if the displayDrawer prop changed
    const currentDisplay = this.props.displayDrawer;
    const nextDisplay = nextProps.displayDrawer;

    // Re-render if the length changed OR the displayDrawer visibility changed
    return currentLength !== nextLength || currentDisplay !== nextDisplay;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications = [], displayDrawer = false } = this.props;
    const hasNotifications = notifications && notifications.length > 0;

    return (
      <div className="notifications-root">
        <div
          className="notification-title"
          role="button"
          tabIndex={0}
          onClick={() => this.props.handleDisplayDrawer && this.props.handleDisplayDrawer()}
          onKeyPress={(e) => {
            if (e.key === "Enter") this.props.handleDisplayDrawer && this.props.handleDisplayDrawer();
          }}
        >
          Your notifications
        </div>

        {displayDrawer && (
          <div className="notification-items">
            <button
              className="notification-close-button"
              type="button"
              aria-label="Close"
              onClick={() => {
                console.log("Close button has been clicked");
                this.props.handleHideDrawer && this.props.handleHideDrawer();
              }}
            >
              <img
                className="notification-close-icon"
                src={closeButton}
                alt="Close"
              />
            </button>

            {hasNotifications ? (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      {...notification}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
  handleDisplayDrawer: null,
  handleHideDrawer: null,
};

export default Notifications;
