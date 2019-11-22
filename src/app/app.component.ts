import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'posts-project';

    posts = [
        {
            title: 'My first post',
            content: 'here is my first post content',
            loveIts: 1
        },
        {
            title: 'My second post',
            content: 'this is a post with dislikes',
            loveIts: -2
        },
        {
            title: 'My last post',
            content: 'my last post. this one is with no likes and dislike',
            loveIts: 0
        },
    ]
}
