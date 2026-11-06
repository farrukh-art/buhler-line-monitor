import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Machine } from '../../models/machine.model';
import { MachineStatusComponent } from '../machine-status/machine-status.component';

@Component({
  selector: 'app-machine-tile',
  standalone: true,
  imports: [MachineStatusComponent],
  templateUrl: './machine-tile.component.html',
  styleUrl: './machine-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineTileComponent {
  readonly machine = input.required<Machine>();
}
