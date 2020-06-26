import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {
  @Input() items: any;
  @Input() labelName: string;
  @Output() valueChange = new EventEmitter();
  isRegionSelected: boolean;

  constructor() { }

  selectedItemChanged(value) {
    if (value != undefined) {
      this.isRegionSelected = true;
      this.valueChange.emit(value);
    }
  }

}
