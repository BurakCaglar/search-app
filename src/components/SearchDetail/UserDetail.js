import React from "react";

const UserDetail = ({ item, name }) => {
  return (
    <div className="basic-info">
      <h2 className="center">About the {name !== undefined && name} </h2>
      <p className="detail-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
        ligula sollicitudin sapien lacinia tempus. Pellentesque ex orci, rutrum
        sed aliquam a, condimentum quis enim. Etiam euismod velit eu est
        tincidunt, ut elementum massa pharetra. Donec eget mauris a quam
        malesuada feugiat vel at lectus.
      </p>
      {item.length > 0 &&
        item
          .slice(0, 1)
          .map((item, index) => (
            <img loading="lazy" key={index} src={item.contentUrl} alt="" />
          ))}
      <hr />
    </div>
  );
};

export default UserDetail;
