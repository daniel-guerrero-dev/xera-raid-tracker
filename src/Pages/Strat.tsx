import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Strats() {
  return (
    <div>
      <div className="p-4">
        <p className="font-extrabold text-6xl">
          Overall Speedrun Strategy Overview
        </p>
        <br />
        <p className="text-xl">
          This page will contain a small overview of the strategies we use for
          each wing without going into specifics. Check the Player tab for
          specifics on what each person does.
        </p>
        <br />
        <Tabs>
          <TabsList variant="line">
            <TabsTrigger value="Wing 1">Wing 1</TabsTrigger>
            <TabsTrigger value="Wing 2">Wing 2</TabsTrigger>
            <TabsTrigger value="Wing 3">Wing 3</TabsTrigger>
            <TabsTrigger value="Wing 4">Wing 4</TabsTrigger>
            <TabsTrigger value="Wing 5">Wing 5</TabsTrigger>
            <TabsTrigger value="Wing 6">Wing 6</TabsTrigger>
            <TabsTrigger value="Wing 7">Wing 7</TabsTrigger>
            <TabsTrigger value="Wing 8">Wing 8</TabsTrigger>
          </TabsList>
          <TabsContent value="Wing 1">
            <br />
            <p className="text-3xl">Vale Guardian</p>
            <br />
            <p>
              We glide down from the airship and pull all 3 guardians into the
              middle, <span className="text-purple-500">Chrono</span> or {""}
              <span className="text-pink-300">Thief</span> will go into the
              center of the main plataform to place down a portal.
            </p>
            <p>
              Once all guardians are dead, take the portal to the center of the
              arena and start the fight. The fight will be tanked in the center
              by an <span className="text-green-300">Alac Druid</span>.
            </p>
            <p>
              Once the boss is at 66% we split to kill all 3 guardians at the
              same time.
            </p>
            <p>Repeat until the boss is dead.</p>
            <br />
            <p className="text-3xl">Spirit Run</p>
            <br />
            <p>
              <span className="text-pink-300">Thief</span> will do a fancy JP
              before the start of the first encounter, we will have a{" "}
              <span className="text-purple-500">Mirage/Chrono</span> for portals
              at the bottom.
            </p>
            <p>
              Once the first encounter is done,{" "}
              <span className="text-pink-300">Thief</span> will portal us to the
              top of the JP, 1 DPS player and 1 BoonDPS will run all the way to
              the end.
            </p>
            <p>
              <span className="text-pink-300">Thief</span> will run all the way
              to the end of the log and do another JP place a portal and then
              glide down the the second to last wall.
            </p>
            <p>
              Place the portal down after wall is broken, take it and glide down
              to the buttons to finish the encounter.
            </p>
            <br />
            <p className="text-3xl">Gorseval</p>
            <br />
            <p>
              Portal into the arena, fight the boss as normal, once split phases
              happen we split in groups to kill all the spirits at the same
              time.
            </p>
            <br />
            <p className="text-3xl">Sabetha</p>
            <br />
            <p>
              We will port all the way into the arena, BoonDPS will kite flak
              and green bombs. We will stack on circle side and it will be the
              only cannon done during the encounter.
            </p>
          </TabsContent>
          <TabsContent value="Wing 2">
            <br />
            <p className="text-3xl">Slothazor</p>
            <br />
            <p>
              We will only have 1 shroom eater, they eat the marked shrooms at
              specific times and we ideally kill the boss before this is a
              problem.
            </p>
            <p>
              <span className="text-purple-500">Mesmer</span> players should
              save distortion for shakes after 50% HP
            </p>
            <br />
            <p className="text-3xl">Bandit Trio</p>
            <br />
            <p>
              2 Players will do a JP up the cliff while the rest of the team
              gets prepared for Trio, one mesmer of thief player will start the
              fight early
            </p>
            <p>
              Do the boss as normal until Narella where the portal player at the
              top will glide down to help
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
