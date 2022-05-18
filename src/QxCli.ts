import { Command } from 'commander';
import path from 'path';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import { APP_NAME, CREATE_QUESTIONS, CWD } from './constants';
import { downloadRepo, logger } from './utils';

class QxCli {

  run(): void {
    const program = new Command();
    program
      .command('create')
      .description('创建项目')
      .action(this.create);

    program
      .name(APP_NAME)
      .usage('create');
    program.showHelpAfterError();
    program.parse(process.argv);
  }

  async create(): Promise<void> {
    const { type, projectName } = await inquirer.prompt(CREATE_QUESTIONS);

    if (!/^[a-z\d-]+$/.test(projectName)) {
      logger.error('项目名称只能由小写字母，数字，横杆组成');
      process.exit(0);
    }

    if (fs.existsSync(path.resolve(CWD, projectName))) {
      logger.error(`${projectName} 目录已存在`);
      process.exit(0);
    }

    downloadRepo({ type, projectName });
  }
}

export default QxCli;