import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentPage=0;
    images = [
      {
        title : "At a beach",
        url :  "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a mountain",
        url :  "https://images.unsplash.com/photo-1455305049585-41b8d277d68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a ocean",
        url :  "https://images.unsplash.com/photo-1451485435476-a244439c78cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a forest",
        url :  "https://images.unsplash.com/photo-1514509353532-1419c0935d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a beach",
        url :  "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a mountain",
        url :  "https://images.unsplash.com/photo-1455305049585-41b8d277d68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a ocean",
        url :  "https://images.unsplash.com/photo-1451485435476-a244439c78cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a forest",
        url :  "https://images.unsplash.com/photo-1514509353532-1419c0935d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a beach",
        url :  "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a mountain",
        url :  "https://images.unsplash.com/photo-1455305049585-41b8d277d68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a ocean",
        url :  "https://images.unsplash.com/photo-1451485435476-a244439c78cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a forest",
        url :  "https://images.unsplash.com/photo-1514509353532-1419c0935d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a beach",
        url :  "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a mountain",
        url :  "https://images.unsplash.com/photo-1455305049585-41b8d277d68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a ocean",
        url :  "https://images.unsplash.com/photo-1451485435476-a244439c78cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a forest",
        url :  "https://images.unsplash.com/photo-1514509353532-1419c0935d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },{
        title : "At a beach",
        url :  "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a mountain",
        url :  "https://images.unsplash.com/photo-1455305049585-41b8d277d68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a ocean",
        url :  "https://images.unsplash.com/photo-1451485435476-a244439c78cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a forest",
        url :  "https://images.unsplash.com/photo-1514509353532-1419c0935d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a beach",
        url :  "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a mountain",
        url :  "https://images.unsplash.com/photo-1455305049585-41b8d277d68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a ocean",
        url :  "https://images.unsplash.com/photo-1451485435476-a244439c78cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      },
      {
        title : "At a forest",
        url :  "https://images.unsplash.com/photo-1514509353532-1419c0935d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
      }

    ];

    getWindowIndex(index: number){
      return Math.abs(this.currentPage - index) < 5;
    }
}
