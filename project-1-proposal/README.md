What Type of RPG CLASS ARE YOU APP


TRELLO BOARD: https://trello.com/b/ONtVXgC9/project-1

I am planning to build an app game that will determine what type of rpg class the user is based on their decisions. Their decisions will be based on a series of images shown on the site. A user will be given a choice: YES or NO.

Once the user chooses an answer, they will be shown another image and given another question to answer,
After, the entire image list has been played, the user will be given an rpg class based on their results. The classes chosen can be: knight, thief, wizard. As a stretch, more classes will be added: cleric, ninja, necromancer, peasant. 

My stretch goal is…. after the user is chosen a class they are given a weapon. (Sword, spear, dagger etc…), and instead of images, they will be shown a few youtube videos and will be asked a question based on it. Their decision will affect what type of weapon they will receive.

- Notes based on conversation: 

I'll be using the API from traitify to add the decision-making process. Cookies and Sessions are still up-in-the-air, ideally I'd like to have the user return to the first place they left off, so I'll try to add cookies of some sort. 

Reference data will be used to store info, they are referenced through different documents, in this case the Traitify API.

Schemas included: 

User - loginName: String, password: String

RPG Class - from Traitify API


