# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Ucommitted]

This is a list of the items I am currently working on, not yet committed that will move into unreleased. (It's my BUSY column in kanban, so that I remember to move these notes from uncommitted to unreleased, and so on)

- Fix bug, script not work if page name contains a hyphen. (i.e. need to convert to camelCase)

## [Unreleased]

## [0.0.4] - 2017-02-01

### Changed
- fix incorrect documentation stating that the default command is `yo gf i2 {pagename}` that doesnt work. Correct syntax requires colon i.e. `yo gf:i2 {pagename}`

## [0.0.3] - 2017-01-31
### Added
- first useful generator, `yo gf i2 {pagename}` that generates the 1 folder + 3 files.
