import { Component, Inject } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { Observable } from "rxjs/Observable";
import { Store } from 'redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
  counter =0; 

@select() count$: Observable<number>;

  constructor (private ngRedux: NgRedux<IAppState>){
     ngRedux.subscribe(() => this.readState());
    this.readState();
    
  }



   readState() {
     debugger;
    const state: IAppState = this.ngRedux.getState() as IAppState;
    this.counter = state.counter;
  }

  increment(){
    this.ngRedux.dispatch({type: 'INCREMENT'});
  }
}
