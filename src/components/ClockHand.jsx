const ClockHand = (props) => {
    const { angle, id } = props;
        return (
          <div id={id} style={{ transform: `rotate(${angle}deg)` }}></div>
          )
        };
export default ClockHand;