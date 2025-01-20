# Rebtel
A repo containing my take-home, automated test assignment.

For this task I've choosen Cypress as my main testing framework.
Reports will be generated with Mochawesome.

# Setup
1. Clone the repo in a terminal of you chooseing, run; 
    git clone https://github.com/oscarsaiges/Rebtel.git

2. Install dependecies, you can use npm, yarn or whatever your flavor is.
   First delete the package-lock.json file, it's only purpose it to serve the git-action build. 
   Then navigate to your newly cloaned repo and run;
    npm install
    
3. Run Cypress. 

   To open cypress, run;
   npx cypress open

   To run cypress in headless mode, run; 
   npm cypress run

# Custom Commands
  Please see e2e.ts for documentation.

# Reports
  Visite https://oscarsaiges.github.io/Rebtel/ 
  to se the latest reports from the CI/CD build.
  A new report vill be generated after each pull request or push.

  (One issue remians. When pushing to main the index.html get removed from gh-pages branch. 
   To view test-report's in browser: add the index.html file, found in root, to the gh-pages branch and let it build. Visit report page once before your first commit.)

Happy testing!
