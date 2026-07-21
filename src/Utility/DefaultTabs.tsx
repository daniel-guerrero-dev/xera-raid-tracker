import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TableWing1 } from "@/Wings/Wing1Table";
import { TableWing2 } from "@/Wings/Wing2Table";
import { TableWing3 } from "@/Wings/Wing3Table";
import { TableWing4 } from "@/Wings/Wing4Table";
import { TableWing5 } from "@/Wings/Wing5Table";
import { TableWing6 } from "@/Wings/Wing6Table";
import { TableWing7 } from "@/Wings/Wing7Table";
import { TableWing8 } from "@/Wings/Wing8Table";

export function TabTables() {
  return (
    <Tabs defaultValue="Wing 1">
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
        <TableWing1 />
      </TabsContent>
      <TabsContent value="Wing 2">
        <TableWing2></TableWing2>
      </TabsContent>
      <TabsContent value="Wing 3">
        <TableWing3></TableWing3>
      </TabsContent>
      <TabsContent value="Wing 4">
        <TableWing4></TableWing4>
      </TabsContent>
      <TabsContent value="Wing 5">
        <TableWing5></TableWing5>
      </TabsContent>
      <TabsContent value="Wing 6">
        <TableWing6></TableWing6>
      </TabsContent>
      <TabsContent value="Wing 7">
        <TableWing7></TableWing7>
      </TabsContent>
      <TabsContent value="Wing 8">
        <TableWing8 />
      </TabsContent>
    </Tabs>
  );
}
