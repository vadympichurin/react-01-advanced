import React, { useState, useEffect, useRef } from 'react';

const styles = {
  clockface: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: 'center',
  },
};

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const inervalId = useRef();

  useEffect(() => {
    inervalId.current = setInterval(() => {
      console.log('Интервал каждые 1000мс ' + new Date());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('Вызывается перед каждым useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(inervalId.current);
  };

  return (
    <>
      <p style={styles.clockface}>Текущее время: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </>
  );
};

export default Clock;

// export default class Clock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//   this.intervalId = setInterval(() => {
//     this.setState({ time: new Date() });
//   }, 1000);
// }

//   componentWillUnmount() {
//     this.stop();
//   }

// stop = () => {
//   clearInterval(this.intervalId);
// };

//   render() {
//     return (
//       <>
//         <p style={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Stop
//         </button>
//       </>
//     );
//   }
// }
