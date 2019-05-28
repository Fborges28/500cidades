import React from "react";

function PhotoGrid(props){
	const { photos } = props;
  return(
    <div className="PhotoGrid">
      <div className="PhotoGridArea">
	      {
					photos.map((photo, index) => (
						<div className="item" key={index}>
							<img src={photo} />
			      </div>
					))
	      }
      </div>
    </div>
  )
}

export default PhotoGrid;
