import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, group } from '@angular/animations';

@Component({
  selector: 'animbox',
  template: `
    <div [@changeState]="currentState" (@changeState.start)="animationBegin($event)" (@changeState.done)="animationEnd($event)" class="mybox mx-auto"></div>
    <div class="msbox mx-auto">{{msg}}</div>
  `,
  styles: [`
    .mybox {
      background-color: #47748f;
      width: 200px;
      height: 200px;
      border-radius: 6px;
      margin: 6rem;
    }
    .msgbox {
      margin: 2rem;
      padding-top:2rem;
      font-size: 1.8rem;
      text-align: center;
    }
  `],
  animations: [
    trigger('changeState', [
      state('original', style({
        backgroundColor: '#47748f',
        transform: 'scale(1)'
      })),
      state('basic', style({
        backgroundColor: '#440000',
        transform: 'scale(2)'
      })),
      state('delaying', style({
        backgroundColor: '#812170',
        transform: 'scale(1.6)'
      })),
      state('easing', style({
        backgroundColor: '#985b00',
        transform: 'scale(2.2)'
      })),
      state('stepped', style({
        backgroundColor: '#549a76',
        transform: 'scale(1)'
      })),
      state('parallel', style({
        backgroundColor: '#065e65',
        transform: 'scale(0.4)'
      })),
      transition('* => basic', animate('800ms')),
      transition('* => original', animate('200ms')),
      transition('* => delaying', animate('800ms 1200ms ease-out')),
      transition('* => easing', animate('800ms ease-in-out')),
      transition('* => stepped', [
        animate('3000ms ease-in-out', keyframes([
          style({backgroundColor: '#dd9344', transform: 'scale(1.4)', offset: 0.2}),
          style({backgroundColor: '#5c2346', transform: 'scale(0.8)', offset: 0.4}),
          style({backgroundColor: '#1b1b1b', transform: 'scale(1.2)', offset: 0.7}),
          style({backgroundColor: '#549a76', transform: 'scale(1)', offset: 0.9})
        ]))
      ]),
      transition('* => parallel', [
        group([
          animate('1000ms ease-out', style({
            backgroundColor: '#065e65'
          })),
          animate('2000ms ease-out', style({
            transform: 'scale(1.4)'
          }))
        ])
      ]),
    ])
  ]
})

export class AnimboxComponent {
  @Input() currentState: string | undefined;

  msg = "rest";
    animationBegin(e: {phaseName: string, fromState: string, toState: string, totalTime: number}) {
        this.msg = e.phaseName + ": " + e.fromState + " => " + e.toState + " [" + e.totalTime + "]";
    }
    animationEnd(e: {phaseName: string, fromState: string, toState: string, totalTime: number}) {
      this.msg = e.phaseName + ": " + e.fromState + " => " + e.toState + " [" + e.totalTime + "]";
      setTimeout(() => { this.msg = "" }, 3000);
    }

}
