export const getSelectBg = (key: string) => {
  switch (key) {
    case "PENDING":
      return "bg-[#FFFF00]";
    case "REQUEST":
      return "bg-[#0000FF] text-white";
    case "PAID":
      return "bg-[#00FF00]";
    default:
      return "bg-[#FF0000] text-white";
  }
};
