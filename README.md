# teams-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Structure of the Application
The App has the following structure:
	App.vue
		|-----Teams.vue
					|-----Team.vue
								|-----Projects.vue
								|-----TeamLead.vue
								|-----TeamMembers.vue

### Component Detail: App.vue
This component is the entry point of the application. This uses the Teams.vue component.
This component also includes the 'Vue' module and the 'bootstrap-vue' module. Then it defines
the 'BootstrapVue' to be used by the Vue. Then it imports the required .css file for the
bootstrap-vue to work.

### Component Detail: Teams.vue
This component is the basically the holder component of all the card components that I built.
It imports the 'Team' component, which is actually the card that holds all the other information.
This component fetches data from the web service application using the async/await technique and 'axios'
module and passes down the data to the 'Team' components. It uses an external module called 'lodash'
to sort all the data before storing.

### Component Detail: Team.vue
This component is the 'card' and holds all the other components. So, this imports the 'Projects',
'TeamLead', and 'TeamMembers' components from their respective .vue files. This component also 
uses the 'axios' external module to upload any information after it has been changed.

## Component Detail: TeamLead.vue
This is the first root-level component. This enables the user to select/change a team leader
from the list of all employees. This receives current team leader information and all employee
information as props and fires-up an event when a teamleader is selected. This component
uses the multiselect module of the vue: 'vue-multiselect'

### Component Detail: TeamMembers.vue
This also uses the vue-multiselect module from Vue. This component enables the user to select/deselect 
the users who are working in that particular team. Once the selection is done and the menu is closed, 
this fires an event that is handled by its parent component (Team.vue).

### Component Detail: Projects.vue
This component also uses the 'vue-multiselect' module. It lets the user choose/change the projects
any particular Team is working on. Once a change occurs, this sends an event to the parent component,
which is Team.vue.

### Modules Used
The modules that are used in this application are:
	axios 				To send and receive data from the web service application
	bootstrap-vue		To create the card and toast
	vue-multiselect		To create dropdown menus
	bootstrap 			This is required by bootstrap-vue
	vue 				This is required by bootstrap-vue
	lodash 				To sort the data received from web service app
	eslint 				To check for errors in the files
There were also some other modules that came with the default vue-cli application building process.

### Git
Git was used heavily as version control mechanism. This was used to try out and impliment different 
features.  