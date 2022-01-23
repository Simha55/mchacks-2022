/**
 * File where the types will be stored
 */

// Navigation
export type RootStackParamList = {
  Landing: undefined;
  Camera: undefined;
  About: undefined;
  Info: {
    uri: string;
  };
};

// About
export interface Member {
  name: string;
  avatar?: string;
  title: string;
  url: string;
}
