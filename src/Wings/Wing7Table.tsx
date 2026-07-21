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

export function TableWing7() {
  return (
    <Table>
      <TableCaption>Composition for wing 7</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Player</TableHead>
          <TableHead>Subgroup</TableHead>
          <TableHead className="text-center">Gate</TableHead>
          <TableHead>Sabir</TableHead>
          <TableHead>Adina</TableHead>
          <TableHead>Qadim The Peerless</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-player="Cy">
          <TableCell>Cy</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Alac Chrono</TableCell>
          <TableCell>Alac Chrono</TableCell>
          <TableCell>Alac Chrono</TableCell>
          <TableCell>Alac Scourge (West Pylon)</TableCell>
        </TableRow>
        <TableRow data-player="Kopek">
          <TableCell>Kopek</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
        </TableRow>
        <TableRow data-player="mapoking">
          <TableCell>Mapoking</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
        </TableRow>
        <TableRow data-player="Wisteriya">
          <TableCell>Wisteriya</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Pylon Kite (TBD)</TableCell>
        </TableRow>
        <TableRow data-player="Wawa">
          <TableCell>Wawa</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Pylon Kite (TBD)</TableCell>
        </TableRow>
        <Separator className="my-5"></Separator>
        <TableRow data-player="Fennix">
          <TableCell>Fennix</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Heal Troubadour (portal)</TableCell>
          <TableCell>Quick Chrono</TableCell>
          <TableCell>Quick Chrono</TableCell>
          <TableCell>Tank Heal Troubadour/Chrono</TableCell>
        </TableRow>
        <TableRow data-player="BadBad">
          <TableCell>BadBad</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Alac Amalgam</TableCell>
          <TableCell>Alac Amalgam</TableCell>
          <TableCell>Alac Amalgam</TableCell>
          <TableCell>Alac Amalgam</TableCell>
        </TableRow>
        <TableRow data-player="Nicky">
          <TableCell>Nicky</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
        </TableRow>
        <TableRow data-player="Mesmerizing">
          <TableCell>Mesmerizing</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Sacrifice</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
        </TableRow>
        <TableRow data-player="Godbane">
          <TableCell>Godbane</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
