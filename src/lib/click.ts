'use client';

import { useSound } from 'use-sound';

export function useClick() {
  const result = useSound('/click.ogg', {
    volume: 0.10,
  });

  return result;
}
