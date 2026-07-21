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

export function TableWing8() {
  return (
    <Table>
      <TableCaption>Composition for wing 8</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Player</TableHead>
          <TableHead>Subgroup</TableHead>
          <TableHead className="text-center">Camp</TableHead>
          <TableHead>Decima</TableHead>
          <TableHead>Greer</TableHead>
          <TableHead>Ura</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-player="Cy">
          <TableCell>Cy</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Quickness Heal Troubadour</TableCell>
          <TableCell>Celestial Quickness Troubadour</TableCell>
          <TableCell>Quickness Heal Troubadour</TableCell>
          <TableCell>Quickness Heal Troubadour</TableCell>
        </TableRow>
        <TableRow data-player="Kopek">
          <TableCell>Kopek</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Alac Evoker (EB)</TableCell>
          <TableCell>Alac Evoker (EB)</TableCell>
          <TableCell>Alac Evoker (EB)</TableCell>
          <TableCell>Alac Evoker (EB)</TableCell>
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
          <TableCell>Heal Troubadour</TableCell>
          <TableCell>Quickness Heal Troubadour (red bait)</TableCell>
          <TableCell>Quickness Heal Troubadour</TableCell>
          <TableCell>Quick Heal Chrono/Troubadour (CC MASTER)</TableCell>
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
          <TableCell>DPS</TableCell>
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
