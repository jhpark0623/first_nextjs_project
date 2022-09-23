import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function ssr(props) {
  const [users, setUsers] = useState([]);

  return (
    <Layout>
      <div className="font-bold flex justify-center text-5xl p-6 bg-gray-900 text-white">
        유저 목록
      </div>

      {0 === props.users.length ? <div>Loding...(ssr)</div> : null}

      {props.users?.map((ele) => {
        return (
          <div key={ele.id} className=" m-5 p-3 border-2">
            <ul>
              <li className="text-2xl font-bold my-2">{ele.name}</li>
              <li>아이디 : {ele.username}</li>
              <li>email : {ele.email}</li>
              <li>전화번호 : {ele.phone}</li>
              <li>직장 : {ele.company.name}</li>
              <li>
                <a href={`https://${ele.website}`}>웹사이트 : {ele.website}</a>
              </li>
            </ul>
          </div>
        );
      })}
      <div></div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  return {
    props: {
      users: res.data,
    },
  };
}
