import { Component } from '@angular/core';
import { BookService, Book } from '../core/services/api.client.generated';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-component',
  templateUrl: './sell.component.html'
})
export class SellComponent {
  public book: Book;
  constructor(private BookService: BookService, private Router: Router) {
    this.book = new Book();
  }

  public submit() {
    this.BookService.postBook(this.book).subscribe(() => {
        //redirect to home
      this.Router.navigate(['/']);
    }, error => { console.log(error); });
    
  }
}
