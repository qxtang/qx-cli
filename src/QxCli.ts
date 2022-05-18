import { Command } from 'commander';
import { APP_NAME, CWD } from './constants';

class QxCli {
  constructor() {}

  run(): void {
    const program = new Command();
    program
      .command('create')
      .description('创建项目')
      .action(this.create);
    const options = program.opts<any>();

    program
      .name(APP_NAME)
      .usage('create');
    program.showHelpAfterError();
    program.parse(process.argv);

    console.log('run:', { options, CWD });
  }

  create(): void {
    console.log('create');
  }
}

export default QxCli;