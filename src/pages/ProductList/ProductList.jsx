import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import PaginationButton from './PaginationButton';
import Sort from './Sort';
import './ProductList.scss';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('upcoming');
  const [search, setSearch] = useState('');

  const offset = (page - 1) * limit;

  useEffect(() => {
    axios
      .get(
        'http://10.58.52.221.8000/events?category=ballad&sort=likes&page=1&size=2',
      )
      .then(response => {
        const dataArray = Object.values(response.data)[0].list;
        console.log(dataArray);
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
      sortedPosts.sort((a, b) => a.name.localeCompare(b.name));
    }

    setPosts(sortedPosts);
  };

  const handleSortChange = selectedSortOption => {
    setSortBy(selectedSortOption);
    sortPosts(selectedSortOption);
  };
  // console.log('Search Term:', search);

  const handleSearch = () => {
    const baseUrl =
      'http://10.58.52.221.8000/events?category=ballad&sort=likes&page=1&size=2';
    const searchUrl = `${baseUrl}?query=${search}`;
    console.log('result', search);
    axios
      .get(searchUrl)
      .then(response => {
        setPosts(response.data);
        // console.log('검색 결과:', response.data);
      })
      .catch(error => {
        console.error('검색 오류:', error);
      });
  };

  return (
    <div className="productList">
      <div className="productListContainer">
        <div className="productListIntro">
          <span className="productListTitle">category</span>
        </div>
        <label>
          게시물 수:&nbsp;
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
        </label>
        <div className="inputDiv">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>검색</button>
        </div>
        <Sort sortBy={sortBy} onSortChange={handleSortChange} />
        <div className="productListMain">
          {posts.slice(offset, offset + limit).map(product => (
            <div className="productCard" key={product.id}>
              <div className="productImageDiv">
                <img
                  className="productImage"
                  src={product.imageUrl}
                  alt="공연이미지"
                />
              </div>
              <hr className="separateLine" />
              <div className="showInformation">
                <div className="productCardInfoDiv">
                  <span className="productCardInfoName">공연명:</span>
                  <span className="productCardInfoMain">{product.name}</span>
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
