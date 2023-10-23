You have to design and develope an app that will help people to create and plan events.
 The event planner application aims to provide users with a platform to plan and manage events efficiently. 
Users will be able to create, organize, and track various aspects of their events.

Technology Stack:

Front-end: Vue.js framework with Bootstrap 5 for responsive UI design, moment/luxon js, highcharts, SASS, Pinia.
Back-end: Firebase for data storage, authentication, and real-time updates.

Key Features:

User Registration and Authentication:
Allow users to register an account and authenticate using email/password or social media accounts (e.g., Google, Facebook). When user is registering please ask him to set it its country.
Implement Firebase Authentication for secure user management.
User roles should be divided on there levels, administrators, regular users and None registered users
Every user should has it own profile page where it can mange its own information password, country,

Event Creation and Management:

Enable administrators to create new events with details such as event name, ticket price, date, time, location (mainly you should know the country where this event will be placed,
you can store a long/lat of location point also is important to know country timezone of the event), and description of the event.
For some events can be setted available seats. And after this count of seats has been reached no more attendences can book it seat.
[OPTIONALLY]Provide the ability to invite guests by sending email invitations. (optional sending e-mail with serverless service functions)
Allow administrators to manage guest lists, track RSVPs, and send event updates. ([OPTIONALLY event updates] sending event updates are part of email notification as described above)
Only registered users can book a seat.
Allow administrators to set a budget for each event and track expenses. Like rent place, food, logistics etc.
Provide visualizations, such as charts and graphs, to display budget breakdowns and spending trends using Highcharts.
Create a overview page that show graphics on world map how many events are placed in different country.

Non registered users can preview and search for events without option to book a seat. (Book now button should be replaced with login now button)
Filtering events can ve perform by following criterias
- event name
- date (user should define start and end date)
- location
- available tickets (available/sold)

Every event should have its own page where event details should be shown. (you can the addres of the event on openstreetmap)
When you showing events from different countries please show the event date based on user location setting setted on registration. 


Event Calendar and Scheduling:
For each user, implement a page that shows its past and upcoming events where he can see overview and their respective dates. 
Real-time Updates:
Utilize Firebase Realtime Database or Firestore to provide real-time updates for event changes.

User Interface:

Design a user-friendly and responsive UI using Bootstrap and Vue.js.
Implement intuitive navigation, form validation, and error handling for a seamless user experience.
Deployment and Maintenance:

If you have any questions about the proposed event planner application, do not haste to ask.

