import { SCREEN_WIDTH } from '../constants/Dimensions';

export const generateUserDataSnapOffsets = (size: number) => {
  return new Array(size).fill('a').map((_, idx) => {
    return SCREEN_WIDTH * idx;
  });
};
