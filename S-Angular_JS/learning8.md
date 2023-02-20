# content projection

if you provide any content inside the custom component tag the angular will automatically ignore it 

for example in the following example when we put something inside the < app-post> it will automatically ignore and not render on the web page

        <app-post [img]="imgUrl" (imgSelected)="logImg($event)" >
            <p>hi there this is just .. </p>        <!-- angular will ignore it and not put it on the browser -->
        </app-post>

now we need to tell the angular where to insert the content otherwise it will not show the content by default

angular create a custom element for handling most of the work

inside the post.component.html we will add the ng-content element this element will search for the content that pass by custom component tag if its find anything it will render on web

        <ng-content></ng-content>   <!-- this will catch anything you pass between its custom component tag -->