import { Component } from '@angular/core';
import { Hero } from './hero';


const HEROES: Hero [] = [
	{ id: 11, name: 'Adham'},
	{ id: 12, name: 'Alan'},
	{ id: 13, name: 'Jennifer'},
	{ id: 14, name: 'Sheana'},
	{ id: 15, name: 'Shane'},
	{ id: 16, name: 'Luis'},
	{ id: 17, name: 'Christian'},
	{ id: 18, name: 'Eddie'},
	{ id: 19, name: 'Meg'},
	{ id: 20, name: 'Anna'}
];

@Component({
  selector: 'my-app',
  styles: [`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .heroes {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 15em;
	  }
	  .heroes li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .heroes li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .heroes li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .heroes .text {
	    position: relative;
	    top: -3px;
	  }
	  .heroes .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
	  }
	`],
  template: `
  <h2>My Heroes</h2>

  <ul class="heroes">

  	<li *ngFor="let hero of heroes"
  	[class.selected]="hero === selectedHero" 
  	(click)="onSelect(hero)">
  	<!-- each hero goes here -->
  		<span class="badge">{{hero.id}}</span> {{hero.name}}
  	</li>

  </ul>
  
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
})
export class AppComponent  { 
	title = 'Tour of Heroes';

	selectedHero: Hero;

	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}

	heroes = HEROES;
}


