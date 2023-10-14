import { getInstalledPath } from "get-installed-path";

function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

async function getMicrofieldsPackagePath() {
  return await getInstalledPath("microfields", { local: true });
}

export { isJsonString, getMicrofieldsPackagePath };
