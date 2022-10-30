import { request, gql } from "graphql-request";
import { useEffect } from "react";

import "./list.scss";

const List = () => {
  const query = gql`
    {
      secretSantaLists {
        createdAt
        id
        listName
        publishedAt
        slug
        updatedAt
        people {
          fullName
        }
      }
    }
  `;

  useEffect(() => {
    request(
      "https://api-ap-southeast-2.hygraph.com/v2/cl9urvipe3t4901ui21uw00dx/master",
      query
    ).then((data) => console.log(data));
  }, []);

  return <div className='list'>LIST</div>;
};

export default List;
