import Menu from "../../components/Menu/Menu";
import { useState, useEffect } from "react";

export default function Article() {
  const [cookies, setCookies] = useState(0);

  const increaseCookies = () => {
    setCookies(cookies + 1);
  };

  useEffect(() => {
    document.title = "Cookie clicker loaded";
  }, []);
  useEffect(() => {
    document.title = cookies;
  }, [cookies]);

  return (
    <>
      <Menu />
      <button onClick={increaseCookies}>Increase cookies</button>
      <p>Cookies: {cookies}</p>
      <p>Article</p>
    </>
  );
}
