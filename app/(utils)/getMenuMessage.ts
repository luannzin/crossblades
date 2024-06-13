const getMenuMessage = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "bom dia";
  } else if (hour < 18) {
    return "boa tarde";
  } else {
    return "boa noite";
  }
};

export default getMenuMessage;
