import { Callback, register } from './handler';
import wrapper from './routerWrapper';

export default function observer(callback: Callback): void {
  register(callback);
  wrapper();
}
