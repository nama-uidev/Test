import { Component, Input, EventEmitter, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IRegion } from '../../models/regions';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit{
  @Input() items: IRegion[];
  @Input() labelName: string;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(){
  }

  selectedItemChanged(value) {
    this.valueChange.emit(value);
  }

}
