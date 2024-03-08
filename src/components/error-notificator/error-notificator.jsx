import { createPortal } from "react-dom";
import styles from "./error-notificator.module.scss";

const ErrorNotificator = () => {
  const notifications = "Сообщение об ошибке";

  return createPortal(
    <div className={styles.container}>{notifications}</div>,
    document.querySelector("#errors")
  );
};

export default ErrorNotificator;
