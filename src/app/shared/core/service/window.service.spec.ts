import { TestBed } from '@angular/core/testing';

describe('WindowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Window = TestBed.get(Window);
    expect(service).toBeTruthy();
  });
});
