import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalaryPage } from './galary.page';

describe('GalaryPage', () => {
  let component: GalaryPage;
  let fixture: ComponentFixture<GalaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
