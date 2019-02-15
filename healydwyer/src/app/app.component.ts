import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { DragulaModule } from 'ng2-dragula';
import { CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';
import { DragDropModule } from 'primeng/dragdrop';
import * as interact from 'interactjs';
import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'healydwyer';
  carQueue = [
    {
      car: 'CSXT-123456',
      length: '10'
    },
    {
      car: 'CSXT-123456',
      length: '20'
    },
    {
      car: 'CSXT-123456',
      length: '30'
    },
    {
      car: 'CSXT-123456',
      length: '40'
    }
  ];

  trackOne = [
    {
      car: 'CSXT-123456',
      length: '10'
    }
  ];

  trackTwo = [
    {
      car: 'CSXT-4567234',
      length: '40'
    }
  ];

  trackThree = [
    {
      car: 'CSXT-253455',
      length: '20'
    }
  ];

  trackFour = [];

  droppedData: string;

  dragEnd(event) {
    console.log('Element was dragged', event);
  }

  onDrop({ dropData }: DropEvent<string>): void {
    this.droppedData = dropData;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  entered(event: CdkDragEnter<string[]>) {
    console.log('Entered', event.item.data);
  }
  exited(event: CdkDragExit<string[]>) {
    console.log('Exited', event.item.data);
  }
}
