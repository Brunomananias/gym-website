import React from 'react';
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {  
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton: React.FC<Props> = ({ children, setSelectedPage }) => {
  return (
    <AnchorLink className="rounded-md bg-amber-300 px-10 py-2 hover:bg-pink-500 hover:text-white"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  );
};

export default ActionButton;
