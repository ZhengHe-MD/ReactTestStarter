import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import {
  Office,
  Desk,
} from '../../../src/views/OfficeExample';

const wrapper = mount(
  <Office
    name="MadaData"
    deskNum={6}
    id="mada"
  />
);

// APIs for full rendering are not different from shallow rendering.
// However, you need to set the global document and window.
