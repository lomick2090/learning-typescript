// Refactor here! ✨
import { getFauna, FaunaSettings } from "./getFauna";
import { getFlora, FloraSettings } from "./getflora";
import { onlyTruthy } from "./utils/onlyTruthy.solution";

export interface EverythingSettings {
	fauna?: FaunaSettings;
	flora?: FloraSettings;
}

export function getEverything(settings?: EverythingSettings) {
	return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora));
}
