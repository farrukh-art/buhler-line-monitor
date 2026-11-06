export type MachineStatus = 'running' | 'alarm' | 'warning';

export interface Machine {
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly icon: string;
  readonly status: MachineStatus;
}

export const STATUS_LABELS: Record<MachineStatus, string> = {
  running: 'Running',
  alarm: 'Alarm',
  warning: 'Warning',
};
