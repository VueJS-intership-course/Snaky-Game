You need to implement app about time table for public transport in Netherlands. Public API with endpoints is available at https://github.com/koch-t/KV78Turbo-OVAPI/wiki/
Specifically you should visualize table with journeys, which are available from https://github.com/koch-t/KV78Turbo-OVAPI/wiki/Journey, and after selecting one of the journeys you should visualize it on Openlayers map (https://openlayers.org/).

Also selected journey should be stored in the URL and based on this URL if journey passed in it should be selected in the table.

Layout for this page should be following:

```
  | Table with journies|  |                   |
  |  Jouurny 1 	    |	  |                   |
  |  Jouurny 2 	    |     |   Openalyers MAP  |
  | * Jouurny 3    |     |                   |
  |  Jouurny 4 	    |     |                   |
```
If no journey selected you should show text "Please select journey" in place of the map

For API requests you should use axios library

Only one journey should be displayed on map.

User map interaction:
After displaying journey on the map, user should be able to click on the stop and following information should appear: 
 Name of the stop, is stop PASSED, DRIVING or PLANNED. Is wheelchair accessible. 

 Bonus task colorize PASSED stops in different color.

You should implement it without using any store like Vuex or Pinia

