const chalk = require('chalk');
const msgPath = process.env.HUSKY_GIT_PARAMS || '.git/COMMIT_EDITMSG'; // 注意因为用的是husky所以这里是HUSKY_GIT_PARAMS
console.log(msgPath, process.env, 'msgPath.....');
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();
const commitRE = /^\[json-shopping-\d+\]\:\s.{1,50}/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    chalk.red(`  提交信息不满足项目要求，具体如下\n`) +
    chalk.red(`  [json-shopping-xxx]: 修复xxxbug\n`) + 
    chalk.red(`  或者\n`) + 
    chalk.red(`  [json-shopping-xxx]: 完成xxx需求\n`)
  )
  process.exit(1)
}