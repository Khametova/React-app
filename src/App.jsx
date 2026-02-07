import Article from "./components/Article";
import styles from "./App.module.css";

function App() {
  const user = {
    name: "Emma",
    surname: "Watson",
    gender: "female",
    age: 35,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hG7GD7aa5R3syPCkANL9RmSfyA2-Wg5JQg&s",
  };

  const user1 = {
    name: "Tom",
    surname: "Hardy",
    gender: "male",
    age: 48,
    imgSrc:
      "https://media.houseandgarden.co.uk/photos/686537f2be45bcdcc6138428/16:9/w_2560%2Cc_limit/GettyImages-2210458687.jpg",
  };

  return (
    <div className={styles.userBox}>
      <Article user={user} />
      <Article user={user1} />
    </div>
  );
}
export default App;
