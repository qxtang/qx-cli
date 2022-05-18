import ora from 'ora';
import path from 'path';
import chalk from 'chalk';
import { promisify } from 'util';
import downloadGitRepo from 'download-git-repo';
import { APP_NAME, CWD } from './constants';
import { TProjectType } from './types';

/**
 * @description: 睡眠
 */
export const sleep = (t = 1000) => new Promise(resolve => setTimeout(resolve, t));

/**
 * @description: 打印日志封装
 */
export const logger = {
  info: (...args: any) => {
    console.log(`[${new Date().toLocaleString()}] - ${APP_NAME.toUpperCase()}:`, ...args);
  },
  error: (...args: any) => {
    console.log(`[${new Date().toLocaleString()}] - ${APP_NAME.toUpperCase()} - ERROR:`, chalk.redBright(...args));
  },
};

/**
 * @description: 下载模板
 */
export const downloadRepo = async (options: { type: TProjectType; projectName: string }) => {
  const { type, projectName } = options;

  const downloadPath = path.resolve(CWD, projectName);
  const repoUrl = `direct:https://gitee.com/qx9/${type}-demo#master`;

  logger.info('downloadRepo', { options, repoUrl, downloadPath });

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

