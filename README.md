# Detect Me AI

Detect Me AI is a computer vision web application that recognizes human facial features from uploaded images. Implemented in React.js, this web app incorporates a simple user registration and sign-in functionality as a surface level access restriction. More features to come!

## Quick Facts

1. Currently deployed on heroku: https://detect-me.herokuapp.com
2. Connects with the respective backend server (https://rocky-escarpment-90953.herokuapp.com) and database, which are both currently deployed using heroku.
Server is also in my detect-me-server repo.
3. Might be CPU heavy because computer vision is intense (PSSSTTT...actually because of the particles in the bgd...)

## Local Deployment (will need Internet to connect with the online server)

1. git clone this repo
2. `npm install`
3. `npm start`

## Quick Facts

Recent Updates:
```
1. Website loading much more responsive now that I have an automated pinging mechanism.
2. Particles render and interact smoothly after restructuring the rendering.
3. There are sub-optimal alerts and other minor tweaks here and there.
```

For the future:
```
1. Nice banner
2. Better alerts for login/detections/registrations (don't be lazy)
3. Make the eye more interactive (via more database logging perhaps)
4. Maybe do something about that CPU intensity
5. Tilt is currently turned off, need to fix/change.
6. Find a more compatible smooth scrolling feature.
7. Remove duplicate code from signin and register, i.e. put into base 'form' class or something.
8. Fix bug where user inputs invalid url after valid (see TODO in App.js)
```

## Built With

* [React.js](https://reactjs.org) - The web framework used

## Contributing

Feel free to send pull requests!

## Versioning

[SemVer](http://semver.org/) for versioning.

## Authors

* **Edward Hu** - *All Development* - [ehu23](https://github.com/ehu23)

