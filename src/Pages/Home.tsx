import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import { UploadIcon } from "@phosphor-icons/react/dist/ssr";

export function Home() {
  return (
    <div className=" m-0 p-0 h-screen flex flex-col gap-2 justify-center bg-[url(../src/Utility/XERA-NO-EVERBLOOM.png)] bg-center">
      <div className="absolute h-screen inset-0 bg-black/40 backdrop-blur-md"></div>
      <div className="relative z-10">
        <div className="p-4 flex flex-col justify-center gap-5 items-center blur-none">
          <p className="antialiased text-6xl font-black text-shadow-lg/30 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            I Die Gliding For <span className="text-amber-400">[XERA] </span>
          </p>
        </div>
        <Separator></Separator>
        <div className="flex justify-center gap-30 items-center mt-5">
          <div className="flex flex-col gap-1">
            <p className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Our players
            </p>
            <Carousel className="w-sm">
              <CarouselContent className="flex items-center">
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Cy</CardTitle>
                      <CardDescription>Fallible Commander</CardDescription>
                      <CardAction>
                        <Link to="/Composition">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Mesmer jailed</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Kopek</CardTitle>
                      <CardDescription>Necro Enjoyer</CardDescription>
                      <CardAction>
                        <Link to="/Composition">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Boon Jailed</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Fennix</CardTitle>
                      <CardDescription>Fiery Greatsword Dealer</CardDescription>
                      <CardAction>
                        <Link to="/Composition">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Purple Elementalist</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Dabdab</CardTitle>
                      <CardDescription>Badbad*</CardDescription>
                      <CardAction>
                        <Link to="/Composition">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-0.5">
                      <p>HTCM Griefer</p>
                      <img
                        src="../src/Utility/GUH.png"
                        alt="Guh"
                        width="100px"
                        height="100px"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Mesmerizing</CardTitle>
                      <CardDescription>Somehow not on a mesmer</CardDescription>
                      <CardAction>
                        <Link to="/Composition">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Warrior jailed</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Nicky</CardTitle>
                      <CardDescription>Canadian</CardDescription>
                      <CardAction>
                        <Link to="/Composition">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Mechanics Enjoyer</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Wisteriya</CardTitle>
                      <CardDescription>Reaper Jailed</CardDescription>
                      <CardAction>
                        <Link to="/Composition">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Mechanics Enjoyer part 2</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Mapoking</CardTitle>
                      <CardDescription>Fancy Fire Fanatic</CardDescription>
                      <CardAction>
                        <Link to="/Composition">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>FFF</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Wawa</CardTitle>
                      <CardDescription>Almost voidwalker</CardDescription>
                      <CardAction>
                        <Link to="/Composition">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>DPS</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Godbane</CardTitle>
                      <CardDescription>
                        Possibly gone by tomorrow
                      </CardDescription>
                      <CardAction>
                        <Link to="/Composition">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>holy</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Our Strats
            </p>
            <Carousel className="w-sm">
              <CarouselContent>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Spirit Vale</CardTitle>
                      <CardDescription>Wing 1</CardDescription>
                      <CardAction>
                        <Link to="/Strats">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Wing 1 Strats</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Salvations Pass</CardTitle>
                      <CardDescription>Wing 2</CardDescription>
                      <CardAction>
                        <Link to="/Strats">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Wing 2 Strats</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Stronghold of the Faithful</CardTitle>
                      <CardDescription>Wing 3</CardDescription>
                      <CardAction>
                        <Link to="/Strats">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Wing 3 Strats</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Bastion of the Penitent</CardTitle>
                      <CardDescription>Wing 4</CardDescription>
                      <CardAction>
                        <Link to="/Strats">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Wing 4 Strats</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Hall of Chains</CardTitle>
                      <CardDescription>Wing 5</CardDescription>
                      <CardAction>
                        <Link to="/Strats">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Wing 5 Strats</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Mythright Gambit</CardTitle>
                      <CardDescription>Wing 6</CardDescription>
                      <CardAction>
                        <Link to="/Strats">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Wing 6 Strats</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>The Key of Adashim</CardTitle>
                      <CardDescription>Wing 7</CardDescription>
                      <CardAction>
                        <Link to="/Strats">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Wing 7 Strats</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card size="sm" className="text-center">
                    <CardHeader>
                      <CardTitle>Mount Balrior</CardTitle>
                      <CardDescription>Wing 8</CardDescription>
                      <CardAction>
                        <Link to="/Strats">
                          <UploadIcon></UploadIcon>
                        </Link>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Wing 8 Strats</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious></CarouselPrevious>
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
