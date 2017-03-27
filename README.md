# [WIP] React Rails Starter

This is a quick thing I extracted from another project to make it easier for myself to start an new react-rails app.

This project comes ready with RSpec, mocha, chai and enzyme as test libraries.

## Setting up

1. clone this project

2. Install dependencies
  * `bundle install`
  * `rails yarn:install`

3. Generate a new secret and replace the existing one in __config/secrets.yml__
   * `rails secret`

4. Change your database names in __config/database.yml__

## Getting ready for React

* Add a route, controller and view partial for your React entry point
* include the javascript pack

## Running the server

* bin/server

The project should run at http://localhost:5000
