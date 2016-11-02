# WiHL-Blog

WiHL-Blog is an experiment in creating a Rails/React monolith, using the "API-only" version of Rails (triggered by passing the `--api` flag into the `rails new` command), and adding back only those asset and view-related dependencies which seem necessary to make React work.

It uses a `PostgreSQL` data store, `Rails >= 5.0.0.1` using `Ruby 2.3.1` (primarily for the API back-end), and `React ^15.0.2`, `babel` and `webpack` (for the front-end.)

1. `$ git clone https://github.com/enthusiastick/wihl-blog`
2. `$ bundle install`
3. `$ rake db:create`
4. `$ npm install`
5. `$ rails server` && `$ npm start`
