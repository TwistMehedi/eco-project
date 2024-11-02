export const updateAddToCard = (cartPtoduct) => {
  return (document.getElementById(
    "cartValue"
  ).innerHTML = `<i>${cartPtoduct.length}</i>`);
};
