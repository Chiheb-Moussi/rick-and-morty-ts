
type Origin = {
    name: string;
    url: string;
}
type LocationType = {
    name: string;
    url: string;
}

export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: LocationType;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

