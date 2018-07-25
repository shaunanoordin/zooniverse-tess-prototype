# Zooniverse TESS Project Prototype

An experimental Custom Front End for the Zooniverse TESS project, using
components from the new [Zooniverse Front-End Monorepo](https://github.com/zooniverse/front-end-monorepo).

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
- [Zooniverse Education API](https://github.com/zooniverse/education-api) service - this backend server is the backbone that manages classrooms, assignments, user roles, etc.
- [Panoptes App setup](https://panoptes.zooniverse.org/) - standard requirement for allowing Zooniverse users to login.

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
