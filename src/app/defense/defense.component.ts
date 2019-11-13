import { Component, OnInit } from '@angular/core';

@Component(
  {
  selector: 'app-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.css']
  })

export class DefenseComponent implements OnInit
  {
  forward = 0;
  port = 1;
  starboard = 2;
  aft = 3;
  shield_count = 4;
  shields = [];
  hull_integrity = 100;
  overall_shield_percentage = 100;

  constructor()
    {
	  for (var s = 0; s < this.shield_count; s += 1)
	    {
	    this.shields[s] = 100;
	    }
    }

  ngOnInit()
    {
    }

	public hit (side, damage)
	  {
	  this.shields[side] -= damage;
		this.calculate_overall_shield_percentage();
	  }

	private calculate_overall_shield_percentage()
		{
		var sum = 0;
		for (var s = 0; s < this.shield_count; s += 1)
			{
      sum += this.shields[s];
			}
		this.overall_shield_percentage = sum / this.shield_count;
		}
  }
