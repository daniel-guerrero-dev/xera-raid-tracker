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
              gets prepared for Trio, one{" "}
              <span className="text-purple-500">Mesmer</span> or{" "}
              <span className="text-pink-300">Thief</span> player will start the
              fight early
            </p>
            <p>
              Do the boss as normal until Narella, where the portal player at
              the top will glide down to help kill and then place the entrance
              portal.
            </p>
            <br />
            <p>
              We kill all enemies fast to start matthias, 3 people go fowards in
              a jumping puzzle and all enemies are killed asap.
            </p>
            <br />
            <p className="text-3xl">Matthias</p>
            <br />
            <p>
              Do fight as normal, one heal/cele scourge will portal the
              corrupted people into the pools up until 40%, poisons should be
              dropped fast away from group without going all the way out. After
              40 just push to kill
            </p>
          </TabsContent>
          <TabsContent value="Wing 3">
            <br />
            <p className="text-3xl">Escort</p>
            <br />
            <p>
              We do fast escort. We divide the squad into 2 teams; Ground team
              and Tower Team
            </p>
            <p>
              Ground team is composed of 4 players with the following
              composition: 1 <span className="text-pink-300">Daredevil</span>, 1
              DPS, 1 <span className="text-red-700">Road qHerald</span>, 1{" "}
              <span className="text-red-500">Aheal Tempest</span>
            </p>
            <p>
              Tower team is simply 1{" "}
              <span className="text-green-300">Aheal Druid</span>/
              <span className="text-yellow-200">Paragon</span> for pushes, 1
              boonDPS, 3 DPS players with pushing capability and one tower {""}
              <span className="text-pink-300">Daredevil</span>
            </p>
            <br />
            <p>
              Ground team will use SAK aggresively to call glenna foward through
              all the points, ignore tower shots with stability and kill
              enemies/wargs along the way
            </p>
            <p>
              Ground <span className="text-pink-300">Daredevil</span> will
              portal tower team into the first tower and call glenna into 2 bug
              spots while the rest of the team pushes foward toward the 3rd bug
              spot
            </p>
            <p>
              Once Glenna finishes capturing the last leyline she will be placed
              in her normal spot and the{" "}
              <span className="text-red-500">Aheal Tempest</span> will glyph of
              the storms on earth on top of her to blind the wargs attacking.
            </p>
            <p>Tower team should finish the encounter before Glenna dies.</p>
            <br />
            <p>
              Tower team will port all the way up to the first tower and take
              turns using their AoE push/fear skills
            </p>
            <p>
              Once the second tower has been captured, the tower{" "}
              <span className="text-pink-300">Daredevil</span> will run towards
              the last call spot for Glenna, place a portal and glide down
              towards the ground group
            </p>
            <p>
              One <span className="text-purple-500">Mesmer</span> or Ground{" "}
              <span className="text-pink-300">Daredevil</span> should portal
              tower team down from the last tower as it's captured so McLeod
              doesn't get stuck on the tower.
            </p>
            <br />
            <p>
              Lastly simply kill McLeod the normal way and get ready to start KC
              as soon as possible.
            </p>
            <br />
            <p className="text-3xl">Keep Construct</p>
            <br />
            <p>
              Start the fight in the middle after finishing Escort, tank the
              entire fight in the middle.
            </p>
            <p>
              Far fixate moves towards the statues, close fixate moves to the
              opposite side of the boss so the statue gets into the hitbox
            </p>
            <p>
              Once one statue is dead, far fixate can walk back towards the boss
              and the statue will be cleaved.
            </p>
            <p>Do not CC.</p>
            <p>
              DPS boss until 66% and repeat same process for 33% and push to
              kill.
            </p>
            <br />
            <p className="text-3xl">Twisted Castle</p>
            <br />
            <p>
              2 Mirages do everything (see players tab too check out the
              details)
            </p>
            <br />
            <p className="text-3xl">Xera</p>
            <br />
            <p>Do the fight as normal, fast DPS tank variant.</p>
          </TabsContent>
          <TabsContent value="Wing 4">
            <br />
            <p className="text-3xl">Cairn</p>
            <br />
            <p>Do the fight as normal, minimal healers</p>
            <br />
            <p className="text-3xl">Mursat Overseer</p>
            <br />
            <p>Do the fight as normal, no healers</p>
            <br />
            <p className="text-3xl">Samarog</p>
            <br />
            <p>Do the fight as normal</p>
            <br />
            <p className="text-3xl">Deimos</p>
            <br />
            <p>Fight tanked as normal, hand kite is also a boon.</p>
          </TabsContent>
          <TabsContent value="Wing 5">
            <br />
            <p className="text-3xl">Souless Horror</p>
            <br />
            <p>
              Standard strat, pusher can be adps Druid or qdps Berserker, no 3
              healers.
            </p>
            <br />
            <p className="text-3xl">River</p>
            <br />
            <p></p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
