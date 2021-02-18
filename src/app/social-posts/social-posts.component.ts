import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  showForm: boolean = false;
  myPosts: Post[] = [
    {
      title: 'somthing',
      thought: 'today',
    },
    {
      title: 'Angular',
      thought: 'A lot ..',
    },
    {
      title: 'tomorrow ',
      thought: 'Hope',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onDelete = (index: number): void => {
    this.myPosts.splice(index, 1);
  };
  onSubmit = (post: Post): void => {
    this.myPosts.push(post);
    this.toggleForm();
  };
  toggleForm = () => {
    this.showForm = !this.showForm;
  };
}
