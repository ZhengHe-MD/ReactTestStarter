import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import {
  Office,
  Desk,
} from '../../../src/views/OfficeExample';

import _ from 'lodash';

const wrapper = shallow(
  <Office
    name="MadaData"
    deskNum={6}
    id="mada"
  />
);

describe('enzymeAPI: find(selector) and findWhere(fn)', () => {

  it('should support constructor select', () => {
    expect(wrapper.find(Desk).length).toEqual(6);
  });

  it('should support displayName select', () => {
    expect(wrapper.find('Desk').length).toEqual(6);
  });

  it('should support prop select', () => {
    expect(wrapper.find({ className: 'MadaData' }).length).toEqual(1);
  });

  it('should support class select', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should support id select', () => {
    expect(wrapper.find('#mada').length).toEqual(1);
  });

  it('should support findwhere', () => {
    expect(wrapper.findWhere(n => n.type() === 'div').length).toEqual(1);
  })

});

describe('enzymeAPI: contains', () => {

  it('the current node should contains <Desk />', () => {
    expect(wrapper.contains(<Desk />)).toEqual(true);
  });
});

describe('enzymeAPI: hasClass', () => {

  it('the h1 node should hasClass MadaData', () => {
    expect(wrapper.find('h1').hasClass('MadaData'));
  });
});

describe('enzymeAPI: is', () => {

  it('the h1 matches the class MadaData', () => {
    expect(wrapper.find('h1').is('.MadaData')).toEqual(true);
  });
});

describe('enzymeAPI: children, childAt', () => {

  it('the Office should have deskNum + 1 children', () => {
    expect(wrapper.find('ol').children().length).toEqual(6);
  });

  it('the first child of Office should be an h1 node', () => {
    expect(wrapper.find('div').childAt(0).type()).toEqual('h1');
  });
});

describe('enzymeAPI: parents, parent', () => {

  it('the parent of ol node should have length 1 with shallow rendering', () => {
    expect(wrapper.find('ol').parents().length).toEqual(1);
  });

  it('the parents of ol node should have length 1 with shallow rendering', () => {
    expect(wrapper.find('ol').parents().length).toEqual(1);
  });
});

describe('enzymeAPI: closest', () => {

  it('the closest Desk should have null type', () => {
    expect(wrapper.closest('Desk').type()).toEqual(null);
  });
});

describe('enzymeAPI: shallow', () => {

  it('shallow renders the li', () => {
    const DeskWrapper = wrapper.find('ol').childAt(0).shallow();
    expect(DeskWrapper.find('li').length).toEqual(1);
  });
});

describe('enzymeAPI: render', () => {

  it('returns a CheerioWrapper of current node', () => {
    const CheerioWrapper = wrapper.find('h1').render();
    expect(CheerioWrapper.find('.MadaData').length).toEqual(1);
  });
});

describe('enzymeAPI: unmount', () => {
  const spy = sinon.spy(Office.prototype, 'componentWillUnmount');
  const OfficeWrapper = shallow(
    <Office
      name="MadaData"
      deskNum={6}
      id="mada"
    />
  );
  it('componentWillUnmount should not be called before unmount', () => {
    expect(spy.calledOnce).toEqual(false);
  });

  it('componentWillUnmount should be called after unmount', () => {
    OfficeWrapper.unmount();
    expect(spy.calledOnce).toEqual(true);
  });
})

describe('enzymeAPI: text, html', () => {

  it('should render text MadaData', () => {
    expect(wrapper.text().includes('MadaData')).toEqual(true);
  });

  it('should include the text computer in html', () => {
    expect(wrapper.html().includes('Computer')).toEqual(true);
  });
});

describe('enzymeAPI: first last', () => {

  it('first node is div node', () => {
    expect(wrapper.first().type()).toEqual('div');
  });

  it('last node is also div node', () => {
    expect(wrapper.last().type()).toEqual('div');
  });
});

describe('enzymeAPI: state, context, props, prop, key', () => {

  it('current state should contains name', () => {
    expect(wrapper.state().name).toEqual('MadaData');
  });

  it('current context should contains store', () => {
    expect(_.isEmpty(wrapper.context())).toEqual(false);
  });

  it('current props should contains the id passed down to h1', () => {
    expect(wrapper.props().id).toEqual('mada');
  });

  it('same with above but through prop API', () => {
    expect(wrapper.prop('id')).toEqual('mada');
  });

  it('the key value of the first li should be 0', () => {
    // the .key API doesn't work for unknown reason use .node.key instead
    // expect(wrapper.find('li').at(0).key()).toEqual(0);
    expect(wrapper.find('li').at(1).node.key).toEqual('1');
  });
});

describe('enzymeAPI: simulate', () => {
  const DeskWrapper = shallow(
    <Desk />
  );
  const ComputerWrapper = DeskWrapper.find('Computer').shallow();
  it('click on the button inside Desk will made the desk taken', () => {
    expect(DeskWrapper.state().taken).toEqual(false);
    ComputerWrapper.find('.computer').simulate('click');
    expect(DeskWrapper.state().taken).toEqual(true);
  });
});

describe('enzymeAPI: setState, setProps, setContext', () => {
  const officeWrapper = shallow(
    <Office
      name="MadaData"
      deskNum={6}
      id="mada"
    />
  );
  it('set the name of Office to be MaDaJia', () => {
    officeWrapper.setState({ name: 'MaDaJia' });
    expect(officeWrapper.state().name).toEqual('MaDaJia');
  });

  it('set the id of div to be madajia', () => {
    officeWrapper.setProps({ id: 'madajia' });
    expect(officeWrapper.props().id).toEqual('madajia');
  });
  // it's better not to use context, if you have to
  // use it just as setState and setProps
});



