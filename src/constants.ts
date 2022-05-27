import { TApp, TQuestionItem } from './types';

export const CWD = process.cwd();
export const APP_NAME = 'qx-cli';

export const APP_LIST: Array<TApp> = [
  {
    name: '微信小程序',
    value: { repo: 'https://gitee.com/qx9/wxapp-demo' }
  },
  // {
  //   name: 'PC端企业官网',
  //   value: { repo: 'https://gitee.com/qx9/pc-static-web-demo' }
  // },
  {
    name: 'react 组件打包 umd',
    value: { repo: 'https://github.com/qxtang/react-umd-demo' }
  }
];

export const CREATE_QUESTIONS: TQuestionItem[] = [
  {
    type: 'list',
    name: 'type',
    message: '请选择项目类型',
    choices: APP_LIST
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
