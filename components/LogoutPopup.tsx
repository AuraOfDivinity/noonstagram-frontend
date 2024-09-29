import withPopup from "@/app/hoc/withPopup";
import React from "react";

interface LogoutPopupProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutPopup: React.FC<LogoutPopupProps> = ({}) => {
  return (
    <>
      <p>Are you sure you want to logout?</p>
    </>
  );
};

export default withPopup(LogoutPopup);
