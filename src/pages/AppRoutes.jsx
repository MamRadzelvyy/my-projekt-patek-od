import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Article from "./Article/Article"
import A from "./A/A"
import B from "./B/B"
import C from "./C/C"
import D from "./D/D"
import E from "./E/E"
import F from "./F/F"
import G from "./G/G"
import H from "./H/H"
import Error from "./Error/Error"

export default function AppRoutes() {
  return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/article" element={<Article />} />
    <Route path="/A" element={<A />} />
    <Route path="/B" element={<B />} />
    <Route path="/C" element={<C />} />
    <Route path="/D" element={<D />} />
    <Route path="/E" element={<E />} />
    <Route path="/F" element={<F />} />
    <Route path="/G" element={<G />} />
    <Route path="/H" element={<H />} />
    <Route path="/*" element={<Error />} />
</Routes>
</BrowserRouter>

  )
}
