import getConfig from "next-server/config";

const { publicRuntimeConfig } = getConfig();
const prefix = publicRuntimeConfig.pathPrefix;
const path = (src) => `${prefix}/static/${src}`;

export default path;
