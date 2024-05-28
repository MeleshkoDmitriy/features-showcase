import React from 'react';
import styles from './WithSidebar.module.scss';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const WithSidebar = (WrappedComponent: React.FC<T>) => {
  return (props: T) => {
    return (
      <div
        id="about"
        className={styles.wrapper}>
        <aside className={styles.sidebarContainer}>
          <Sidebar />
        </aside>
        <main className={styles.componentContainer}>
          <WrappedComponent {...props} />
        </main>
      </div>
    );
  };
};
