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

export function TableWing6() {
  return (
    <Table>
      <TableCaption>Composition for wing 6</TableCaption>
      <TableHeader>
        <TableRow className="bg-accent">
          <TableHead>Player</TableHead>
          <TableHead>Subgroup</TableHead>
          <TableHead className="font-extrabold text-center">
            Conjured Amalgamate
          </TableHead>
          <TableHead className="font-extrabold text-center">
            Twin Largos
          </TableHead>
          <TableHead className="font-extrabold text-center">Qadim 1</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-player="Cy">
          <TableCell>Cy</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Quickness Ritualist (solo shield)</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
          <TableCell>Quickness Ritualist</TableCell>
        </TableRow>
        <TableRow data-player="Kopek">
          <TableCell>Kopek</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Alac Luminary</TableCell>
          <TableCell>Alac Luminary</TableCell>
          <TableCell>Alac Luminary</TableCell>
        </TableRow>
        <TableRow data-player="mapoking">
          <TableCell>Mapoking</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Q1 Kiter</TableCell>
        </TableRow>
        <TableRow data-player="Wisteriya">
          <TableCell>Wisteriya</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Lamp</TableCell>
        </TableRow>
        <TableRow data-player="Wawa">
          <TableCell>Wawa</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
        </TableRow>
        <Separator className="my-5"></Separator>
        <TableRow data-player="Fennix">
          <TableCell>Fennix</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Heal Troubadour</TableCell>
          <TableCell>Heal Troubadour</TableCell>
          <TableCell>Tank Heal Troubadour (focus, portal)</TableCell>
        </TableRow>
        <TableRow data-player="BadBad">
          <TableCell>BadBad</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Alac Amalgam (solo sword)</TableCell>
          <TableCell>Alac Amalgam</TableCell>
          <TableCell>Alac Amalgam</TableCell>
        </TableRow>
        <TableRow data-player="Nicky">
          <TableCell>Nicky</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Power DPS</TableCell>
          <TableCell>Lamp</TableCell>
        </TableRow>
        <TableRow data-player="Mesmerizing">
          <TableCell>Mesmerizing</TableCell>
          <TableCell>1</TableCell>
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
        </TableRow>
      </TableBody>
    </Table>
  );
}
