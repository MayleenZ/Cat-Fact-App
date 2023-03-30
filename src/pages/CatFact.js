import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function CatFact() {
  let { parameter } = useParams();
  //dont have to specifiy what the parameter is, it knows from the url what the parameter is using the useParams() from react-router-dom
  //The parameter is this url is :number
  const url = `https://meowfacts.herokuapp.com/?${Math.floor(Math.random() * 365)}`;
console.log(parameter) //The parameter is : and then the number goes after
  const [catfact, setCatfact] = useState(null);
  //we are destructuring useState so it return an array with two elements. the brackets are used to destructure.

  const getCatFact = async () => {
    try {
      const response = await axios.get(url);
      setCatfact(response.data);
      //the first line is from axios to make a get request to the url and return cat fact data using the setcatfact function.
      //This is why we use usestate bc our data will change
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <div>
      <h1 className='cat-fact'>Cat Fact</h1>
      {catfact && <p className='cat-fact'>{catfact.data}</p>}
      <img src = 'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=' width="400px" alt='cat'></img>
      <br />
    </div>
  );
}

export default CatFact;