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

export function TableWing1() {
  return (
    <Table>
      <TableCaption>Composition for wing 1</TableCaption>
      <TableHeader>
        <TableRow className="bg-accent">
          <TableHead>Player</TableHead>
          <TableHead>Subgroup</TableHead>
          <TableHead className="font-extrabold text-center">
            Vale Guardian
          </TableHead>
          <TableHead className="font-extrabold text-center">
            Spirit Run
          </TableHead>
          <TableHead className="font-extrabold text-center">Gorseval</TableHead>
          <TableHead className="font-extrabold text-center">Sabetha</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-player="Cy">
          <TableCell>Cy</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>BoonDPS</TableCell>
          <TableCell>BoonDPS Chrono / Quickness Ritualist</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
        </TableRow>
        <TableRow data-player="Kopek">
          <TableCell>Kopek</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Alac Antiquary</TableCell>
          <TableCell>Antiquary Portal</TableCell>
          <TableCell>Alac Luminary/Portal 3</TableCell>
          <TableCell>Aheal Luminary</TableCell>
        </TableRow>
        <TableRow data-player="mapoking">
          <TableCell>Mapoking</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Power Virtuoso</TableCell>
          <TableCell>Portal 2/Log runner</TableCell>
          <TableCell>Power Virtuoso</TableCell>
          <TableCell>Power Virtuoso</TableCell>
        </TableRow>
        <TableRow data-player="Wisteriya">
          <TableCell>Wisteriya</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Power Reaper</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>Power Reaper</TableCell>
          <TableCell>Power Reaper</TableCell>
        </TableRow>
        <TableRow data-player="Wawa">
          <TableCell>Wawa</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Willbender</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>Burst DPS</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
        <Separator className="my-5"></Separator>
        <TableRow data-player="Fennix">
          <TableCell>Fennix</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Tank Heal Druid/Troub</TableCell>
          <TableCell>Quick Heal</TableCell>
          <TableCell>Celestial Troubadour</TableCell>
          <TableCell>Cele/Full Heal Troubadour</TableCell>
        </TableRow>
        <TableRow data-player="BadBad">
          <TableCell>BadBad</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Alac Amalgam</TableCell>
          <TableCell>BoonDPS</TableCell>
          <TableCell>Alac Amalgam</TableCell>
          <TableCell>Alac Amalgam</TableCell>
        </TableRow>
        <TableRow data-player="Nicky">
          <TableCell>Nicky</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Soulbeast</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>Soulbeast</TableCell>
          <TableCell>Soulbeast</TableCell>
        </TableRow>
        <TableRow data-player="Mesmerizing">
          <TableCell>Mesmerizing</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Soulbeast/Spellbreaker/Willbender</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>Spellbreaker</TableCell>
          <TableCell>Spellbreaker/Berserker</TableCell>
        </TableRow>
        <TableRow data-player="Godbane">
          <TableCell>Godbane</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Willbender</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
