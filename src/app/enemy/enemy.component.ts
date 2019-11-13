import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css']
})
export class EnemyComponent implements OnInit
  {
  laser_power = 10;
  ai_timer = null;

  constructor()
    {
    // Fire AI decision-making once per second.
    this.ai_timer = setInterval (this.ai_step, 1000);
    }

  ngOnInit() {}

  private ai_step()
    {
    }
  }
