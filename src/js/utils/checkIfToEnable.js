import config from "../contentScript/config";

const checkIfToEnableExtension = (siteName) => {
  return Object.keys(config).some((site) => {
    return siteName.includes(site);
  });
}

export default checkIfToEnableExtension;