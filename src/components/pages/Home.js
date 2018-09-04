import React from "react";
import { Expertise } from './Expertise';
import { HomeBanner } from '../banner/HomeBanner';

export default function Home() {
  document.body.classList.remove('page-template-default');
  return (
    <div>
      <HomeBanner />
      <Expertise />
    </div>
  );
}
