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

export function TableWing5() {
  return (
    <Table>
      <TableCaption>Composition for wing 5</TableCaption>
      <TableHeader>
        <TableRow className="bg-accent">
          <TableHead>Player</TableHead>
          <TableHead>Subgroup</TableHead>
          <TableHead className="font-extrabold text-center">
            Souless Horror
          </TableHead>
          <TableHead className="font-extrabold text-center">River</TableHead>
          <TableHead className="font-extrabold text-center">Statues</TableHead>
          <TableHead className="font-extrabold text-center">Dhuum</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-player="Cy">
          <TableCell>Cy</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Alac Druid / Quicknes Berserker (Push)</TableCell>
          <TableCell>Heal Chrono (Portal 1)</TableCell>
          <TableCell>BoonChrono</TableCell>
          <TableCell>Chrono, kite, massinviser, g2</TableCell>
        </TableRow>
        <TableRow data-player="Kopek">
          <TableCell>Kopek</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Alac Specter / Condi Quick Harbinger</TableCell>
          <TableCell>Power BoonDPS</TableCell>
          <TableCell>Power BoonDPS</TableCell>
          <TableCell>BoonDPS</TableCell>
        </TableRow>
        <TableRow data-player="mapoking">
          <TableCell>Mapoking</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Condi DPS</TableCell>
          <TableCell>Desmina Scrapper</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
        <TableRow data-player="Wisteriya">
          <TableCell>Wisteriya</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Condi DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
        <TableRow data-player="Wawa">
          <TableCell>Wawa</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Condi DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
        <Separator className="my-5"></Separator>
        <TableRow data-player="Fennix">
          <TableCell>Fennix</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Heal Troubadour</TableCell>
          <TableCell>Heal Troubadour (Portal 2)</TableCell>
          <TableCell>Heal Troubadour (Eater of souls tank)</TableCell>
          <TableCell>Tank Heal Troubadour</TableCell>
        </TableRow>
        <TableRow data-player="BadBad">
          <TableCell>BadBad</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Condi Alac Amalgam</TableCell>
          <TableCell>Alac Amalgam</TableCell>
          <TableCell>Alac Amalgam</TableCell>
          <TableCell>Alac Amalgam</TableCell>
        </TableRow>
        <TableRow data-player="Nicky">
          <TableCell>Nicky</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Condi DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>DPS Green 1</TableCell>
        </TableRow>
        <TableRow data-player="Mesmerizing">
          <TableCell>Mesmerizing</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Condi DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>DPS Back up Green 1</TableCell>
        </TableRow>
        <TableRow data-player="Godbane">
          <TableCell>Godbane</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Condi DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>DPS</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
