import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MachineStatus, STATUS_LABELS } from '../../models/machine.model';

@Component({
  selector: 'app-machine-status',
  standalone: true,
  templateUrl: './machine-status.component.html',
  styleUrl: './machine-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineStatusComponent {
  readonly status = input.required<MachineStatus>();
  readonly label = computed(() => STATUS_LABELS[this.status()]);
}
