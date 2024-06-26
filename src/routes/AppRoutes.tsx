import { Route, Routes } from "react-router-dom"
import { ROUTES } from "../utils/routes"
import HomePage from "../pages/HomePage/HomePage"
import PaginationV1 from "../pages/PaginationV1/PaginationV1"
import InfiniteScroll from "../pages/InfiniteScroll/InfiniteScroll"
import HookForm from "../pages/HookForm/HookForm"



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.PAGINATIONv1} element={<PaginationV1 />} />
      <Route path={ROUTES.INFINITE_SCROLL} element={<InfiniteScroll />} />
      <Route path={ROUTES.HOOK_FORM} element={<HookForm />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}