import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.css']
})
export class PlayerRankingComponent implements OnInit {

  players: any = [];
  @Input() isAdmin: boolean;
  @Input() searchText: String;

  constructor(private playerService: PlayerService, private authService: AuthService, private router: Router) { 
    this.playerService.GetPlayers().subscribe(data => {
      this.players = data;
    })
  }

  ngOnInit() {
    
  }

  onDelete(player: Player, id: any){
    this.playerService.DeletePlayer(id).subscribe()
    this.players = this.players.filter(p => p !== player)
  }
}
