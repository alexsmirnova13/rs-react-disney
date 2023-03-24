export interface IHero {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: gender;
  house: string;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: IWand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export interface IWand {
  wood: string;
  core: string;
  length: number | null;
}

type gender = 'male' | 'female';

export interface INewHero {
  name: string | undefined;
  dateOfBirth: string | undefined;
  wizard: string | undefined;
  house: string | undefined;
  gender: string;
  image: File | undefined;
  id: string;
}
