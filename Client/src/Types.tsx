export interface ImageType {
  src?: string;
  rotate?: number;
  x?: number;
  y?: number;
  imageID?: string;
  rotation?: number;
  scaleX?: number;
  scaleY?: number;
  precentageWidth?: number;
}

export interface FetchedImages {
  img: string;
  userID: string;
  _id: string;
  _v: number;
}

export interface Peragraph {
  fontSize?: number;
  lineHeight: number;
  fontFamily?: string;
  fading?: boolean;
  color?: string;
  text: string;
  x?: number;
  y?: number;
  dispatch?: any;
  textAlign?: string;
}

export interface ParticlesType {
  state: boolean;
  size: number;
  count: number;
  type: string;
  color: string;
  waves: boolean; // temporary position
}

export interface BackgroundColorType {
  color1: string;
  color2: string;
  color2Active: boolean;
  color3: string;
  color3Active: boolean;
  color4: string;
  color4Active: boolean;
  degree: number;
  animated: boolean;
}

export interface SongType {
  url: string | null;
  start: string;
}

export interface BackgroundType {
  windowHeight: number | null;
  backgroundColor: BackgroundColorType;
  particles: ParticlesType;
}

export interface CanvasTypes {
  song?: string;
  peragraph: Peragraph;
  images?: { [key: string]: ImageType };
  background?: BackgroundType;
}

export interface UserInfo {
  email: string;
  password: string;
  name?: string;
  admin?: boolean;
}
