# css in angular

inside src folder their is a file called styles.css the css added to this file will apply to the hole app

and the css files inside the component folder will only apply to only that component

for example in the following file we have assign css to the post component through the post.component.css file

        :host{          /* this :host is the attribute will represent the hole component if you want to assign value to the hole component you have to use the :host */
            font-size: 24px;
        }

        img{    /* this value will be assign to img tag it is as simple as any normal css */
            border-style: solid;
            border-width: 5px;
            border-color: rgb(88, 92, 195);
        }

