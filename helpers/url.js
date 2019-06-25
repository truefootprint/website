import getConfig from "next-server/config";

const { publicRuntimeConfig } = getConfig();
const prefix = publicRuntimeConfig.pathPrefix;
const url = (src) => `${prefix}${src}`;

export default url;