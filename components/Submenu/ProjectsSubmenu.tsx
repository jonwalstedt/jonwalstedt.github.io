import React from 'react';
import Submenu, { SubmenuItem } from './Submenu';

const ProjectsSubmenu = (): JSX.Element => (
  <Submenu>
    <SubmenuItem name="SVT Play" to="/projects/svt-play" />
    <SubmenuItem name="Autodesk" to="/projects/autodesk" />
    <SubmenuItem
      name="Vigorjs ComponentManager"
      to="/projects/vigorjs-componentmanager"
    />
    <SubmenuItem
      name="Fantasy Interactive"
      to="/projects/fantasy-interactive"
    />
    <SubmenuItem name="Kambi Sportsbook" to="/projects/kambi-sportsbook" />
    <SubmenuItem name="Lydmar Hotel" to="/projects/lydmar-hotel" />
    <SubmenuItem
      name="Sectra Communications"
      to="/projects/sectra-communications"
    />
    <SubmenuItem
      name="Schnoor Design Haus"
      to="/projects/schnoor-design-haus"
    />
    <SubmenuItem name="Comhem" to="/projects/comhem" />
    <SubmenuItem name="Unionen" to="/projects/unionen" />
    <SubmenuItem name="1177" to="/projects/1177" />
    <SubmenuItem name="Volkswagen" to="/projects/volkswagen" />
    <SubmenuItem name="Tobaksfakta" to="/projects/tobaksfakta" />
  </Submenu>
);

export default ProjectsSubmenu;
