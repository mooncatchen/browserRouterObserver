/* eslint-disable @typescript-eslint/no-explicit-any */
import handler from './handler';

const ornPushState = window.history.pushState.bind(history);
const ornReplaceState = window.history.replaceState.bind(history);

function pushState(
  state: any,
  title: string,
  url: string,
): void {
  ornPushState(state, title, url);
  handler();
}

function replaceState(
  state: any,
  title: string,
  url: string,
): void {
  ornReplaceState(state, title, url);
  handler();
}

export default function wrapper(): void {
  history.pushState = pushState;
  history.replaceState = replaceState;
  window.addEventListener('popstate', handler);
  window.addEventListener('hashchange', handler);
  // popstate will be fire when document loaded in chrome and safari
  // but not in firefox
  // fire a DOMContentLoaded to invoke handler
  document.addEventListener('DOMContentLoaded', handler);
}
