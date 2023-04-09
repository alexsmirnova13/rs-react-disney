export interface IHero {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
}

export interface IWand {
  wood: string;
  core: string;
  length: number | null;
}

export interface INewHero {
  name: string | undefined;
  dateOfBirth: string | undefined;
  wizard: boolean | undefined;
  house: string | undefined;
  gender: string;
  image: File | undefined;
  checked: boolean | undefined;
  id: string;
}

export interface IFormComponentProps {
  onParentSubmit: (res: INewHero) => void;
}

export type FormValues = {
  inputName: string;
  inputDate: string;
  radioGender: string;
  house: string;
  isWizard: boolean;
  fileInput: FileList | undefined;
  inputCheckbox: boolean;
};
export interface IAnime {
  attributes: {
    canonicalTitle: string;
    ageRating: string;
    posterImage: {
      large: string;
      small: string;
      tiny: string;
    };
    createdAt: string;
    description: string;
    endDate: string;
    episodeCount: number;
    episodeLength: number;
    favoritesCount: number;
    popularityRank: number;
    status: string;
    synopsis: string;
    titles: {
      en: string;
      en_jp: string;
    };
  };
  id: string;
}
