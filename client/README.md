This folder contains all the files for the front end (CRA). To run the project on heroku, use the following instructions:

# In the Heroku dashboard:
## Step 1) - Connect github repository to Heroku
Inside the Deploy tab, scroll to Deployment method and connect your Github account. find the repo and hit connect. heroku should be authorized as an Oauth app in your github now.

If you cannot find the repo: Either your github has not authorized Heroku or you did not create this repo and need to make sure you have admin access to it. If this is not possible, invite an admin of the repo to your heroku app by going to Access tab in Heroku Dashboard and adding the admin as a collaborator. The admin then logs into heroku and completes Step 1 here. Afterwards you can finish the following steps.

## Step 2) - Set Heroku Config Var PROJECT_PATH to your server folder
Inside the Settings tab, set a config var to tell Heroku the path to find the server code you want deployed.

Example: lets say your repo name is MyRepo and it has 2 sub-folders. back-end contains a Node.js server and front-end contains a React app. Your github directory looks like this:

- MyRepo/front-end/package.json
- MyRepo/back-end/package.json

Then you should set your config var to PROJECT_PATH in the left box and back-end in the right box.

## Step 3) - Set a Heroku Buildpack that will deploy the PROJECT_PATH folder
Again inside the Settings tab, you need to add a Buildpack that will tell heroku to look for your folder instead of deploying the repo root. There should already be 1 buildpack there to tell heroku what type of server it is (javascript/node.js, python/django, etc...).

Enter this url to add buildpack https://github.com/timanovsky/subdir-heroku-buildpack.git and make sure this is at the top of the buildpack chain (drag the lines on the left to make it above any other buildpacks you have added.

## Step 4) - Enable auto deploy
Inside the Deploy tab, scroll to Automatic Deploys and click the black button to enable automatic deploys

Auto Deploy complete! Now check the build logs and make sure you don't have any errors
