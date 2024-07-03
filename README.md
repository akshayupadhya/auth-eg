This Project is written using NX monorepo
so Frontend and backend are both in a same repo


command to start Mongo DB: docker run -d -p 27017:27017 --name=auth-eg  mongo:latest
command to start Backend: npx nx serve backend
command to start Frontend: npx nx serve frontend

Below are the area of imporvements
1. there could have been some styling in the UI
2. could have added a docker script to the start the whole project instead of 3 commands
3. considering this is a monorepo, could have made the code more modular