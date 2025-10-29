#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    console.log(`Comparing ${filepath1} and ${filepath2} with format ${options.format || 'stylish'}`);
  });
program.parse();
