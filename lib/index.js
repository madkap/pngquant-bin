'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');

module.exports = new BinWrapper()
	.src(path.resolve(__dirname, '../vendor', 'macos/pngquant', 'darwin'))
	.src(path.resolve(__dirname, '../vendor', 'linux/x86/pngquant', 'linux', 'x86'))
	.src(path.resolve(__dirname, '../vendor', 'linux/x64/pngquant', 'linux', 'x64'))
	.src(path.resolve(__dirname, '../vendor', 'freebsd/x64/pngquant', 'freebsd', 'x64'))
	.src(path.resolve(__dirname, '../vendor', 'win/pngquant.exe', 'win32'))
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'pngquant.exe' : 'pngquant');
