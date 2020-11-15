import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacaltydashboardPage } from './facaltydashboard.page';

describe('FacaltydashboardPage', () => {
  let component: FacaltydashboardPage;
  let fixture: ComponentFixture<FacaltydashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacaltydashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacaltydashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
