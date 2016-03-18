# DOM Events & jQuery
In the following exercises you will play with five of the most common DOM `events` in jQuery:
- ready
- submit
- change
- click
- keypress

You can find a full list of `event` related methods in jQuery here: http://api.jquery.com/category/events/

## Exercises

**Instructions:**  
* For each exercise, start by opening the `index.html` file for that challenge in your browser. 
* To solve the challenge, you'll need to change each `base.js` file.
* Make sure to open your Chrome Developer Console so that you can check for bugs!
* SOLUTIONS: Solutions are in the `solutions` branch.

###1. ready
- **Challenge**: Can you get the page to say "Go!" (without touching the html)?

###2. submit
- **Challenge**: Can you stop the forms from submitting?
    + That's weird. Why does one button reload the same page and the other redirect to youtube?
    + Hmm... What is the "?" doing in the URL? How did it get there? Try removing it.
- Bonus: Instead of redirecting to youtube, let's embed the video in our page instead!
    +  When the user clicks "submit", dynamically insert the embed code into the page (on youtube, click "share" under the video, then click "embed" and copy the html). HINT: The embed code belongs in your javascript, not your html!

###3. change
- **Challenge**: Some simple addition! Can you get the total to update whenever you update the numbers?
- Bonus: Add a "reset" button that clears all the inputs.

###4. click
- **Challenge**: Can you create a list of all the phrases that you click?
- Stretch: In addition to listing the phrase I clicked, can you include a timestamp?

###5. keypress
- **Challenge**: Stop watch. When the user hits spacebar, record their "start" time. When they  hit it again, record their "end" time. Then, calculate the total time, and put it on the page.

###Wrap it up
- Recommended: Can you link all the pages together? Create a navbar at the top of every page, with links to all the other pages.
