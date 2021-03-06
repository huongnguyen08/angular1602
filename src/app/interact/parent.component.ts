import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h3>Parent component</h3>
        <div style="margin-left:50px">{{value}}</div>
        <app-child
            (sendToParent)="getData($event)"
            [dataFromParent]="value"
        ></app-child>
    `,
})
export class ParentComponent {
    // sendToParent : prop at ChildComponent
    value = 0;
    getData(data) {
        this.value = data;
    }
}
