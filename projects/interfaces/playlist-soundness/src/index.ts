// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.

export interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: "song";
}

export interface Album {
	songs: Song[];
	type: "album";
}

export interface Playlist {
	resolve: () => Song[];
	type: "playlist";
}

export type Parameter = (Song | Album | Playlist)[];

export interface Return {
	artists: {};
	songs: string[];
	time: number;
}

export type UnrollFunction = (playlist: Parameter) => Return;

export const unrollPlaylist: UnrollFunction = (playlist: Parameter) => {
	let artistsObj: { [artistName: string]: string[] } = {};
	let songs: string[] = [];
	let time: number = 0;

	function addSong(item: Song) {
		if (typeof item.artist === "string") {
			if (!artistsObj[item.artist]) {
				artistsObj = {
					...artistsObj,
					[item.artist]: [item.name],
				};
			} else {
				artistsObj[item.artist].push(item.name);
			}
		} else {
			item.artist.forEach((artist) => {
				if (!artistsObj[artist]) {
					artistsObj = {
						...artistsObj,
						[artist]: [item.name],
					};
				} else {
					artistsObj[artist].push(item.name);
				}
			});
		}
		songs.push(item.name);
		time = time + item.length;
	}

	playlist.forEach((item) => {
		switch (item.type) {
			case "song":
				addSong(item);
				break;
			case "album":
				item.songs.forEach((song) => {
					addSong(song);
				});
				break;
			case "playlist":
				let list = item.resolve();
				list.forEach((song) => {
					addSong(song);
				});
		}
	});

	return {
		artists: artistsObj,
		songs,
		time,
	};
};
