import GtagHelper from '../src';

describe('core test', () => {
  const trackId = 'testId';
  const gtag = new GtagHelper(trackId);
  it('add script tag', () => {
    const script = document.getElementById('ga-gtag');
    expect(script).not.toBeNil();
    expect(script?.tagName.toLowerCase()).toBe('script');
  });

  it('add script tag with correct url', () => {
    const script = document.getElementById('ga-gtag') as HTMLScriptElement;

    expect(script.src).toStartWith(GtagHelper.jsSrcPrefix);
    expect(script.src).toEqual(gtag.jsSrc);
    expect(script.src).toEqual(`${GtagHelper.jsSrcPrefix}${trackId}`);
  });
});
