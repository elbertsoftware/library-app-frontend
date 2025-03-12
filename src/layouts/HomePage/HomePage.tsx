import React from 'react';

import { ExploreTopBooks } from './components/ExploreTopBooks';
import { Carousel } from './components/Carousel';
import { Heros } from './components/Heros';
import { LibraryServices } from './components/LibraryServices';

export const HomePage = () => {
  return (
    <React.Fragment> {/* same as empty opening tag <> */}
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      {/* same as empty closing tag </> */}
    </React.Fragment>
  )
}