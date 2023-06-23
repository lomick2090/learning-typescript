import { getReptiles, ReptilesSettings } from "./fauna/reptiles.solution";
import { getMammals, MammalsSettings } from "./fauna/mammals.solution";

export interface FaunaSettings {
	mammals?: MammalsSettings;
	reptiles?: ReptilesSettings;
}

export function getFauna(settings?: FaunaSettings) {
	return [getMammals(settings?.mammals), getReptiles(settings?.reptiles)];
}
