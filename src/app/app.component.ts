import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MachineTileComponent } from './components/machine-tile/machine-tile.component';
import { MachineStatusComponent } from './components/machine-status/machine-status.component';
import { MACHINES } from './data/machines';

@Component({
  selector: 'app-root',
  imports: [DatePipe, MachineTileComponent, MachineStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly machines = MACHINES;
  readonly loadedAt = new Date();
}
