const ListFooter = (props) => {
  return (
    <>
      <div className="list-footer">
        <p>01/01/2021</p>
        <p>{props.total}</p>
      </div>
    </>
  );
};

export default ListFooter;
