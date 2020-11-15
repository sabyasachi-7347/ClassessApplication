import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BirthdaysPage } from './birthdays.page';

describe('BirthdaysPage', () => {
  let component: BirthdaysPage;
  let fixture: ComponentFixture<BirthdaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BirthdaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
