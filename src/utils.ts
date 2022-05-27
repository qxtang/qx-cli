import ora from 'ora';
import path from 'path';
import chalk from 'chalk';
import { promisify } from 'util';
import downloadGitRepo from 'download-git-repo';
import { CWD } from './constants';
import { TValue } from './types';

/**
 * @description: 睡眠
 */
export const sleep = (t = 1000) => new Promise(resolve => setTimeout(resolve, t));

/**
 * @description: 打印日志封装
 */
export const logger = {
  info: (...args: any) => {
    console.log(`[${new Date().toLocaleString()}] -`, ...args);
  },
  error: (...args: any) => {
    console.log(`[${new Date().toLocaleString()}] - ERROR:`, chalk.redBright(...args));
  }
};

/**
 * @description: 下载模板
 */
export const downloadRepo = async (options: { type: TValue; projectName: string }) => {
  const { type: { repo = '' }, projectName } = options;

  const downloadPath = path.resolve(CWD, projectName);
  const repoUrl = `direct:${repo}#master`;

  const spinner = ora('正在拉取模板').start();
  try {
    await promisify(downloadGitRepo)(
      repoUrl,
      downloadPath,
      { clone: true }
    );

    spinner.color = 'green';
    spinner.succeed(`${chalk.blueBright('拉取模板成功')}`);
  } catch (e) {
    spinner.color = 'red';
    spinner.fail(chalk.redBright('拉取模板失败:', e));
    process.exit(1);
  }
};

