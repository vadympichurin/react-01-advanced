import React from 'react';
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

const Test = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  const match = useRouteMatch();

  console.log(match);

  const onGoBack = () => {
    history.push('/');
  };

  return (
    <div>
      Test
      <button onClick={onGoBack}>"Go back"</button>
    </div>
  );
};

export default Test;
