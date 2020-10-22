import './Common.scss'

import React from 'react'

function Loading() {
  return <div>Loading...</div>;
}

function ErrorMessage() {
  return <div>Oops !! something went wrong</div>;
}

function Empty() {
  return (
    <div className="Empty">
      <div className="empty-bg"></div>
      <p className="empty-message">暂无数据</p>
    </div>
  );
}

function NoMore() {
  return <div className="mt-4 mb-5 color-ccc font-12 text-center">没有更多了</div>;
}

export { Loading, ErrorMessage, Empty, NoMore };
