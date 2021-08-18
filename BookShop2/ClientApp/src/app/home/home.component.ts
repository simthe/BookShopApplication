import { Component } from '@angular/core';
import { BookService, Book, UserBookService, User, UserBook, UserService } from '../core/services/api.client.generated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public books: Book[] = [];
  public activeUser: User;
  public userBooks: number[] = [];

  constructor(private BookService: BookService, private UserService: UserService, private UserBookService: UserBookService) {
    let user = sessionStorage.getItem("activeUser");
    if (user) {
      this.UserService.getUserByEmail(user).subscribe(result => {
        this.activeUser = result;
        this.UserBookService.getUserBooks(result.id).subscribe(r => {
          this.userBooks = r;
        });
      });
    }
    
    this.BookService.getBooks().subscribe(result => {
      this.books = result;
    })
  }

  public subscribe(book: Book) {
    this.UserBookService.postUserBook(new UserBook({ bookID: book.id, userID: this.activeUser.id })).subscribe(result => {
      this.userBooks.push(book.id);
    });
  }

  public canSubscribe(bookID: number) {
    return !(this.userBooks.length > 0 && this.userBooks.includes(bookID));
  }
}
