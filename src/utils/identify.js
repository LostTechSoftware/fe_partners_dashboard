export const identify = ({ email, name }) => {
  window.smartlook &&
    window.smartlook("identify", name, {
      email,
      name,
    });
};
