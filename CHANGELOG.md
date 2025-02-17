# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/)

The types of changes are:

* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Developer Experience` for changes in developer workflow or tooling.
* `Deprecated` for soon-to-be removed features.
* `Docs` for documentation only changes.
* `Removed` for now removed features.
* `Fixed` for any bug fixes.
* `Security` in case of vulnerabilities.

## [Unreleased](https://github.com/ethyca/fides/compare/1.9.1...main)

## [1.9.1](https://github.com/ethyca/fides/compare/1.9.0...1.9.1)

### Changed

* Update fideslang to v1.3.1 [#1136](https://github.com/ethyca/fides/pull/1136)

### Changed

* Update fideslang to v1.3.1 [#1136](https://github.com/ethyca/fides/pull/1136)

## [1.9.0](https://github.com/ethyca/fides/compare/1.8.6...1.9.0) - 2022-09-29

### Added

* Dataset generation enhancements using Fides Classify for Plus users:
  * Added toggle for enabling classify during generation. [#1057](https://github.com/ethyca/fides/pull/1057)
  * Initial implementation of API request to kick off classify, with confirmation modal. [#1069](https://github.com/ethyca/fides/pull/1069)
  * Initial Classification & Review status for generated datasets. [#1074](https://github.com/ethyca/fides/pull/1074)
  * Component for choosing data categories based on classification results. [#1110](https://github.com/ethyca/fides/pull/1110)
  * The dataset fields table shows data categories from the classifier (if available). [#1088](https://github.com/ethyca/fides/pull/1088)
  * The "Approve" button can be used to update the dataset with the classifier's suggestions. [#1129](https://github.com/ethyca/fides/pull/1129)
* System management UI:
  * New page to add a system via yaml [#1062](https://github.com/ethyca/fides/pull/1062)
  * Skeleton of page to add a system manually [#1068](https://github.com/ethyca/fides/pull/1068)
  * Refactor config wizard system forms to be reused for system management [#1072](https://github.com/ethyca/fides/pull/1072)
  * Add additional optional fields to system management forms [#1082](https://github.com/ethyca/fides/pull/1082)
  * Delete a system through the UI [#1085](https://github.com/ethyca/fides/pull/1085)
  * Edit a system through the UI [#1096](https://github.com/ethyca/fides/pull/1096)
* Cypress component testing [#1106](https://github.com/ethyca/fides/pull/1106)

### Changed

* Changed behavior of `load_default_taxonomy` to append instead of upsert [#1040](https://github.com/ethyca/fides/pull/1040)
* Changed behavior of adding privacy declarations to decouple the actions of the "add" and "next" buttons [#1086](https://github.com/ethyca/fides/pull/1086)
* Moved system related UI components from the `config-wizard` directory to the `system` directory [#1097](https://github.com/ethyca/fides/pull/1097)
* Dataset fields table shows categories in the last column. [#1088](https://github.com/ethyca/fides/pull/1088)

### Fixed

* Fixed the "help" link in the UI header [#1078](https://github.com/ethyca/fides/pull/1078)
* Fixed a bug in Data Category Dropdowns where checking i.e. `user.biometric` would also check `user.biometric_health` [#1126](https://github.com/ethyca/fides/pull/1126)

### Security

* Upgraded pymysql to version `1.0.2` [#1094](https://github.com/ethyca/fides/pull/1094)

## [1.8.6](https://github.com/ethyca/fides/compare/1.8.5...1.8.6) - 2022-09-28

### Added

* Added classification tables for Plus users [#1060](https://github.com/ethyca/fides/pull/1060)

### Fixed

* Fixed a bug where rows were being excluded from a data map [#1124](https://github.com/ethyca/fides/pull/1124)

## [1.8.5](https://github.com/ethyca/fides/compare/1.8.4...1.8.5) - 2022-09-21

### Changed

* Update fideslang to v1.3.0 [#1103](https://github.com/ethyca/fides/pull/1103)

## [1.8.4](https://github.com/ethyca/fides/compare/1.8.3...1.8.4) - 2022-09-09

### Added

* Initial system management page [#1054](https://github.com/ethyca/fides/pull/1054)

### Changed

* Deleting a taxonomy field with children will now cascade delete all of its children as well. [#1042](https://github.com/ethyca/fides/pull/1042)

### Fixed

* Fixed navigating directly to frontend routes loading index page instead of the correct static page for the route.
* Fix truncated evaluation error messages [#1053](https://github.com/ethyca/fides/pull/1053)

## [1.8.3](https://github.com/ethyca/fides/compare/1.8.2...1.8.3) - 2022-09-06

### Added

* Added more taxonomy fields that can be edited via the UI [#1000](https://github.com/ethyca/fides/pull/1000) [#1028](https://github.com/ethyca/fides/pull/1028)
* Added the ability to add taxonomy fields via the UI [#1019](https://github.com/ethyca/fides/pull/1019)
* Added the ability to delete taxonomy fields via the UI [#1006](https://github.com/ethyca/fides/pull/1006)
  * Only non-default taxonomy entities can be deleted [#1023](https://github.com/ethyca/fides/pull/1023)
* Prevent deleting taxonomy `is_default` fields and from adding `is_default=True` fields via the API [#990](https://github.com/ethyca/fides/pull/990).
* Added a "Custom" tag to distinguish user defined taxonomy fields from default taxonomy fields in the UI [#1027](https://github.com/ethyca/fides/pull/1027)
* Added initial support for enabling Fides Plus [#1037](https://github.com/ethyca/fides/pull/1037)
  * The `useFeatures` hook can be used to check if `plus` is enabled.
  * Navigating to/from the Data Map page is gated behind this feature.
  * Plus endpoints are served from the private Plus image.

### Fixed

* Fixed failing mypy tests [#1030](https://github.com/ethyca/fides/pull/1030)
* Fixed an issue where `fides push --diff` would return a false positive diff [#1026](https://github.com/ethyca/fides/pull/1026)
* Pinned pydantic version to < 1.10.0 to fix an error in finding referenced fides keys [#1045](https://github.com/ethyca/fides/pull/1045)

## [1.8.2](https://github.com/ethyca/fides/compare/1.8.1...1.8.2) - 2022-08-18

### Added

* Added the ability to edit taxonomy fields via the UI [#977](https://github.com/ethyca/fides/pull/977)
* New column `is_default` added to DataCategory, DataUse, DataSubject, and DataQualifier tables [#976](https://github.com/ethyca/fides/pull/976)

### Changed

* Upgraded base Docker version to Python 3.9 and updated all other references from 3.8 -> 3.9 [#974](https://github.com/ethyca/fides/pull/974)
* Prepend all database tables with `ctl_` [#979](https://github.com/ethyca/fides/pull/979)
* Moved the `admin-ui` code down one level into a `ctl` subdir [#970](https://github.com/ethyca/fides/pull/970)
* Extended the `/datamap` endpoint to include extra metadata [#992](https://github.com/ethyca/fides/pull/992)

## [1.8.1](https://github.com/ethyca/fides/compare/1.8.0...1.8.1) - 2022-08-08

### Deprecated

* The following environment variables have been deprecated, and replaced with the new environment variable names indicated below. To avoid breaking existing workflows, the deprecated variables are still respected in v1.8.1. They will be removed in a future release.
  * `FIDESCTL__API__DATABASE_HOST` --> `FIDESCTL__DATABASE__SERVER`
  * `FIDESCTL__API__DATABASE_NAME` --> `FIDESCTL__DATABASE__DB`
  * `FIDESCTL__API__DATABASE_PASSWORD` --> `FIDESCTL__DATABASE__PASSWORD`
  * `FIDESCTL__API__DATABASE_PORT` --> `FIDESCTL__DATABASE__PORT`
  * `FIDESCTL__API__DATABASE_TEST_DATABASE_NAME` --> `FIDESCTL__DATABASE__TEST_DB`
  * `FIDESCTL__API__DATABASE_USER` --> `FIDESCTL__DATABASE__USER`

### Developer Experience

* The included `docker-compose.yml` no longer references outdated ENV variables [#964](https://github.com/ethyca/fides/pull/964)

### Docs

* Minor release documentation now reflects the desired patch release process [#955](https://github.com/ethyca/fides/pull/955)
* Updated references to ENV variables [#964](https://github.com/ethyca/fides/pull/964)

### Fixed

* Deprecated config options will continue to be respected when set via environment variables [#965](https://github.com/ethyca/fides/pull/965)
* The git cache is rebuilt within the Docker container [#962](https://github.com/ethyca/fides/pull/962)
* The `wheel` pypi build no longer has a dirty version tag [#962](https://github.com/ethyca/fides/pull/962)
* Add setuptools to dev-requirements to fix versioneer error [#983](https://github.com/ethyca/fides/pull/983)

## [1.8.0](https://github.com/ethyca/fides/compare/1.7.1...1.8.0) - 2022-08-04

### Added

* Initial configuration wizard UI view
  * System scanning step: AWS credentials form and initial `generate` API usage.
  * System scanning results: AWS systems are stored and can be selected for review
* CustomInput type "password" with show/hide icon.
* Pull CLI command now checks for untracked/unstaged files in the manifests dir [#869](https://github.com/ethyca/fides/pull/869)
* Pull CLI command has a flag to pull missing files from the server [#895](https://github.com/ethyca/fides/pull/895)
* Add BigQuery support for the `generate` command and `/generate` endpoint [#814](https://github.com/ethyca/fides/pull/814) & [#917](https://github.com/ethyca/fides/pull/917)
* Added user auth tables [915](https://github.com/ethyca/fides/pull/915)
* Standardized API error parsing under `~/types/errors`
* Added taxonomy page to UI [#902](https://github.com/ethyca/fides/pull/902)
  * Added a nested accordion component for displaying taxonomy data [#910](https://github.com/ethyca/fides/pull/910)
* Add lru cache to get_config [927](https://github.com/ethyca/fides/pull/927)
* Add support for deprecated API config values [#959](https://github.com/ethyca/fides/pull/959)
* `fides` is now an alias for `fidesctl` as a CLI entrypoint [#926](https://github.com/ethyca/fides/pull/926)
* Add user auth routes [929](https://github.com/ethyca/fides/pull/929)
* Bump fideslib to 3.0.1 and remove patch code[931](https://github.com/ethyca/fides/pull/931)
* Update the `fidesctl` python package to automatically serve the UI [#941](https://github.com/ethyca/fides/pull/941)
* Add `push` cli command alias for `apply` and deprecate `apply` [943](https://github.com/ethyca/fides/pull/943)
* Add resource groups tagging api as a source of system generation [939](https://github.com/ethyca/fides/pull/939)
* Add GitHub Action to publish the `fidesctl` package to testpypi on pushes to main [#951](https://github.com/ethyca/fides/pull/951)

### Changed

* Updated the `datamap` endpoint to return human-readable column names as the first response item [#779](https://github.com/ethyca/fides/pull/779)
* Remove the `obscure` requirement from the `generate` endpoint [#819](https://github.com/ethyca/fides/pull/819)
* Moved all files from `fidesapi` to `fidesctl/api` [#885](https://github.com/ethyca/fides/pull/885)
* Moved `scan` and `generate` to the list of commands that can be run in local mode [#841](https://github.com/ethyca/fides/pull/841)
* Upgraded the base docker images from Debian Buster to Bullseye [#958](https://github.com/ethyca/fides/pull/958)
* Removed `ipython` as a dev-requirement [#958](https://github.com/ethyca/fides/pull/958)
* Webserver dependencies now come as a standard part of the package [#881](https://github.com/ethyca/fides/pull/881)
* Initial configuration wizard UI view
  * Refactored step & form results management to use Redux Toolkit slice.
* Change `id` field in tables from an integer to a string [915](https://github.com/ethyca/fides/pull/915)
* Update `fideslang` to `1.1.0`, simplifying the default taxonomy and adding `tags` for resources [#865](https://github.com/ethyca/fides/pull/865)
* Merge existing configurations with `fideslib` library [#913](https://github.com/ethyca/fides/pull/913)
* Moved frontend static files to `src/fidesctl/ui-build/static` [#934](https://github.com/ethyca/fides/pull/934)
* Replicated the error response handling from the `/validate` endpoint to the `/generate` endpoint [#911](https://github.com/ethyca/fides/pull/911)

### Developer Experience

* Remove `API_PREFIX` from fidesctl/core/utils.py and change references to `API_PREFIX` in fidesctl/api/reoutes/util.py [922](https://github.com/ethyca/fides/pull/922)

### Fixed

* Dataset field columns show all columns by default in the UI [#898](https://github.com/ethyca/fides/pull/898)
* Fixed the missing `.fides./` directory when locating the default config [#933](https://github.com/ethyca/fides/pull/933)

## [1.7.1](https://github.com/ethyca/fides/compare/1.7.0...1.7.1) - 2022-07-28

### Added

* Add datasets via YAML in the UI [#813](https://github.com/ethyca/fides/pull/813)
* Add datasets via database connection [#834](https://github.com/ethyca/fides/pull/834) [#889](https://github.com/ethyca/fides/pull/889)
* Add delete confirmation when deleting a field or collection from a dataset [#809](https://github.com/ethyca/fides/pull/809)
* Add ability to delete datasets from the UI [#827](https://github.com/ethyca/fides/pull/827)
* Add Cypress for testing [713](https://github.com/ethyca/fides/pull/833)
* Add datasets via database connection (UI only) [#834](https://github.com/ethyca/fides/pull/834)
* Add Okta support to the `/generate` endpoint [#842](https://github.com/ethyca/fides/pull/842)
* Add db support to `/generate` endpoint [849](https://github.com/ethyca/fides/pull/849)
* Added OpenAPI TypeScript client generation for the UI app. See the [README](/clients/admin-ui/src/types/api/README.md) for more details.

### Changed

* Remove the `obscure` requirement from the `generate` endpoint [#819](https://github.com/ethyca/fides/pull/819)

### Developer Experience

* When releases are published, dispatch a repository webhook event to ethyca/fidesctl-plus [#938](https://github.com/ethyca/fides/pull/938)

### Docs

* recommend/replace pip installs with pipx [#874](https://github.com/ethyca/fides/pull/874)

### Fixed

* CustomSelect input tooltips appear next to selector instead of wrapping to a new row.
* Datasets without the `third_country_transfer` will not cause the editing dataset form to not render.
* Fixed a build issue causing an `unknown` version of `fidesctl` to be installed in published Docker images [#836](https://github.com/ethyca/fides/pull/836)
* Fixed an M1-related SQLAlchemy bug [#816](https://github.com/ethyca/fides/pull/891)
* Endpoints now work with or without a trailing slash. [#886](https://github.com/ethyca/fides/pull/886)
* Dataset field columns show all columns by default in the UI [#898](https://github.com/ethyca/fides/pull/898)
* Fixed the `tag` specific GitHub Action workflows for Docker and publishing docs. [#901](https://github.com/ethyca/fides/pull/901)

## [1.7.0](https://github.com/ethyca/fides/compare/1.6.1...1.7.0) - 2022-06-23

### Added

* Added dependabot to keep dependencies updated
* A warning now issues for any orphan datasets as part of the `apply` command [543](https://github.com/ethyca/fides/pull/543)
* Initial scaffolding of management UI [#561](https://github.com/ethyca/fides/pull/624)
* A new `audit` command for `system` and `organization` resources, checking data map attribute compliance [#548](https://github.com/ethyca/fides/pull/548)
* Static UI assets are now built with the docker container [#663](https://github.com/ethyca/fides/issues/663)
* Host static files via fidesapi [#621](https://github.com/ethyca/fides/pull/621)
* A new `generate` endpoint to enable capturing systems from infrastructure from the UI [#642](https://github.com/ethyca/fides/pull/642)
* A new `datamap` endpoint to enable visualizing a data map from the UI [#721](https://github.com/ethyca/fides/pull/721)
* Management UI navigation bar [#679](https://github.com/ethyca/fides/issues/679)
* Management UI integration [#736](https://github.com/ethyca/fides/pull/736)
  * Datasets
  * Systems
  * Taxonomy (data categories)
* Initial dataset UI view [#768](https://github.com/ethyca/fides/pull/768)
  * Add interaction for viewing a dataset collection
  * Add column picker
  * Add a data category checklist tree
  * Edit/delete dataset fields
  * Edit/delete dataset collections
  * Edit datasets
  * Add a component for Identifiability tags
  * Add tooltips for help on forms
  * Add geographic location (third_country_transfers) country selection. Supported by new dependency `i18n-iso-countries`.
* Okta, aws and database credentials can now come from `fidesctl.toml` config [#694](https://github.com/ethyca/fides/pull/694)
* New `validate` endpoint to test aws and okta credentials [#722](https://github.com/ethyca/fides/pull/722)
* Initial configuration wizard UI view
  * Manual entry steps added (name and describe organization, pick entry route, and describe system manually including privacy declarations)
* A new image tagged `ethyca/fidesctl:dev` is published on each push to `main` [781](https://github.com/ethyca/fides/pull/781)
* A new cli command (`fidesctl sync`) [#765](https://github.com/ethyca/fides/pull/765)

### Changed

* Comparing server and CLI versions ignores `.dirty` only differences, and is quiet on success when running general CLI commands [621](https://github.com/ethyca/fides/pull/621)
* All endpoints now prefixed by `/api/v1` [#623](https://github.com/ethyca/fides/issues/623)
* Allow AWS credentials to be passed to `generate system` via the API [#645](https://github.com/ethyca/fides/pull/645)
* Update the export of a datamap to load resources from the server instead of a manifest directory [#662](https://github.com/ethyca/fides/pull/662)
* Refactor `export` to remove CLI specific uses from the core modules and load resources[#725](https://github.com/ethyca/fides/pull/725)
* Bump version of FastAPI in `setup.py` to 0.77.1 to match `optional-requirements.txt` [#734](https://github.com/ethyca/fides/pull/734)
* Docker images are now only built and pushed on tags to match when released to pypi [#740](https://github.com/ethyca/fides/pull/740)
* Okta resource scanning and generation now works with systems instead of datasets [#751](https://github.com/ethyca/fides/pull/751)

### Developer Experience

* Replaced `make` with `nox` [#547](https://github.com/ethyca/fides/pull/547)
* Removed usage of `fideslang` module in favor of new [external package](https://github.com/ethyca/fideslang) shared across projects [#619](https://github.com/ethyca/fides/issues/619)
* Added a UI service to the docker-compose deployment [#757](<https://github.com/ethyca/fides/pull/757>)
* `TestClient` defined in and shared across test modules via `conftest.py` [#759](https://github.com/ethyca/fides/pull/759)

### Docs

* Replaced all references to `make` with `nox` [#547](https://github.com/ethyca/fides/pull/547)
* Removed config/schemas page [#613](https://github.com/ethyca/fides/issues/613)
* Dataset UI and config wizard docs added (<https://github.com/ethyca/fides/pull/697>)
* The fides README now walks through generating a datamap [#746](https://github.com/ethyca/fides/pull/746)

### Fixed

* Updated `fideslog` to v1.1.5, resolving an issue where some exceptions thrown by the SDK were not handled as expected [#609](https://github.com/ethyca/fides/issues/609)
* Updated the webserver so that it won't fail if the database is inaccessible [#649](https://github.com/ethyca/fides/pull/649)
* Updated external tests to handle complex characters [#661](https://github.com/ethyca/fides/pull/661)
* Evaluations now properly merge the default taxonomy into the user-defined taxonomy [#684](https://github.com/ethyca/fides/pull/684)
* The CLI can now be run without installing the webserver components [#715](https://github.com/ethyca/fides/pull/715)

## [1.6.1](https://github.com/ethyca/fides/compare/1.6.0...1.6.1) - 2022-06-15

### Docs

* Updated `Release Steps`

### Fixed

* Resolved a failure with populating applicable data subject rights to a data map
* Handle invalid characters when generating a `fides_key` [#761](https://github.com/ethyca/fides/pull/761)

## [1.6.0](https://github.com/ethyca/fides/compare/1.5.3...1.6.0) - 2022-05-02

### Added

* CHANGELOG.md file
* On API server startup, in-use config values are logged at the DEBUG level
* Send a usage analytics event upon execution of the `fidesctl init` command

### Developer Experience

* added isort as a CI check
* Include `tests/` in all static code checks (e.g. `mypy`, `pylint`)

### Changed

* Published Docker image does a clean install of Fidesctl
* `with_analytics` is now a decorator

### Fixed

* Third-Country formatting on Data Map
* Potential Duplication on Data Map
* Exceptions are no longer raised when sending `AnalyticsEvent`s on Windows
* Running `fidesctl init` now generates a `server_host` and `server_protocol`
  rather than `server_url`
