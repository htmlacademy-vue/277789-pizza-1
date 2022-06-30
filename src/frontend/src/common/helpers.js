import { TYPES_MAP } from "@/common/constants";

export const getUrlWithoutExtension = (url) => {
  if (!url) {
    return "";
  }

  return url.indexOf(".") !== -1 ? url.slice(0, url.indexOf(".")) : url;
};

export const addItemType = (item) => ({
  ...item,
  type: TYPES_MAP[item.name],
});
