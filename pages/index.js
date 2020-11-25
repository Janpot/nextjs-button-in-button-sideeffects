import * as React from 'react';
import { Button } from '@material-ui/core';

function ButtonInButton () {
  return (
    <Button>
      <div>
        button
      </div>
    </Button>
  );
}

export default function Dashboard () {
  return (
    <div>
      <ButtonInButton />
      <ButtonInButton />
      <div>foo</div>
    </div>
  );
}
