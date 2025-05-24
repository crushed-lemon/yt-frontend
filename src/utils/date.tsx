import { formatDistanceToNow } from 'date-fns';

export function getRelativeTime(date: Date | string | number) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
