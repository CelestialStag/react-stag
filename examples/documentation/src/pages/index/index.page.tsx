import { Box } from '@stag/react';

import { Counter } from '@components/Counter';

export const Page = () => {
  return (
    <div>
      <Counter />
      <Box>
        <h1>Welcome</h1>
        This page is:
      </Box>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </div>
  );
};
