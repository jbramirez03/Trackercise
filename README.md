<h1 align="center">Trackercise</h1>

[linkedin]: https://www.linkedin.com/in/jason-barrera-ramirez-b2a473204/

![license-badge](https://img.shields.io/badge/License-MIT-blueviolet)
![followers](https://img.shields.io/github/followers/jbramirez03?style=social)

[mit]: https://choosealicense.com/licenses/mit/

## Summary

This is an application that allows a user to keep track of their workouts and their exercises for each workout. Through the use of mongodb and mongoose in javascript the data from a user is stored and updated once a new workout/exercise is added. Routing using express handles calls to the database in the backend in order to render the charts that contain a users data.

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Challenges](#challenges)
- [Technologies](#technologies)
- [Npm Packages](#npm-packages)
- [Future development](#future-development)
- [How to contribute](#how-to-contribute)
- [Questions](#questions)
- [Link](#link)

## Usage

Upon your first visit to the page, a form is rendered with an option to add a new workout. Once you start a new workout you can then add exercises to your workout through different forms. Once you have completed adding exercises you can then redirect to the dashboard and a chart containing data from your workouts is displayed.

## Functionality

![Fitness Tracker](https://user-images.githubusercontent.com/82244776/137419150-40a5cc69-f8ef-44fe-92ef-8db6ef506838.gif)

## Credits

Jason Barrera-Ramirez<br><br>
[<img align="left" width="28px" alt="LinkedIn" src="https://user-images.githubusercontent.com/82244776/128110957-497edff3-59dc-41d6-89bc-be7570e441fe.png" />][linkedin]<br><br>

## License

This Project is covered by the [MIT] license

## Challenges

The main challenge for this project was creating a schema model for the workout collection through mongoose, and figuring out all the data types for each field in the model. The challenge following closely behind was using an aggregation pipeling in order to add a field for totalDuration that added up all of a users exercises duration into a single field.

## Technologies

[<img align="left" width="26px" alt="javascript" src="https://user-images.githubusercontent.com/82244776/132110201-fd810d53-561a-490f-a690-1735d4479281.png">][javascript]
[<img align="left" width="26px" alt="CSS" src="https://user-images.githubusercontent.com/82244776/132110242-a351f140-471c-4447-a513-91c2b8a166d7.png">][css]
[<img align="left" width="26px" alt="html" src="https://user-images.githubusercontent.com/82244776/132110258-65db95d8-f35b-4a2d-a091-8051a6b6f4f2.png">][html]
[<img align="left" width="26px" alt="nodejs" src="https://user-images.githubusercontent.com/82244776/134751947-5908a635-9d69-4dc7-8c4c-aeb9ea0fce66.png">][node]
[<img align="left" width="28px" alt="mysql" src="https://user-images.githubusercontent.com/82244776/137418230-eaf9e0c6-8be9-49e3-93c8-2246d4e7db42.png">][mongodb]
[<img align="left" width="26px" alt="heroku" src="https://user-images.githubusercontent.com/82244776/132110346-720c197f-d193-4c6f-b84d-e9dc0420bba9.png">][heroku]
[<img align="left" width="26px" alt="github" src="https://user-images.githubusercontent.com/82244776/132110367-f5e3b9f5-b3cb-49c1-be7c-aded0df1b8c1.png">][github]<br><br>

[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[node]: https://nodejs.org/en/docs/
[mongodb]: https://www.mongodb.com/
[heroku]: https://devcenter.heroku.com/categories/reference
[github]: https://docs.github.com/en

## Npm Packages

- mongoose
- express
- morgan

## Features

The main feature for this project is the ability to store a users information in a mongodb database in order to create an efficient web application that can be scaled up if needed.

## Future Development

A definite path this project is headed is the ability to incorporate more routes and the ability to have a login page in order to be able to switch between users workouts.

## How to Contribute

Fork the Repo and make a pull request for code to be reviewed and considered for merge to main branch.

## Questions

If there are any questions about the project get in contact with me at my [Email](mailto:jason1287712@gmail.com)

## Link

This is the link for the live website hosted on [heroku](https://afternoon-reef-67441.herokuapp.com/?id=6168d82e1ab2aa0016588053)
