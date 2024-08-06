import {useProductDataQuery} from "../../redux/api/product-api.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import {Typography} from "antd";
import RenderCard from "../../components/render-card/RenderCard.jsx";

const {Title} = Typography

const Home = () => {
  console.log(useProductDataQuery)
  const {data} = useProductDataQuery()
  const payload = data?.payload

  return (
      <div>
        <Navbar/>
        <div className="my-[100px]">
          <Title className="text-center block pb-2">Products</Title>
          <div className="max-w-[1300px] w-full grid grid-cols-4 gap-4 m-auto mt-4">
            {
                payload && payload?.map(product =>
                    <RenderCard key={product._id} product={product} />
                )
            }
          </div>
        </div>
      </div>
  )
}
export default Home
