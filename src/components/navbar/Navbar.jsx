import {NavLink} from "react-router-dom";
import {FaRegHeart} from "react-icons/fa";
import {SlBasket} from "react-icons/sl";
import {Input} from "antd";
// import {AutoComplete} from "antd";


const Navbar = () => {
  // const [searchData, setSearchData] = useState([{payload: []}])
  // const loadData = async (Text) => {
  //   try {
  //     const res = await axios(`/product/search/${Text}`)
  //     setSearchData(res.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const onSelect = (data) => {
  //   console.log('onSelect', data);
  // };

  return (
      <nav
          className="w-full h-[80px] shadow-2xl flex items-center text-gray-700 text-lg font-bold py-5 bg-[#ffffff29] fixed top-0 left-0 z-20 backdrop-blur-3xl">
        <ul className="w-full flex justify-around items-center gap-4">
          <li><NavLink to=""><img className="w-[200px] h-[60px] object-cover" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV0AAACQCAMAAACcV0hbAAAAyVBMVEX///8AAAD/LCxISEjX19eRkZH09PT4+Pjn5+cGBgbS0tIuLi5ycnJsbGze3t7JycmysrIkJCQ6OjoWFhZNTU3t7e3/ISFeXl4qKipSUlKFhYV6enri4uIzMzOUlJQaGhqlpaW/v78QEBD/4uL/GRn/8fEmJiaqqqptbW0+Pj6IiIj/Ly//rq6dnZ1kZGTCwsL/nZ3/f3//iIj/VFT/dXX/2dn/PDz/6Oj/wMD/srL/Y2P/lZX/w8P/UVH/Q0P/0ND/aWn/DQ3/o6PiYouCAAAJOklEQVR4nO2caWOayhqAISq4ghsii2tjjKZqkza5SXraNOf//6gLswODoiUuOe/zpZEZYXwY3lmpogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAGfH47eH+/uHnP6cuxydk9vKrR7j7+eXUpflkPH+/7l1Rrp++zU5doM/EtzvuFvn9AXpz4/X6KkbvF0SHnHjpxeWGtffUpfokPP5Oyg30/nvqcl0Emt/0uv1WS01QQOn6D0nVDXiC2LCT4thOaiWUUI63RNAloffniYt+/qwGqW5V1UBZHuRV96r3+r8TF/7M8SXhQABnupPLDfS+nbb0Z86ktlXuCGX6klJ1g3bt64nLf9Zsplvlqm2U6y3d7rcT/4BzpkotVmx3vDH0lGzPqXZ790ct70VRLhC5djNNLOKfdLsPxyrr5TEmclfa9nyP6ZEBxhNpGNhtZ7Ir4yxN7tX18zEKepGUsN3h7pzf0yrv0+PHF/NCwXKdrSEX82/aWA1mIdMwsV0/Q9bZL3nlvTtuYCgXEdZRL3ogODAMMuX9KrXb+/OxJYzjZQ5lp6e+R1Fnf2R6e0eeIiN2S8e96mGsUVGr2TLPfif13sWXhrX4fJCzKmaI6pnJya5phzjLXMqUgtVFRS1mzP6W7De8xPNoBTVOxct4+7KQk90mPk0hlzKl4CMVHSNr/i+vPcFv8HdyekxiV1Vb49yKnJfdCjpNN5cypVBsh5foZ+kyEF7+XBG/vevvsgV3qV1VdfMq8gXZraIgOdjDrjJ7e/h9df3ee/rxIm3PUuyq41wKfFl20czuorzft2aIlKaK2K2sPcSiQuze7HMLt3BBds0bFNr3tLsVYndEW0qD6EA+ygYC3RiragrxvlysmqZZLcrugW6gNFxK0a6PTyfmxYd88dZb6NRmlZ/aMvwVtltAJcrpxsf5QLu8m3CLfdiWoruDdkArGGhZQ7vCg3G15PTRz20Vlon5pPHtAM3vO6WmErFbdsKztSPtfgEdcngvqFiya+jUo4JHTz2uLfr4NNMFyp7j7xcw0YJa92PtllV6RG/gP8uKORAeb9/uCAG60o3038yFkFQwRLs+VjQVs+PUPj2F5YpLhpU1rueraJNA1rZy5+/sWrKFjKRdjfxAk9m15vhf1JfXx2qcJT9vKZoynYh28XpgR7w8fuBr5OrVjhpjHh6O220d9vt3cbhdzZyX7K6koyyxW2B2SZBoTgW7bkKuqnr0u6V4Smuxh11TstY9Vo5s94C4a3RDQbVsdgfMLqm7tEaFihL+uHdFmUsTs9ot9mXfDILvMHYoElvy42C7RdxRTrfb4XZ9lfqmdgWHbM1UXdx6jbboILiHfM7C9lwhNZvdNfuyOxx6I/KhX1Y27pLsPOov3YAPmm043G57h12h7pJI6ZQTdoeKXid/FiZBENeMCTVYCEMvq2Nr0wo7ZvMK+2oGu0WSddREk8HVvvBV2t/9oN4C5gPtkj6Rrg35j+J2R0tD03Wdzt6rNm3HNLqdLeh96fwuEMqsMmewS6pu3yRJPh1Fhh+OMpr4MLvT1WYSsGrQhiXUzeza9IqeUFMxloMPLRRlQnJ7/OwG3Ta02y6Nuk2WNpnyI5dtN0E4cqB2R3RwpJHfK44gyNxgx6fDkIV4FeFJ2GGXdPSEFktHYzbTDK/+ueyidVFqt04zk4FGITIUJU//XCGdr0ibU65ltTuMXSvKp7JbRw0LtcseVlJPvcgZSOQdKlheJTo0djLa1UjNT9mo8Ynstpp4ow+1y2YBVpLaSWPxUsOBMza3f5vRrmXHrhXlwu3e1DCDRZ11zvg8A2Eps0sOuhaaYlJH0dK5Ge2Wndi1oly23c7Ex4gbDxJ2hzK7xJ8rr7t1qLvC/K5Iwi5p16PLQg2qnMTdTSTV3m5XZXZJdzf6bcZ5291jJMxJ2CXjYCdSANJnGNM+Q2S3hT7gdkn/YSo8HjqzywKM/Aec9doEttv+W7sa/lwxhUwmnuOZVulgyxaDC+llILsaGTYL3YINt0taTHGfkYUJm9iztouXO9uSJZO97OqkCRS7ZKTLcMO3Fs95ItvLjSYLFonq2eB2J2QmjhekaDsh3aON1fqH2sXLnX9rl00xcoFUaaDPIn9yQXSYTOySyt1ilXcz4nbpneNhh67whc8CmWKu8bI9Pj/n/GrYYWvCCp1wKvy1XYPOiQ1xkLHoSLcSKmAT62P8jWqXHiATXeRDjQxPmvRsaBaH3icbxx19ST+Hn+h9oI3vl/ve+/tTvrvo0x/wHaQvauxnl0+eL+rD+bzE9K1Q8W7ox667GpcawlIDsqvRT9PblWmuGmyCEtnV6btMLa9Z3fB3SZFQOnU8uHVdd6jM/qDdye+5vhyGq85N5p1ODNz02JJdtHvaVeQv0Nbx4G772gSvnnHw7LlZkaWtktftKM9kf9Frnju9cSNR2d8ubpvXOdi1ZPMSDj1xYtFtJKyrKWzIwImsq8nkk/vGokpIi+1N/pXnWwoabiWy7oHkTND3vPQ14cx2Fb+rxrF5l82LJTWje3HKsddESy3RrmS5ucFebXL4wRaru99zfUsB/9yU8cwWcLFlu6r3thvE3ujq4mAuJo7Fdd2g+YrtdNLF2nszV6ai3SA4RG9dm0+lK1qdHW4pM7x3NufXRnFZ996gSDStJEm0iy+1u5baVYpDviXEWcXilMnWG9VwPojMkbGpCX1OK2ElTFZj99ZqMv0VexVpvvWJR2+rorzdXfd676957uOmA5rO7oxRLBTeptK5UwO/NiItp5+WVq6O17Zt1+eS1010f+KFaU20O4y8lSLcIKs4X9sNt+mHDz1ONYRXGy2jeRt8u7QxEqfWSXnCyPj488f915zfXiId9ubunBFwP6q94/VMAD/H7f3GE+QFzZRFFYBB1172CTh0VXz/jtx/DY00NG52veX42iOQCh1t1rN2equkjT5g/PwfhM6b1Lwsb4caHu1/zndnBticaMDIccebYhqTsdfl/8nLRbxKegZo6f8TWToQdLMijAmzUsp3UPO5mbd3CxUomLtPCXD85W6nlM7wIv5zhLPCKN3sFhswWIHbg9CNScmrp+MNJ9DHBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAD+T88rqFjReOuxAAAAABJRU5ErkJggg==" alt="logo"/></NavLink></li>
          <li className="font-['Lato'] shadow-md">
            {/*<AutoComplete*/}
            {/*    options={searchData?.payload?.map(item => ({*/}
            {/*          label: <Link key={item._id} to={`/single-page/${item._id}`}>{item.product_name}</Link>*/}
            {/*        })*/}
            {/*    )}*/}
            {/*    style={{width: "200px"}}*/}
            {/*    onSelect={onSelect}*/}
            {/*    onSearch={(text) => text ? loadData(text) : setSearchData({payload: []})}*/}
            {/*    placeholder="input here"*/}
            {/*/>*/}
            <Input style={{width: "250px"}} pleacholder="Search..."/>
          </li>
          <li className="flex items-center gap-4">
            {/*<NavLink to="/dashboard/liked-products"></NavLink>*/}
            <FaRegHeart/>
            {/*to="/dashboard/carts"*/}
            <NavLink className="relative" to="/"><SlBasket/>
              <span className="w-5 h-5 flex font-semibold items-center justify-center text-white text-xs -top-3 -right-3  bg-rose-500 absolute rounded-full"></span>
            </NavLink>
          </li>
          <li className="active:scale-90 transition duration-500"><NavLink
              className="text-white bg-emerald-600 rounded-2xl px-5 py-2" to="auth">Login</NavLink></li>
        </ul>
      </nav>
  )
}
export default Navbar