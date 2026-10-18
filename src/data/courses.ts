import type { Bi } from '../lib/lang';

export interface Course {
  code?: string;
  title: Bi;
  level: Bi;
  credits?: number;
  description?: Bi;
  url?: string;
}

// The lab will supply its course list. Add entries here, for example:
// { code: '2302xxx', title: { en: '…', th: '…' }, level: { en: 'Undergraduate', th: 'ปริญญาตรี' }, credits: 3 }
export const courses: Course[] = [];
