import { PC_STATIC_WEB, TChoice, TQuestionItem, WXAPP } from './types';

export const CWD = process.cwd();
export const APP_NAME = 'qx-cli';

export const CHOICES: Array<TChoice> = [
  {
    name: '微信小程序',
    value: WXAPP
  },
  {
    name: 'PC端企业官网',
    value: PC_STATIC_WEB
  }
];

export const CREATE_QUESTIONS: TQuestionItem[] = [
  {
    type: 'list',
    name: 'type',
    message: '请选择项目类型',
    choices: CHOICES
  },
  {
    type: 'input',
    name: 'projectName',
    message: '请输入项目名称',
    validate: (value) => {
      return !!value;
    }
  }
];
