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

export function TableWing2() {
  return (
    <Table>
      <TableCaption>Composition for wing 2</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Player</TableHead>
          <TableHead>Subgroup</TableHead>
          <TableHead className="text-center">Sloth</TableHead>
          <TableHead>Bandit Trio</TableHead>
          <TableHead>Transition</TableHead>
          <TableHead>Mathias</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-player="Cy">
          <TableCell>Cy</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Alac Luminary</TableCell>
          <TableCell>Alac Luminary</TableCell>
          <TableCell>Alac Luminary</TableCell>
          <TableCell>Quickness Firebrand</TableCell>
        </TableRow>
        <TableRow data-player="Kopek">
          <TableCell>Kopek</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Alac heal/Cele heal Scourge</TableCell>
        </TableRow>
        <TableRow data-player="mapoking">
          <TableCell>Mapoking</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Power Virtuoso / Shroom 1 (temporary)</TableCell>
          <TableCell>Cliff mesmer</TableCell>
          <TableCell>Power Virtuoso</TableCell>
          <TableCell>Power Virtuoso</TableCell>
        </TableRow>
        <TableRow data-player="Wisteriya">
          <TableCell>Wisteriya</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Slub Sacrifice</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>Power Reaper</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
        <TableRow data-player="Wawa">
          <TableCell>Wawa</TableCell>
          <TableCell>2</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
        <Separator className="my-5"></Separator>
        <TableRow data-player="Fennix">
          <TableCell>Fennix</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Heal Troubadour</TableCell>
          <TableCell>Heal Troubadour</TableCell>
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
          <TableCell>Soulbeast / Shroom 4</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>Soulbeast</TableCell>
          <TableCell>Soulbeast</TableCell>
        </TableRow>
        <TableRow data-player="Mesmerizing">
          <TableCell>Mesmerizing</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Spellbreaker / Shroom 3</TableCell>
          <TableCell>Spellbreaker/Power DPS</TableCell>
          <TableCell>Spellbreaker/Power DPS</TableCell>
          <TableCell>Spellbreaker/Power DPS</TableCell>
        </TableRow>
        <TableRow data-player="Godbane">
          <TableCell>Godbane</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Power DPS / Shroom 2</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>Power DPS</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
