export type Country = {
  alt: { alt: string};
  name: { common: string };
  nameOfficial: { official: string };
  flag: { png: string};
  flagSvg: { svg: string};
  population: number;
  region: string;
  subregion: string;
  capital: string[];
}