import { type ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  // Replace with your auth condition

  return children;
};

export default PublicRoute;
