/*   STEP 1   */
export const leagueID = "916746166153408512"; // your league ID
export const leagueName = "D&B Dynasty"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
 <p>Fantasy football leagues provide a unique platform where individuals come together to engage in a shared passion for the sport. While the primary focus is often on the game itself, these leagues can also serve a greater purpose by raising awareness and promoting inclusivity. One important cause that fantasy football leagues can champion is the prevention of bullying, particularly targeting children with red hair, often referred to as "ginger kids."</p>
 <p>By leveraging the camaraderie and competitive spirit that fantasy football fosters, leagues can actively raise awareness about the issue of bullying and encourage a more inclusive and accepting society. League members can organize fundraising events or donate a portion of their league fees to support anti-bullying initiatives. Additionally, they can leverage social media platforms and online forums to spread awareness, share personal stories, and engage in conversations that challenge stereotypes and prejudices against ginger children. Through these collective efforts, fantasy football leagues can become a powerful force in raising awareness and creating a supportive environment for all individuals, regardless of their physical appearance.</p>
 <p>Furthermore, fantasy football leagues can act as a catalyst for education and understanding. League members can participate in workshops or invite guest speakers to discuss the harmful effects of bullying and the specific challenges faced by ginger kids. By fostering empathy and promoting discussions around inclusivity, leagues can help change societal attitudes and ensure that no child feels marginalized or discriminated against due to their physical attributes. Ultimately, fantasy football leagues can serve as a vehicle for positive change, bringing attention to the issue of bullying and fostering a culture of acceptance and respect within their communities.</p>
 `;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
     "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Aiden",
      "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "347 Don Shula Dr", // (optional)
      "bio": "I support the Ginger awareness and my winning will go towards the advancement of Gingers.",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jakejen4", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
      "favoritePlayer": 7526, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Adversity brings opportunity! I wish it were colder",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Teddy",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Fishing", // (optional)
    "bio": "2 balls, 1 shoulder, 0 fucks given.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "Physical Therapy", // Can be anything (usually your rival's name)
       link: NULL, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4017, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Burn it all.",
    "tradingScale": 2, // 1 - 10
    "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Jakejen4",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Cuba", // (optional)
    "bio": "I was scammed last year I’m coming to win it all this year.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "Aiden", // Can be anything (usually your rival's name)
       link: 1, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 7591, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Unlike my women, I want my players old.",
    "tradingScale": 4, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
 {
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Camden",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Guangdong", // (optional)
    "bio": "Karl Marx was right.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "Cole", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1234, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Communism.",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
 {
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Dom",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Orlando, FL", // (optional)
    "bio": "Buffalo Bills 2024 SB Champions.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "Players over the age of 25", // Can be anything (usually your rival's name)
       link: NULL, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "2024 is the year.",
    "tradingScale": 6, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Cole",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Bodybuilding Contest", // (optional)
    "bio": "idk",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "Camden", // Can be anything (usually your rival's name)
       link: 2, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 9997, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Give it all for Herbert.",
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Email", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
 {
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Vincent",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "The casino", // (optional)
    "bio": "idk",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "Camden", // Can be anything (usually your rival's name)
       link: 2, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 5113, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Bench players are overrated. Trade them away when drunk.",
    "tradingScale": 9, // 1 - 10
    "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
 {
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "John",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "nowhere", // (optional)
    "bio": "There was no check.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "Camden", // Can be anything (usually your rival's name)
       link: 2, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 5967, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "This isn't ovaaaa.",
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Email", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
 {
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Wayne",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "7/11", // (optional)
    "bio": "Need the eagles to carry me.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "k", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "Gabe", // Can be anything (usually your rival's name)
       link: 11, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 8183, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "I have no fucking idea.",
    "tradingScale": 1, // 1 - 10
    "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
 {
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Joey",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Bovada", // (optional)
    "bio": "match?",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "Gavin", // Can be anything (usually your rival's name)
       link: 12, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 8210, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "I want to stink.",
    "tradingScale": 9, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
 {
    "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Gabe",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Tijuana, Mexico", // (optional)
    "bio": "currently under construction",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "John", // Can be anything (usually your rival's name)
       link: 8, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 7547, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Idek man",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Email", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
 {
    "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Gavin",
    "tookOver": NULL, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Miami, FL", // (optional)
    "bio": "idk",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": NULL, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
       name: "Joey", // Can be anything (usually your rival's name)
       link: 10, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "...",
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
