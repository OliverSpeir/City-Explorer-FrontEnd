# City Explorer
- **Author**: Oliver Speir 
- **Version**: 1.0.2 

## Overview
- This website will allow the user to enter a city and receive an image of the city 

## Getting Started
- This app will be deployed live on netlify 
- If they want to make a local version of it they will need to install node.js, npm, react and axios then clone the repository. They will then need to create a location IQ account and edit their AQI key into the code, they then will need to create a .env file that is in the same location as the gitignore in the repository. They will need to make a REACT_APP_LOCATIONIQ_API_KEY variable and make that variable equal their api key. 

## Architecture
- This App uses axios to make api calls to LOCATIONIQ server based on the user input city 
- The app then gathers the long and lat of that city and makes another request to the LOCATIONIQ server for an image of a map
- The app then displays that image
## Change Log
- 1.0.0 Initial Commit 
- 1.0.2 Added Search form that desplays long lat and map along with minor CSS

## Credit and Collaborations
- WRRC diagram made with Ricardo Soto 

## WRRC diagram :
- https://i.imgur.com/ERizwRa.png
- from lab 8: 
- https://i.imgur.com/dmlwdNT.png

