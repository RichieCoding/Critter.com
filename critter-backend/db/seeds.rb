Thought.destroy_all
User.destroy_all




cat = User.create(name: "Misu", species: "Cat", diseases: "Fleas, Eczema", location: "Roberto's Deli Grocery", image: "https://cdn2-www.cattime.com/assets/uploads/2016/09/Bodega-Cats-Lays-Chips.png")
rat = User.create(name: "Rat King", species: "Rat", diseases: "Black Plague", location: "14th Street A/C/E Train", image: "https://i.pinimg.com/originals/db/55/82/db5582b3de04879676e707fd66cee242.jpg")
racoon = User.create(name: "Robber", species: "Racoon", diseases: "None", location: "Your Backyard Trashbin", image: "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/r/raccoon_thumb.ngsversion.1485815402351.adapt.1900.1.JPG")
pigeon = User.create(name: "PegLeg", species: "Pigeon", diseases: "Scoliosis", location: "Grand Central Station", image: "https://live.staticflickr.com/1360/1388219411_0ac97a9561_b.jpg" )

turtle = User.create(name: "Tortuga", species: "Turtle", diseases: "Eternal Life", location: "Yoga Class", image: "https://www.nycgovparks.org/pagefiles/88/urban-wildlife-morningside-red-ear-slider-lg.jpg")
thugPigeon = User.create(name: "OnlyGodCanJudgeMe", species: "Pigeon", diseases: "Loneliness", location: "Deez Streetz", image: "https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/2018/09/11/38208982Fly-1.jpg")
dolphin = User.create(name: "HudsonRiverDolphin", species: "Dolphin", diseases: "Being Beautiful", location: "Hudson River", image: "https://cdn.cnn.com/cnnnext/dam/assets/180828121744-dolphin-stock-photo-2-full-169.jpg")


pigeon2 = User.create(name: "Heather", species: "Pigeon", diseases: "Eye Infection", location: "DUMBO", image: "https://www.allaboutbirds.org/guide/assets/photo/66031271-480px.jpg")
cat2 = User.create(name: "Kitty123", species: "Cat", diseases: "None", location: "Smoke N' Clouds Smoke Shop And Grocery", image: "https://i1.sndcdn.com/artworks-000438128373-dueu2o-t500x500.jpg")
rat2 = User.create(name: "StuartNotLittle", species: "Rat", diseases: "Scabies", location: "Penn Station", image: "https://bpca.org.uk/write/MediaUploads/Pages/A-Z/Brown%20Rat/Brown_rat_2.jpg")


thought1 = Thought.create(user: racoon, content: "I just found some apple cores!")
thought2 = Thought.create(user: racoon, content: "Just got my apple cores taken from me, ya'll some haters")
thought3 = Thought.create(user: pigeon, content: "I'm beyond full right now ")

thought4 = Thought.create(user: thugPigeon, content: "I need to get these brudcrumbs...")


Reply.create(user: pigeon, thought: thought1, content: "Dumbass I'm bout to take that")
Reply.create(user: pigeon, thought: thought1, content: "I know where you're at!")
Reply.create(user:racoon, thought: thought3, content: "Watch your back")
Reply.create(user: pigeon, thought: thought4, content: 'Maybe if you left the nest ya damn rat with wings ')

cat.thoughts.create(content: "Please stop sharing the cats trailer. cats only sing like that when they are in extreme distress")
thought4 = Thought.create(user: cat, content: "I was sleeping in the drinks aisle and saw someone steal an Arizona Green Tea, should I say something?")
thought5 = Thought.create(user: rat, content: "Getting tired of all these other rats attached to my tail")
thought7 = Thought.create(user: cat2, content: "strangest thing i ever did was think you gave a crap about me...😔💔💯")
thought8 = Thought.create(user: rat2, content: "I odn't fight for crumbs, crumbs fight for me")
thought10 = Thought.create(user: pigeon2, content: "Live, Laugh, Love")
thought11 = Thought.create(user: rat, content: "Love the smell of warm garbage juice in the morning!")
thought9 = Thought.create(user: cat, content: "We're throwing out a bunch of donuts at the end of the day if any of you want to take some home")
thought6 = Thought.create(user: pigeon2, content: "Real eyes realize real lies...")

reply3 = Reply.create(user:racoon, thought: thought3, content: "Watch your back")
reply4 = Reply.create(user: pigeon, thought: thought6, content: "Damn this is so deep...are you single?")
reply5 = Reply.create(user: cat, thought: thought6, content: "100 emoji!!")
reply6 = Reply.create(user: cat2, thought: thought4, content: "Why didn't you scratch them? YOu suck at your job lmao")
reply7 = Reply.create(user: rat, thought: thought9, content: "What's the easiest way there?")
reply7 = Reply.create(user: rat2, thought: thought9, content: "I've been to her bodega before, there's a side emtramce behind the trash cans")
reply8 = Reply.create(user: pigeon, thought: thought10, content: "wow I love this sentiment. DM me")
reply9 = Reply.create(user: cat, thought: thought7, content: "Can you please stop posting about our breakup on the timeline...it's embarasing")

turtle.thoughts.create(content: "there's something so relaxing about sitting on a rock in central park, watching people yell at each other")
thugPigeon.thoughts.create(content: "if you’re arguing loudly on your phone in public please put it on speaker. i need to hear both sides of the story to know whose side i’m on.")
dolphin.thoughts.create(content: "day 632. no one knows im here!")
thought30 = pigeon.thoughts.create(content: "Real Recognize Real And You Looking Like A Stranger.")
rat2.thoughts.create(content: "what if we kissed in the fridge beside the broccoli? ahaha jk... unless?")
turtle.thoughts.create(content: "every day i think about the home i used to live at and i'm so happy they set me free in central park")
catthought = cat2.thoughts.create(content: "I hate andrew lloyd webber. What the hell is jellicle? ???")
th = pigeon2.thoughts.create(content: "Y’all using FaceApp but won’t get off this app and face reality!")
racoon.thoughts.create(content: "Haven't been online for a while, i had to lay low due to an unfortunate incident with a dog")

Reply.create(user: racoon, thought: thought30, content: "fake deep lmao")
Reply.create(user: cat, thought: catthought, content: "idk but it pisses me off")
Reply.create(user: turtle, thought: catthought, content: "don't knock it till you try it!!! ")

Reply.create(user: cat, thought: catthought, content: "idk but i t pisses me off")


thoughttt = rat2.thoughts.create(content: "Pizza party at the Delancey St F train!")
Reply.create(user: rat, thought: thoughttt, content: "Stop telling everyone!!!")
Reply.create(user: pigeon, thought: thoughttt, content: "I'll try to make it!")
Reply.create(user: racoon, thought: thoughttt, content: "Wish I could be there!")
Reply.create(user: dolphin, thought: thoughttt, content: "i'll try to get a ride")
Reply.create(user: dolphin, thought: th, content: "ma'am this is a wendy's")


Quote.create(content: "I just found a wallet, time to buy some bananas")
Quote.create(content: "Lick...lick....lick")
Quote.create(content: "Remember when you were somebody")
Quote.create(content: "Seriously what smells better than the sewers")
Quote.create(content: "My hair is faboulous!")
Quote.create(content: "How many cats does it take to screw in a lightbulb....")