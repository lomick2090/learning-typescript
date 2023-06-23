import { getFlowers, FlowersSettings } from "./flora/flowers.solution";
import { getTrees, TreesSettings } from "./flora/trees.solution";

export interface FloraSettings {
	flowers?: FlowersSettings;
	trees?: TreesSettings;
}

export function getFlora(settings?: FloraSettings) {
	return [getFlowers(settings?.flowers), getTrees(settings?.trees)];
}
