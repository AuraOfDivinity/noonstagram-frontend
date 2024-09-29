import React from "react";

interface PopupProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const withPopup = (Component: React.FC<PopupProps>) => {
  const WrappedComponent: React.FC<PopupProps> = (props: PopupProps) => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 font-montserrat">
          {props.title}
        </h2>
        <p className="mb-6 font-lora">{props.message}</p>
        <Component {...props} />
        <div className="flex justify-end space-x-2">
          <button
            onClick={props.onCancel}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 font-montserrat text-sm"
          >
            Cancel
          </button>
          <button
            onClick={props.onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-montserrat text-sm"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );

  // Assign a display name for linting fix
  WrappedComponent.displayName = `withPopup(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

export default withPopup;
