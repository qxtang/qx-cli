export interface TValue {
  repo: string;
}

export interface TApp {
  name: string;
  value: TValue;
}

export interface TQuestionItem {
  type: 'input' | 'list';
  name: string;
  message: string;
  choices?: Array<TApp>;
  validate?: (value: string) => boolean;
}

