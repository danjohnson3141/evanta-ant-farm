// export type Direction = 'LeftDown' | 'LeftUp' | 'RightDown' | 'RightUp' | 'UpRight' | 'UpLeft' | 'DownRight' | 'DownLeft';
export const directions = ['west', 'north', 'east', 'south'] as const;
export type Direction = 'west' | 'north' | 'east' | 'south';