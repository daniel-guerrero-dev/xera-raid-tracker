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

export function TableWing4() {
  return (
    <Table>
      <TableCaption>Composition for wing 4</TableCaption>
      <TableHeader>
        <TableRow className="bg-accent">
          <TableHead>Player</TableHead>
          <TableHead>Subgroup</TableHead>
          <TableHead className="font-extrabold text-center">Cairn</TableHead>
          <TableHead className="font-extrabold text-center">
            Mursat Overseer
          </TableHead>
          <TableHead className="font-extrabold text-center">Samarog</TableHead>
          <TableHead className="font-extrabold text-center">Deimos</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-player="Cy">
          <TableCell>Cy</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
        </TableRow>
        <TableRow data-player="Kopek">
          <TableCell>Kopek</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Alac Luminary</TableCell>
          <TableCell>Alac Luminary</TableCell>
          <TableCell>Alac Luminary</TableCell>
          <TableCell>Alac Luminary</TableCell>
        </TableRow>
        <TableRow data-player="mapoking">
          <TableCell>Mapoking</TableCell>
          <TableCell>2</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
        <TableRow data-player="Wisteriya">
          <TableCell>Wisteriya</TableCell>
          <TableCell>2</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
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
          <TableCell>Quick Heal/DPS Troubadour</TableCell>
          <TableCell>Quick Heal/DPS Troubadour</TableCell>
          <TableCell>Quick Heal/DPS Troubadour</TableCell>
          <TableCell>Tank Heal Troubadour</TableCell>
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
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>Hand Kite</TableCell>
        </TableRow>
        <TableRow data-player="Mesmerizing">
          <TableCell>Mesmerizing</TableCell>
          <TableCell>1</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
        <TableRow data-player="Godbane">
          <TableCell>Godbane</TableCell>
          <TableCell>1</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
