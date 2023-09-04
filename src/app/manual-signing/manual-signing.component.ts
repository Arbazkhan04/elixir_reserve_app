import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manual-signing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manual-signing.component.html',
  styleUrls: ['./manual-signing.component.css']
})
export class ManualSigningComponent {
  @ViewChild('sigPad') sigPad!: ElementRef<HTMLCanvasElement>;
  sigPadElement!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;
  isDrawing = false;
  img!: string;
  shouldShow = true; 

  ngAfterViewInit() {
    this.sigPadElement = this.sigPad.nativeElement;
    this.context = this.sigPadElement.getContext('2d')!;
    this.context.strokeStyle = '#3742fa';
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e:any) {
    this.isDrawing = false;
  }

  onMouseDown(e:any) {
    this.isDrawing = true;
    const coords = this.relativeCoords(e);
    this.context.moveTo(coords.x, coords.y);
  }

  onMouseMove(e:any) {
    if (this.isDrawing) {
      const coords = this.relativeCoords(e);
      this.context.lineTo(coords.x, coords.y);
      this.context.stroke();
    }
  }

  private relativeCoords(event: any) {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    return { x: x, y: y };
  }

  clear() {
    this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
    this.context.beginPath();
  }

  save() {
    this.img = this.sigPadElement.toDataURL('image/png');
    console.log(this.img);
  }

  }

