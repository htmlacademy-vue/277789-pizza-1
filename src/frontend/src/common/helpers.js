export const getUrlWithoutExtension = (url) => {
  if (!url) {
    return "";
  }

  return url.indexOf(".") !== -1 ? url.slice(0, url.indexOf(".")) : url;
};

export const addItemType = (item, map) => ({
  ...item,
  type: map[item.id],
});
