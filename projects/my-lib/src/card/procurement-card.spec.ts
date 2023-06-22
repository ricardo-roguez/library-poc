import { ProcurementCard } from './procurement-card';
import { TestBed } from '@angular/core/testing';

describe('ProcurementCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ProcurementCard],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProcurementCard);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
