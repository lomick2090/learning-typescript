import { Person } from "./Person.solution";

export default function criticizePerson(person: Person) {
	if (person.quote.indexOf("#") !== -1) {
		console.log(`\t${person.name} should stop going on Twitter so much...`);
	}
}
