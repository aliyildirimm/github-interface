# Github Repositories Search Bar
This creates a primitive GitHub Repositories page. Main purpose is to both display repositories and create responsive search bar with it. This project uses official GitHub API to fetch user related ONLY PUBLIC data. For some of the components, MUI V5 has been used for designing the web application.

# To try this project on your local please follow the steps:
1. Clone the project: git clone https://github.com/aliyildirimm/github-interface.git
2. Install the dependencies: npm install
3. Start the application: npm start.

# Future improvements
1. Currently project does not hold logged user in a local storage. It is just kept as state such that if you refresh it requests info from GitHub restApi with empty string :)
2. Styling should be kept in seperate files and hardcoded values should be minimized.
3. Storybook should be integrated.
4. Add documentation
