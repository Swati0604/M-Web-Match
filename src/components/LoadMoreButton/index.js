function LoadMoreButton(props) {
  return (
    <button className='load-more-button' onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
}

export default LoadMoreButton;
