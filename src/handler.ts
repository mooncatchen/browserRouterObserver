import { getUrl, setUrl } from './cache';

export type Callback = (newUrl: string, oldUrl: string) => void;

let defaultCallback: Callback = console.log;

export function register(callback: Callback): void {
  defaultCallback =  callback;
}

export default function handler(): void {
  const oldUrl = getUrl();
  const newUrl = window.location.href;

  // do nothing when url not change
  // hash change will fire both popstate and hashchange event
  if (oldUrl === newUrl) {
    return;
  }

  defaultCallback(newUrl, oldUrl);
  setUrl(newUrl);
}
