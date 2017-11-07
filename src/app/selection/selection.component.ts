import { Component } from '@angular/core';

@Component({
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  players = [
  	{"name":"Bulbasaur","type":"grass","avatar":"\/images\/bulbasaur.png","health":200,"agility":45,"attack":49,"defense":49,"attacks":[{"name":"Tackle","power":30,"type":"normal","accuracy":95},{"name":"Vine Whip","power":45,"type":"grass","accuracy":95},{"name":"Razor Leaf","power":55,"type":"grass","accuracy":90}]},{"name":"Pikachu","type":"electric","avatar":"\/images\/pikachu.png","health":185,"agility":90,"attack":55,"defense":40,"attacks":[{"name":"Quick Attack","power":35,"type":"normal","accuracy":95},{"name":"Thunder Shock","power":40,"type":"electric","accuracy":95},{"name":"Thunderbolt","power":60,"type":"electric","accuracy":90}]},{"name":"Charmander","type":"fire","avatar":"\/images\/charmander.png","health":190,"agility":65,"attack":52,"defense":43,"attacks":[{"name":"Scratch","power":35,"type":"normal","accuracy":95},{"name":"Ember","power":40,"type":"fire","accuracy":95},{"name":"Flame Burst","power":65,"type":"fire","accuracy":90}]},{"name":"Squirtle","type":"water","avatar":"\/images\/squirtle.png","health":198,"agility":43,"attack":48,"defense":65,"attacks":[{"name":"Tackle","power":35,"type":"normal","accuracy":95},{"name":"Water Gun","power":40,"type":"water","accuracy":95},{"name":"Water Pulse","power":60,"type":"water","accuracy":90}]}];

}
