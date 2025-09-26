import { ChangeBorderDirective } from './change-border.directive';

describe('ChangeBorderDirective', () => {
  it('should create an instance', () => {
    // Create a mock ElementRef
    const mockElementRef = { nativeElement: document.createElement('div') } as any;
    const directive = new ChangeBorderDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
