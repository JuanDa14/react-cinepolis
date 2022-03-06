import toast from "react-hot-toast";

export const toastAlert = (promise, resp = "") => {
  if (resp === "Saved") {
    toast.promise(
      promise,
      {
        loading: "Loading",
        success: "Saving data",
        error: "Error saving data",
      },
      {
        style: {
          minWidth: "200px",
        },
        success: {
          duration: 4000,
        },
        error: {
          duration: 4000,
        },
        position: "bottom-left",
      }
    );
  } else {
    toast.promise(
      promise,
      {
        loading: "Loading",
        success: "Deleting data",
        error: "Error deleting data",
      },
      {
        style: {
          minWidth: "200px",
        },
        success: {
          duration: 4000,
        },
        error: {
          duration: 4000,
        },
        position: "bottom-left",
      }
    );
  }
};
