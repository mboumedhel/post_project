import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input() title: string;
    @Input() content: string;
    @Input() loveIts: number;
    @Input() createdDate: Date;


    constructor() {
    }

    ngOnInit() {
        this.createdDate = new Date();
    }

    getCreatedDate() {
        return this.createdDate;
    }

    getLoveIts() {
        return this.loveIts;
    }

    getLoveItsColor() {
        if (this.loveIts > 0) {
            return 'green';
        } else if (this.loveIts < 0) {
            return 'red';
        } else {
            return 'white';
        }
    }

    onLoveIt() {
        this.loveIts += 1;
        console.log(this.loveIts);
    }

    onDisLikeIt() {
        this.loveIts -= 1;
        console.log(this.loveIts);
    }


}
