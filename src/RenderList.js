import React from 'react';

const RenderList = ({ list }) => {
  const renderList = data => data.map(datum => <li className="delivery-list" key={datum}>{datum}</li>);
  return (
    <div>
      <h4>Available Delivery Zones</h4>
      {list && list.length ? <ul>{renderList(list)}</ul> : <div>nothing found</div>}
    </div>
  );
};

export default RenderList;
