Thought.destroy_all
User.destroy_all


racoon = User.create(name: "Robber", species: "Racoon", diseases: "None", location: "Your Backyard Trashbin", image: "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/r/raccoon_thumb.ngsversion.1485815402351.adapt.1900.1.JPG")
pigeon = User.create(name: "PegLeg", species: "Pigeon", diseases: "Scoliosis", location: "Grand Central Station", image: "https://live.staticflickr.com/1360/1388219411_0ac97a9561_b.jpg" )

thought1 = Thought.create(user: racoon, content: "I just found some apple cores!")
thought2 = Thought.create(user: racoon, content: "Just got my apple cores taken from me, ya'll some haters")


reply1 = Reply.create(user: pigeon, thought: thought1, content: "Dumbass I'm bout to take that")