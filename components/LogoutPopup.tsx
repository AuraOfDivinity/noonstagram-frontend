import withPopup from "@/app/hoc/withPopup";
import React from "react";

interface LogoutPopupProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutPopup: React.FC<LogoutPopupProps> = () => {
  // Since the HOC already handles the message and title display,
  // this component does not need to render anything additional
  return null;
};

export default withPopup(LogoutPopup);
