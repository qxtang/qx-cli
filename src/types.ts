export type TProjectType = 'wxapp' | 'pc-static-web'

export interface TChoice {
  name: string;
  value: TProjectType;
}

export interface TQuestionItem {
  type: 'input' | 'list';
  name: string;
  message: string;
  choices?: Array<TChoice>;
  validate?: (any) => any;
}

