import {useEffect, useState} from 'react'
import './App.css'



export function App() {

    const[searchinfo,setsearchinfo] = useState<string>("125");
const[users, setUsers] = useState<{login: string, avatar_url:string}[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/search/users?q="+searchinfo+"+in:login")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.items);
          console.log(data);
        })
        .catch((error) => console.log(error));
  }, [searchinfo]);


  return (
<>
    <div>

        <div className="searchies">
            <input  className="searchbar" id="searchybarry" placeholder="Search Username Here"></input>
            <button className="searchbutton" onClick = {() => {
                setsearchinfo((document.getElementById("searchybarry") as HTMLInputElement).value)
            }}>Search
            </button>
        </div>
            <div>
                {users.map((user,index) => (
                    <div key={index} className="user">
                        <img className="avatar" src={user.avatar_url} alt="user avatar" />
                        <h2>{user.login}</h2>
                    </div>))}
            </div>
    </div>
</>
)
}


