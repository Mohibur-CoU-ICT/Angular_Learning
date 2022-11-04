import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('user') userName!: string;
  @Input() name!: string;

  constructor() {
    console.log('constructor of UserComponent called.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges of UserComponent called.', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit of UserComponent called.');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck of UserComponent called.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit of UserComponent called.');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked of UserComponent called.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit of UserComponent called.');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked of UserComponent called.');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy of UserComponent called.');
  }

}