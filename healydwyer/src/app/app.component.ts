import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { DragulaModule } from 'ng2-dragula';
import { CdkDragEnter, CdkDragExit, CdkDrag } from '@angular/cdk/drag-drop';
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
  carQueue = {
    cars: [{
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
    }]
  };

  trackOne = {
    cars: [{
      car: 'CSXT-123456',
      length: '10'
    }],
    allow: (() => {
      return this.trackOne.cars.length < 1;
    })
  };

  trackTwo = {
    cars: [{
      car: 'CSXT-4567234',
      length: '40'
    }],
    allow: (() => {
      return this.trackTwo.cars.length < 1;
    })
  };

  trackThree = {
    cars: [{
      car: 'CSXT-837462',
      length: '20'
    }],
    allow: (() => {
      return this.trackThree.cars.length < 1;
    })
  };

  trackFour = {
    cars: [{
      car: 'CSXT-253455',
      length: '20'
    }],
    allow: (() => {
      return this.trackFour.cars.length < 1;
    })
  };

  droppedData: string;

  dragEnd(event) {
    console.log('Element was dragged', event);
  }

  onDrop({ dropData }: DropEvent<string>): void {
    this.droppedData = dropData;
  }

  drop(event: CdkDragDrop<string[]>) {
    // if (event.container.data.length <1) {
    //   return false;
    // }
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
