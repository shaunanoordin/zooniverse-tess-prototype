# Zooniverse TESS Project Prototype

An experimental Custom Front End for the Zooniverse TESS project, using
components from the new [Zooniverse Front-End Monorepo](https://github.com/zooniverse/front-end-monorepo).

## Front-End Monorepo Notes

Currently, all the Panoptes `front-end-monorepo` dependencies are installed
locally, so we need to prepare our local monorepo accordingly.

- Clone the `front-end-monorepo`, into the same directory level as this TESS
  repo. (i.e. its relative path is `../front-end-monorepo`)
- Set up the packages.
  - e.g. go to `../front-end-monorepo/packages/lib-classifier` and run
    `lerna bootstrap` (assuming you have Lerna installed; see the monorepo's
    Readme for more details.)
- Build the packages where necessary.
  - e.g. go to `../front-end-monorepo/packages/lib-classifier` and run
    `npm run build` so it generates the `dist/main.js` file.

**Troubleshooting npm install:**

Issue: When running `npm install` for the first time, you might _still_
encounter a problem such as
`npm ERR! enoent ENOENT: no such file or directory, rename '(dir_1)' -> '(dir_2)'`,
where either dir_1 points this repo and dir_2 points to the local
`front-end-monorepo`.

Analysis: it appears that npm can't install local dependencies, or perhaps
scoped local dependencies (i.e. `"@zooniverse/lib-classifier"`) unless the
`/node_modules` directory _has already been created._ This may have something
to do with the local dependencies in the node_modules folder being symlinks to
the repo instead of copies of the repo contents.

Solution:
- Remove the local monorepo dependencies from `package.json`
- Run `npm install`
- Add the local monorepo dependencies again.
- Run `npm install` again.

Noted on OSX with `npm` v5.5.1.

**Using Panoptes.JS:**

```
//package.json dependency:
"@zooniverse/classifier": "../front-end-monorepo/packages/lib-classifier",

//Component
import { panoptes } from '@zooniverse/panoptes-js';
```

**Preparing the Classifier:**

```
//package.json dependencies:
"@zooniverse/panoptes-js": "../front-end-monorepo/packages/lib-panoptes-js",
"babel-polyfill": "~6.26.0",

//Entry point (e.g. src/index.js)
import 'babel-polyfill';

//Component
import Classifier from '@zooniverse/classifier';
```

The `babel-polyfill` requirement is require to fix an
`Uncaught ReferenceError: regeneratorRuntime is not defined` error.

**TODO**
- It's currently difficult to override/extend styles of imported components,
  e.g. the Classifier, due to the randomised names. Investigate how this can be
  solved at the Monorepo.

## Usage

__Install the dependencies:__

`npm install`

__Test:__

`npm run test`

__Development mode with livereload:__

`npm run start`

__When you are done, create a production-ready version of the JS bundle:__

`npm run build`

## External Dependencies

Core:
- [Zooniverse Education API](https://github.com/zooniverse/education-api)
  service - this backend server is the backbone that manages classrooms,
  assignments, user roles, etc.
- [Panoptes App setup](https://panoptes.zooniverse.org/) - standard requirement
  for allowing Zooniverse users to login.

## Credits

This project was built on top of [Zooniverse Reduxify](https://github.com/zooniverse/zoo-reduxify),
which in turn was developed from the original [React Starterify](https://github.com/Granze/react-starterify)
by [Granze](https://github.com/Granze) and used under the [MIT License](http://opensource.org/licenses/MIT).

## License

Copyright 2018 Zooniverse

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
