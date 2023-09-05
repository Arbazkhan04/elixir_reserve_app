import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-buttons.component.html',
  styleUrls: ['./common-buttons.component.css']
})
export class CommonButtonsComponent {

  @Output() continueClick = new EventEmitter<void>();
  @Output() backClick = new EventEmitter<void>();

  onContinueClick() {
    this.continueClick.emit();
  }

  onBackClick() {
    this.backClick.emit();
  }
}
