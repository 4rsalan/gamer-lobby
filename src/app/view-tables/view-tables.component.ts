import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-tables',
  templateUrl: './view-tables.component.html',
  styleUrls: ['./view-tables.component.css']
})
export class ViewTablesComponent implements OnInit {

  isAdmin: boolean
  table: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAdmin = this.authService.isLoggedIn();
    this.table = 'players';
  }

  searchTable(search: String){

  }

  changeTable(table: String){
    if (this.isAdmin && table == 'games')
      this.table = 'games'
    else if (table == 'players')
      this.table = 'players'
  }

  logout(){
    this.authService.Logout();
    this.isAdmin = false;
    this.table = 'players';
  }
}
