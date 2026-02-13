import Article from "./components/Article";
import styles from "./App.module.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Emma",
      surname: "Watson",
      gender: "female",
      age: 35,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hG7GD7aa5R3syPCkANL9RmSfyA2-Wg5JQg&s",
    },

    {
      id: 2,
      name: "Tom",
      surname: "Hardy",
      gender: "male",
      age: 48,
      imgSrc:
        "https://media.houseandgarden.co.uk/photos/686537f2be45bcdcc6138428/16:9/w_2560%2Cc_limit/GettyImages-2210458687.jpg",
    },

    {
      id: 3,
      name: "Kate",
      surname: "Backinsale",
      gender: "female",
      age: 52,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp76mZIONYNYCfyjKJq_eoCbxjJbV9erVRTw&s",
    },

    {
      id: 4,
      name: "Killian",
      surname: "Murphy",
      gender: "male",
      age: 48,
      imgSrc:
        "https://www.shutterstock.com/editorial/image-editorial/O1TeA8y7N0j9k220NDk1OQ==/cillian-murphy-440nw-8965272z.jpg",
    },
  ];
  return (
    <div className={styles.userBox}>
      {/* <Article user={user} /> */}
      {/* <Article user={user1} /> */}
      {/* <Article user={user2} /> */}
      {/* <Article user={user3} /> */}
      {users.map((user) => {
        return <Article user={user} />;
      })}
    </div>
  );
}
export default App;
