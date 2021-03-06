#!/usr/bin/env node

/**
 * Copyright (c) 2009-present, theEMFcompany, Inc.
 * All rights reserved
 *
 * This code is lisenced under MIT-style lisence found in the
 * LISENCE file in the root directory of this source tree
 */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Avoid new language features, this file should run in Node 0.10+

'use strict';

var chalk = require('chalk');

var currentNodeVersion = process.versions.node;

var semver = currentNodeVersion.split('.');
var major = semver[0];

if (major < 4) {
  console.error(
    chalk.red(
      'You are running Node '+
      currentNodeVersion + '\n' +
      'Frontflip rquires Node 4.0 or higher. \n' +
      'Please update your version of Node.'
    )
  );
  process.exit(1);
}

require('./frontflip');
