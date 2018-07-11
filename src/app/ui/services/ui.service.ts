import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private appColor = '#343a40';
  private appImage = '/assets/logo.svg';
  private appTile = 'egghead-ng-store';
  private appDescription = 'A store built using Angular';

  constructor(private meta: Meta, private title: Title) {}

  public setMetaData(config) {
    const description = config.description || this.appDescription;
    const image = config.image || this.appImage;
    const title = config.title
      ? `${config.title} - ${this.appTile}`
      : this.appTile;
    this.title.setTitle(title);
    const tags = [
      { name: 'description', content: description },
      { name: 'theme-color', content: this.appColor },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: title },
      { name: 'apple-touch-startup-image', content: image },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image }
    ];
    tags.forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }
}
