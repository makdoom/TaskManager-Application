import moment from "moment";

export const formatDate = (userDate) => {
  if (!userDate) return null;

  return moment(userDate).format("Do MMMM YYYY, h:mm a");
};
