# City Explorer

**Author**: Oliver Speir 
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
- This website will allow the user to enter a city and receive an image of the city 

## Getting Started
- This app will be deployed live on netlify 
- If they want to make a local version of it they will need to install node.js, npm, react and axios then clone the repository. They will then need to create a location IQ account and edit their AQI key into the code, they then will need to create a .env file that is in the same location as the gitignore in the repository. They will need to make a REACT_APP_LOCATIONIQ_KEY variable and make that variable equal their api key. 

## Architecture
- This App uses axios to make api calls to LOCATIONIQ server based on the user input city 
- The app then gathers the long and lat of that city and makes another request to the LOCATIONIQ server for an image of a map
- The app then displays that image
## Change Log
- Initial Commit 


## Credit and Collaborations
- WRRC diagram made with Ricardo Soto 

## WRRC diagram :
- https://i.imgur.com/ERizwRa.png

### FEATURE TIME ESTIMATES: 

#### Name of feature: ________________________________

#### Estimate of time needed to complete: _____

#### Start time: _____

#### Finish time: _____

#### Actual time needed to complete: _____
