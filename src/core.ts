import { GtagEvent, PageViewParam } from './events';

export interface GtagConfigOptions {
  send_page_view?: boolean;
  page_path?: string;
  [prop: string]: any;
}

export interface HelperOptions {
  noInit?: boolean;
}

export class GtagHelper {
  private trackingId: string;

  private $initOption: GtagConfigOptions;

  private $destroyed = false;

  private $dataLayer: any[] = [];

  private readonly $tagId: string = 'ga-gtag';

  constructor(
    trackingId: string,
    helperOptions: HelperOptions = {},
    initOption: GtagConfigOptions = { send_page_view: false },
    tagId?: string,
  ) {
    this.trackingId = trackingId;
    this.$initOption = initOption;
    this.$tagId = tagId ?? this.$tagId;
    if (!helperOptions.noInit) {
      this.init();
      this.config();
    }
  }

  get dataLayer() {
    return this.$dataLayer;
  }

  static jsSrcPrefix = 'https://www.googletagmanager.com/gtag/js?id=';

  get jsSrc() {
    return `${GtagHelper.jsSrcPrefix}${this.trackingId}`;
  }

  static getPathWithHash() {
    return `${window.location.pathname}${window.location.hash}`;
  }

  init() {
    if (document.getElementById(this.$tagId)) {
      throw new Error(`gtag with tagId <${this.$tagId}> is inited.`);
    }
    const { head } = document;
    const script = document.createElement('script');
    script.id = this.$tagId;
    script.type = 'text/javascript';
    script.async = true;
    script.src = this.jsSrc;

    head.insertBefore(script, head.firstChild);

    // todo custom name
    window.dataLayer = this.$dataLayer;
    this.gtag('js', new Date());
  }

  config(options?: GtagConfigOptions, trackingId: string = this.trackingId) {
    this.gtag('config', trackingId, { ...this.$initOption, ...options });
  }

  pageView(page_title?: string) {
    const options: PageViewParam = {
      page_title,
      page_location: window.location.href,
      page_path: GtagHelper.getPathWithHash(),
    };

    this.pageViewRaw(options);
  }

  pageViewRaw(options?: PageViewParam) {
    this.event('page_view', options);
  }

  event: GtagEvent = (action: string, options?: any) => {
    return this.gtag('event', action, options);
  };

  set(payload: Record<string, any>) {
    this.gtag('set', payload);
  }

  setUserProperties(payload: Record<string, any>) {
    this.gtag('set', 'user_properties', payload);
  }

  // ! this prefer to google's guide
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  gtag(...params: any[]) {
    // eslint-disable-next-line prefer-rest-params
    this.$dataLayer.push(arguments);
  }

  public destroy() {
    if (this.$destroyed) {
      console.warn(`gtag with tagId <${this.$tagId}> is destroyed before.`);
    }
    delete window.dataLayer;

    const script = document.getElementById(this.$tagId);
    script?.remove();

    this.$destroyed = true;
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Window {
    dataLayer?: any[];
  }
}
