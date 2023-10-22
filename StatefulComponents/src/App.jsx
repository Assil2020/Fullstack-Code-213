import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Componements/Dashboard";

const App = () => {
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "Spongebob Squarepants",
      description:
        "A clumsy yellow sea sponge who lives in a furnished pineapple house with his pet snail Gary. He works as a fry cook at a fast-food restaurant called the Krusty Krab and diligently attends Mrs. Puff's Boating School. He is relentlessly optimistic and cheerful.",
      imageUrl:
        "https://static.wikia.nocookie.net/nickelodeon/images/7/79/SpongeBob-SquarePants.jpg",
    },
    {
      id: 2,
      name: "Patrick Star",
      description:
        "SpongeBob's best friend, a pink starfish who wears green flowered swim trunks. He lives under a rock and is known for being dimwitted and foolish. Despite his low intelligence, he is loyal and occasionally insightful.",
      imageUrl:
        "https://static.wikia.nocookie.net/nickelodeon/images/9/9e/SpongeBob-Patrick.jpg",
    },
    {
      id: 3,
      name: "Squidward Tentacles",
      description:
        "SpongeBob's next-door neighbor and coworker at the Krusty Krab, who lives in an Easter Island Head. He is an arrogant and pessimistic turquoise octopus who fancies himself a talented artist and musician.",
      imageUrl:
        "https://static.wikia.nocookie.net/nickelodeon/images/f/fe/SpongeBob-Squidward.jpg",
    },
    {
      id: 4,
      name: "Eugene H. Krabs",
      description:
        "A red cheapskate crab who is SpongeBob's boss and the owner of the Krusty Krab. He is a single father who lives in an anchor with his teenage whale daughter, Pearl. He is obsessed with collecting money.",
      imageUrl:
        "https://static.wikia.nocookie.net/nickelodeon/images/e/e2/SpongeBob-Mr-Krabs.jpg",
    },
    {
      id: 5,
      name: "Sheldon J. Plankton",
      description:
        "Mr. Krabs' arch-nemesis, a tiny green copepod who is a skilled inventor with a Napoleon complex. He runs a failed rival restaurant to the Krusty Krab called the Chum Bucket alongside his talking computer Karen, which he built himself.",
      imageUrl:
        "https://static.wikia.nocookie.net/nickelodeon/images/4/42/SpongeBob-Plankton.jpg",
    },
    {
      id: 6,
      name: "Sandy Cheeks",
      description:
        "A squirrel from Texas who wears a diving suit and lives in an air-filled glass Treedome to breathe underwater. She is a good friend of SpongeBob and works as an explorer, thrill-seeker, and scientist.",
      imageUrl:
        "https://static.wikia.nocookie.net/nickelodeon/images/6/65/SpongeBob-Sandy.jpg",
    },
  ]);

  return (
    <div className="App">
      <h1>spongebob characters dashboard</h1>
      <Dashboard characters={characters} setCharacters={setCharacters} />
    </div>
  );
};

export default App;
