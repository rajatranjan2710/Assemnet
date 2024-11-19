import toast from "react-hot-toast";

export const validateUser = (data) => {
  if (!data.name || !data.email || !data.dob) {
    toast.error("All fields are required");
    return false;
  } else if (!data.email.includes("@")) {
    toast.error("Invalid email format");
    return false;
  }
  return true;
};
