import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';    // Angular 15 >= so
import { Of } from 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit 
{
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  constructor(private userService: UserService) 
  { 
    Of('');
  }
  
  ngOnInit() 
  {
    // Stockach
  }
}
export class UserDataSource extends DataSource<any> 
{
  constructor(private userService: UserService) 
  {
    super();
  }
  
  connect(): Observable<User[]> 
  {
    return this.userService.getUser();
  }
  
  disconnect() {}

}