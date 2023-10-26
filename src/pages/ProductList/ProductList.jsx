import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PaginationButton from './PaginationButton';
import Sort from './Sort';
import SelectBox from './SelectBox';
import { HOST } from '../../utils/variable';
import './ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('upcoming');
  const [search, setSearch] = useState('');
  const { state } = useLocation();

  const offset = (page - 1) * limit;

  useEffect(() => {
    axios
      .get(
        `${HOST}/events?category=${state}&sort=${sortBy}&page=${page}&size=${limit}`,
      )
      .then(response => {
        const dataArray = Object.values(response.data)[0].list;
        setPosts(dataArray);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const sortPosts = sortByOption => {
    const sortedPosts = [...posts];

    if (sortByOption === 'upcoming') {
      sortedPosts.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    } else if (sortByOption === 'sold') {
      sortedPosts.sort((a, b) => a.id - b.id);
    } else if (sortByOption === 'likes') {
      sortedPosts.sort((a, b) => b.likes - a.likes);
    }

    setPosts(sortedPosts);
  };

  const handleSortChange = selectedSortOption => {
    setSortBy(selectedSortOption);
    sortPosts(selectedSortOption);
  };

  const handleLimitChange = newLimit => {
    setLimit(newLimit);
  };

  const handleGotoDetail = () => {
    navigate(`/product-detail/${posts.id}`);
  };

  const handleSearch = () => {
    const baseUrl = `${HOST}/events?category=${state}&sort=${sortBy}&page=${page}&size=${limit}`;
    const searchUrl = `${baseUrl}?query=${search}`;

    axios
      .get(searchUrl)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('검색 오류:', error);
      });
  };

  return (
    <div className="productList">
      <div className="productListContainer">
        <div className="productListIntro">
          <span className="productListTitle">{state}</span>
        </div>
        <label>
          게시물 수:&nbsp;
          <SelectBox limit={limit} onLimitChange={handleLimitChange} />
          <Sort sortBy={sortBy} onSortChange={handleSortChange} />
        </label>
        <div className="inputDiv">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>검색</button>
        </div>

        <div className="productListMain" onClick={handleGotoDetail}>
          {posts.slice(offset, offset + limit).map(product => (
            <div className="productCard" key={product.id}>
              <div className="productImageDiv">
                <img
                  className="productImage"
                  src={product.thumbnailImage}
                  alt="공연이미지"
                />
              </div>
              <hr className="separateLine" />
              <div className="showInformation">
                <div className="productCardInfoDiv">
                  <span className="productCardInfoName">공연명:</span>
                  <span className="productCardInfoMain">{product.title}</span>
                </div>
                <div className="productCardInfoDiv">
                  <span className="productCardInfoName">시작일:</span>
                  <span className="productCardInfoMain">
                    {product.startDate}
                  </span>
                </div>
                <div className="productCardInfoDiv">
                  <span className="productCardInfoName">종료일:</span>
                  <span className="productCardInfoMain">{product.endDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <PaginationButton
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default ProductList;
