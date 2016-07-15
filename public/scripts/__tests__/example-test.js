jest.unmock('../example.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBox from '../example.jsx';

describe('Example', () => {

  it('verify render', () => {
    const commentBox = TestUtils.renderIntoDocument(
      <CommentBox/>
    );

    const commentBoxNode = ReactDOM.findDOMNode(commentBox);

    expect(commentBoxNode.parentElement.innerHTML).toEqual('<div data-reactroot="" class="commentBox">Hello, world! I am a CommentBox.</div>');
  });

});
