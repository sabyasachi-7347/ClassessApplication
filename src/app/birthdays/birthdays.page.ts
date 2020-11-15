import { Component, OnInit, ViewChild } from '@angular/core';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';
@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.page.html',
  styleUrls: ['./birthdays.page.scss'],
})
export class BirthdaysPage implements OnInit {
  // idleState: string;
  // timedOut: boolean;

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';
  // @ViewChild(Nav,{static:true}) nav: Nav;
  constructor(public router:Router,
    private idle: Idle, private keepalive: Keepalive) { 
        // sets an idle timeout of 5 seconds, for testing purposes.
        idle.setIdle(15);
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        idle.setTimeout(15);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    
        idle.onIdleEnd.subscribe(() => { 
          this.idleState = 'No longer idle.'
          console.log(this.idleState);
          this.reset();
        });
        
        idle.onTimeout.subscribe(() => {
          this.idleState = 'Timed out!';
          // this.timedOut = true;
          console.log(this.idleState);
          // idle.onIdleStart.subscribe();
          this.router.navigate(['login']);
        });
        
        idle.onIdleStart.subscribe(() => {
            this.idleState = 'You\'ve gone idle!'
            console.log(this.idleState);
            // this.childModal.show();
        });
        
        idle.onTimeoutWarning.subscribe((countdown) => {
          this.idleState = 'You will time out in ' + countdown + ' seconds!'
          console.log(this.idleState);
        });
    
        // sets the ping interval to 15 seconds
        keepalive.interval(15);
    
        keepalive.onPing.subscribe(() => this.lastPing = new Date());
    
        this.reset();
    
  }

  ngOnInit() {
  }
  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
      }


}
