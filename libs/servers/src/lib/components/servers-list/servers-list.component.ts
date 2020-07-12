import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'rf-servers-list',
  templateUrl: './servers-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
