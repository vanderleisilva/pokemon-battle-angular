import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../battle/character/character.service';
import { Character } from '../battle/character/character';

@Component({
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  private players : Character[];	
  private api : string;	
  
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
  	this.api = this.characterService.apiUrl;
  	this.characterService.all().subscribe(characters => this.players = characters);
  }

}
