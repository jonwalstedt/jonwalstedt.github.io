import React from 'react';
import Submenu, { SubmenuItem } from './Submenu';

const LabsSubmenu = (): JSX.Element => (
  <Submenu>
    <SubmenuItem name="Football field" to="/labs/football-field" />
    <SubmenuItem name="Dimmer switch" to="/labs/dimmer-switch" />
    <SubmenuItem name="Dial" to="/labs/dial" />
    <SubmenuItem name="Canvas experiment" to="/labs/canvas-experiment" />
  </Submenu>
);

export default LabsSubmenu;
