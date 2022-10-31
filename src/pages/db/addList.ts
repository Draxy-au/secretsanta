import { request, gql } from "graphql-request";



export const db_CreateNewList = (listName:string) => {
  const mutation = gql`
    {
      mutation createSecretSantaList(data: {listName: "${listName}"}) {
        id
        listName
        slug
      }
    }
  `;

  request(
    "https://api-ap-southeast-2.hygraph.com/v2/cl9urvipe3t4901ui21uw00dx/master",
    mutation
  ).then((data) => console.log(data));
}