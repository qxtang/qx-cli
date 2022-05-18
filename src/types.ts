export const WXAPP = 'wxapp';
export const PC_STATIC_WEB = 'pc-static-web';

export type TProjectType = typeof WXAPP | typeof PC_STATIC_WEB

export interface TChoice {
  name: string;
  value: TProjectType;
}

export interface TQuestionItem {
  type: 'input' | 'list';
  name: string;
  message: string;
  choices?: Array<TChoice>;
  validate?: (value: string) => boolean;
}

