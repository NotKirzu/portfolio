import { hookstate, useHookstate } from '@hookstate/core';
import { localstored } from '@hookstate/localstored';
import { useMedia } from 'react-use';
import { useEffect } from 'react';


export const STATE_KEY = 'settings';

const settingsState = hookstate<{
  animations: boolean | null;
  sound: boolean;
}>({
  animations: null,
  sound: true,
}, localstored({ key: STATE_KEY }));

export function usePersistantState() {
  const noMotionPreference = useMedia('(prefers-reduced-motion: no-preference)', true);

  const state = useHookstate(settingsState);

  useEffect(() => {
    if (state.get().animations === null) {
      state.merge({
        animations: noMotionPreference,
      });
    }
  }, [noMotionPreference, state]);

  return state;
}