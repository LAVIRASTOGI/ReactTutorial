import { useState } from "react";

export default function useNotification() {
  const [content, setContent] = useState("");
  const showNotificationHandler = (contentData) => {
    setContent(contentData);
    setTimeout(() => {
      setContent("");
    }, 2000);
  };

  const NotificationComp = () => {
    return (
      <>{content ? <div className="notification"> {content}</div> : null}</>
    );
  };

  return { showNotificationHandler, NotificationComp };
}
