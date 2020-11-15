import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GustdashboardPage } from './gustdashboard.page';

describe('GustdashboardPage', () => {
  let component: GustdashboardPage;
  let fixture: ComponentFixture<GustdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GustdashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GustdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
