import axios from "axios";
export const Practise = () => {
  const SubmitFun = () => {
    axios
      .post("http://localhost:5000/practise", { name: "nikitha" })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error occured");
      });
  };
  return (
    <div>
      <p>Practise page</p>
      <button onClick={SubmitFun}>Submit</button>
    </div>
  );
};
