Source Code for the Front End of Detect Me AI

Quick Facts:
1. Currently deployed on heroku: https://detect-me.herokuapp.com
2. Connects with the respective backend server (https://rocky-escarpment-90953.herokuapp.com) and database, which are both currently deployed using heroku. Server is also in my detect-me-server repo.
3. Might be CPU heavy because computer vision is intense (PSSSTTT...actually because of the particles in the bgd...)

How to run locally (which will still connect to the server on heroku):
1. git clone the repo
2. npm install
3. npm start

Recent updates:
1. Much more responsive now that I'm constantly pinging the website AND server
2. Particles now render and interact smoothly

For the future:
1. Nice banner
2. Alerts for login/detections/registrations
3. Make the eye more interactive (via more database logging)
4. Maybe do something about that CPU intensity
5. Change image input background
6. Tilt is currently turned off, need to fix/change.
7. Find a more compatible smooth scrolling feature.
