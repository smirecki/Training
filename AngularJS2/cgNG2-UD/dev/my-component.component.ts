import {Component} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: `
    Hi, I'm {{name}} and this is my very first ng2 component! It's so AWESOME!!!!!!!!!!
    <br>
    Is it awesome?
    <input type="text">
    
    </input>
    
    `,
    styleUrls: []
})

export class MyComponentComponent {
    name = 'smirecki'; 
}