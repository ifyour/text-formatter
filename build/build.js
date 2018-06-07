const cp = require('child_process');
const ghPages = require('gh-pages');
const ora = require('ora');
const spinner = ora('Publishing HeroKu...').start();

const buildFiles = './.saber/website';
const ghPageOption = { dest: 'public' };

cp.exec('npm run build', err => {
  if (!err) {
    ghPages.publish(buildFiles, ghPageOption, err => {
      !err ? spinner.succeed('Publish successfully.') : spinner.fail(err);
    });
  } else {
    spinner.fail(err);
  }
});
