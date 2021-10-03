import React, { ReactNode } from 'react';
import { PageTitle } from './PageTitle';

interface Props {
  title?: string;
  children: ReactNode;
}

export const Page = ({ title, children }: Props) => (
  <div>
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </div>
);
