export const getSelectedRole = (msg) => {
  return msg.text.slice(0, -1);
};
