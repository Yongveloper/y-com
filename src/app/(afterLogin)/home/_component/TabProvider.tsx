'use client';

import { createContext, useState } from 'react';

export const TabContext = createContext({
  tab: 'rec',
  setTab: (value: 'rec' | 'fol') => {},
});

interface ITabProvider {
  children: React.ReactNode;
}

export default function TabProvider({ children }: ITabProvider) {
  const [tab, setTab] = useState('rec');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
