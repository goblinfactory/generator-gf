# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

My only exception to Sematic Versioning, is that all version numbers below 1 can contain breaking changes until the functionality stabilises, at which point version 1 and greater will follow `semver` guidelines.

## [Unreleased]

## [0.0.6] - 2017-02-01

### Changed

- oops, sposed to be CamelCase, not pascalCase, i.e. captalise class names in `name.page.ts`, so that `yo gf:i2 test-apple` generates `class TestApplePage`

## [0.0.5] - 2017-02-01

### Added
- Support page names with hyphens, convert the name into camelcase so that the generated `{pagename}Page` class is valid. e.g. `my-games` becomes `class myGamesPage` instead of `class my-gamesPage`.

## [0.0.4] - 2017-02-01

### Changed
- fix incorrect documentation stating that the default command is `yo gf i2 {pagename}` that doesnt work. Correct syntax requires colon i.e. `yo gf:i2 {pagename}`

## [0.0.3] - 2017-01-31
### Added
- first useful generator, `yo gf i2 {pagename}` that generates the 1 folder + 3 files.
