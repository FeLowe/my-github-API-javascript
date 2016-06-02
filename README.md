# Week 1: Javascript - Modern JS Apps Independent Project

#### Github User Lookup, 05/27/2016.

#### By Fernanda Lowe

## Description

Create a website where the user can enter a GitHub username into a form and submit it to see names and descriptions of that person's public repositories.

You will use the [GitHub API](https://developer.github.com/v3/) to retrieve this information. This API allows 5,000 requests per hour with an API key, but only 60 requests per hour *without one*. You are required to use your own unique key. GitHub refers to these keys as "Personal Access Tokens".

## Creating Personal Access Tokens

To create a token, visit [the Settings area](https://dl.dropboxusercontent.com/s/l772alr0kewlqeg/githubsettings.png?dl=0) of your GitHub account, select *Personal Access Tokens* from the sidebar, and hit [Generate New Token](https://dl.dropboxusercontent.com/s/qk0qcsy487yg7ci/githubgeneratetoken.png?dl=0).

You will be provided a [list of options](https://dl.dropboxusercontent.com/s/v7myu6qvoka0qtm/Screen%20Shot%202016-03-17%20at%208.11.06%20AM.png?dl=0).**Do not check any of them**. These options grant additional permissions such as writing or deleting repos, and accessing personal information. Select *Generate Token* with no options checked to receive a unique access token.

## Setup/Installation Requirements for:

1. **Building this project**
* Place your access token in an *.env* file at the top level of your directory. Include the *.env* file in your *.gitignore* file.
* Name your API key variable **exports.apiKey** in your *.env*, its body should look like this *exports.apiKey = “your key here”** file and store it in the root of the project directory. Use an API key to complete this project.
* For this project you need two JavaScript files: One to receive input from a form, and another to make an API call and display results.
* As you build your app, make sure to structure your project directory in a logical way, including 2 JavaScript files. One to receive input from a form, and another to make an API call and display results. One of of your files should be a module using **exports**.
* Include a README and a *.gitignore* file.

2. **cloning this project**
* clone repo
* create a *.env** following directions above
* npm install
* bower install
* install globals if needed (gulp and bower packages.)
* npm install gulp -g
* npm install bower -g
* gulp build
* gulp serve

## Known Bugs

None;

## Support and contact details

If while setting up your own project based on this one you run into any issues or have questions, ideas, concerns, or would like to make a contribution to the code, please contact me at fe_lowe@hotmail.com

## Technologies Used

javascript, JSON, gulp, bower, jQuery, Bootstrap, sass

### License

Application can be used under MIT and ISC licenses.

Copyright (c) 2016 Fernanda Lowe at Epicodus.
