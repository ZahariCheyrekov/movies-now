import './Notification.css';

import { useContext } from 'react';
import NotificationContext from '../../contexts/notificationContext';

const Notification = () => {
    const message = useContext(NotificationContext);

    return (
        <>
            <article className="site-notification">
                <p className="notification-message">{message}</p>
            </article>
        </>
    );
}

export default Notification;