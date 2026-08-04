import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";

export function Players() {
  return (
    <>
      <div className="p-4 flex flex-col justify-center h-screen text-center">
        <p className="text-3xl text-amber-400 font-extrabold">Our Players</p>
        <br />
        <p>
          Our roster is comprised of players with different levels of end game
          experience…. And dabdab.
        </p>
        <br />
        <div className="grid grid-cols-5 grid-rows-2 gap-2">
          <div>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center gap-10 items-center">
                  <Avatar size="lg">
                    <AvatarImage src="/cypfp.jpg" />
                  </Avatar>
                  <p className="text-2xl">Cy</p>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-center gap-10 items-center">
                  <Avatar size="lg">
                    <AvatarImage src="/default.jpg" />
                  </Avatar>
                  <p className="text-2xl">Kopek</p>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-center gap-10 items-center">
                  <Avatar size="lg">
                    <AvatarImage src="/default.jpg" />
                  </Avatar>
                  <p className="text-2xl">Wisteriya</p>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-center gap-10 items-center">
                  <Avatar size="lg">
                    <AvatarImage src="/default.jpg" />
                  </Avatar>
                  <p className="text-2xl">Wawa</p>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-center gap-10 items-center">
                  <Avatar size="lg">
                    <AvatarImage src="/default.jpg" />
                  </Avatar>
                  <p className="text-2xl">Mapoking</p>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-center gap-10 items-center">
                  <Avatar size="lg">
                    <AvatarImage src="/default.jpg" />
                  </Avatar>
                  <p className="text-2xl">Fennix</p>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-center gap-10 items-center">
                  <Avatar size="lg">
                    <AvatarImage src="/GUH.png" />
                  </Avatar>
                  <p className="text-2xl">Dabdab</p>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-center gap-10 items-center">
                  <Avatar size="lg">
                    <AvatarImage src="/default.jpg" />
                  </Avatar>
                  <p className="text-2xl">Nicky</p>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-center gap-10 items-center">
                  <Avatar size="lg">
                    <AvatarImage src="/default.jpg" />
                  </Avatar>
                  <p className="text-2xl">Solar</p>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-center gap-10 items-center">
                  <Avatar size="lg">
                    <AvatarImage src="/default.jpg" />
                  </Avatar>
                  <p className="text-2xl">Mesmerizing</p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
