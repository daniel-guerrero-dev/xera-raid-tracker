import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableWing3() {
  return (
    <Table>
      <TableCaption>Composition for wing 3</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Player</TableHead>
          <TableHead>Subgroup</TableHead>
          <TableHead className="text-center">Escort</TableHead>
          <TableHead>Keep Construct</TableHead>
          <TableHead>Twisted Castle</TableHead>
          <TableHead>Xera OMG ITS REAL</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-player="Cy">
          <TableCell>Cy</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Ground Daredevil</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Mirage/Alac Chrono</TableCell>
          <TableCell>AlacDPS Chrono</TableCell>
        </TableRow>
        <TableRow data-player="Kopek">
          <TableCell>Kopek</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Aheal Druid</TableCell>
          <TableCell>Alac Luminary</TableCell>
          <TableCell>Alac Luminary</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
        </TableRow>
        <TableRow data-player="mapoking">
          <TableCell>Mapoking</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Tower BoonChrono</TableCell>
          <TableCell>Power Virtuoso</TableCell>
          <TableCell>Mirage</TableCell>
          <TableCell>Power Chrono</TableCell>
        </TableRow>
        <TableRow data-player="Wisteriya">
          <TableCell>Wisteriya</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Ground Team DPS</TableCell>
          <TableCell>Power Reaper/Soulbeast</TableCell>
          <TableCell>Power Reaper/Soulbeast</TableCell>
          <TableCell>Power Reaper</TableCell>
        </TableRow>
        <TableRow data-player="Wawa">
          <TableCell>Wawa</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Burst DPS Tower (Warir)</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
        </TableRow>
        <Separator className="my-5"></Separator>
        <TableRow data-player="Fennix">
          <TableCell>Fennix</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Heal Tempest</TableCell>
          <TableCell>Heal Troubadour</TableCell>
          <TableCell>Mirage/Troubadour</TableCell>
          <TableCell>Tank Heal Troubadour</TableCell>
        </TableRow>
        <TableRow data-player="BadBad">
          <TableCell>BadBad</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Quick Scrapper</TableCell>
          <TableCell>Alac Amalgam</TableCell>
          <TableCell>Alac Amalgam</TableCell>
          <TableCell>Alac Amalgam</TableCell>
        </TableRow>
        <TableRow data-player="Nicky">
          <TableCell>Nicky</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Road Quick Herald</TableCell>
          <TableCell>Soulbeast</TableCell>
          <TableCell>Soulbeast</TableCell>
          <TableCell>Soulbeast</TableCell>
        </TableRow>
        <TableRow data-player="Mesmerizing">
          <TableCell>Mesmerizing</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Bladesworn</TableCell>
          <TableCell>Berserker</TableCell>
          <TableCell>Berserker</TableCell>
          <TableCell>Berserker</TableCell>
        </TableRow>
        <TableRow data-player="Godbane">
          <TableCell>Godbane</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Tower Power DPS (Warir)</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Burst DPS</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
